extern crate wasm_bindgen;

use std::cell::RefCell;
use std::f64;
use std::rc::Rc;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{CanvasRenderingContext2d, Document, HtmlCanvasElement, Window};

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    #[wasm_bindgen(js_namespace = Math)]
    fn random() -> f64;
}

pub struct Particle {
    x: f64,
    y: f64,
    size: f64,
    speed_x: f64,
    speed_y: f64,
}

fn window() -> Window {
    web_sys::window().expect("no global `window` exists")
}

fn document() -> Document {
    window()
        .document()
        .expect("should have a document on window")
}

fn canvas() -> HtmlCanvasElement {
    document()
        .get_element_by_id("particles")
        .expect("document should have a target canvas")
        .dyn_into::<web_sys::HtmlCanvasElement>()
        .map_err(|_| ())
        .unwrap()
}

fn request_animation_frame(f: &Closure<FnMut()>) {
    window()
        .request_animation_frame(f.as_ref().unchecked_ref())
        .expect("should register `requestAnimationFrame` OK");
}

fn distance_squared(particle1: &Particle, particle2: &Particle) -> f64 {
    (particle1.x - particle2.x).powi(2) + (particle1.y - particle2.y).powi(2)
}

fn random_arbitrary(min: f64, max: f64) -> f64 {
    random() * (max - min) + min
}

#[wasm_bindgen(start)]
pub fn start() {
    let amount = 30;
    let width = 1000.0;
    let height = 1000.0;

    let mut particles: Vec<Particle> = vec![];
    for _ in 0..amount {
        particles.push(Particle {
            x: random_arbitrary(0.0, width),
            y: random_arbitrary(0.0, height),
            size: random_arbitrary(0.0, 3.0),
            speed_x: random_arbitrary(-1.0, 1.0),
            speed_y: random_arbitrary(-1.0, 1.0),
        });
    }

    let f = Rc::new(RefCell::new(None));
    let g = f.clone();

    *g.borrow_mut() = Some(Closure::wrap(Box::new(move || {
        let context = canvas()
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<CanvasRenderingContext2d>()
            .unwrap();

        context.clear_rect(0.0, 0.0, width, height);

        for mut particle in &mut particles {
            particle.x += particle.speed_x;
            particle.y += particle.speed_y;
        }

        for particle in &particles {
            for other_particle in &particles {
                let d = distance_squared(particle, other_particle);
                if d > 0.0 && d <= 5000.0 {
                    log("aa");
                    context.begin_path();
                    context.move_to(other_particle.x, other_particle.y);
                    context.line_to(particle.x, particle.y);
                    context.stroke();
                }
            }
            context.begin_path();
            context
                .arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0.0,
                    f64::consts::PI * 2.0,
                )
                .unwrap();
            context.fill();
        }

        request_animation_frame(f.borrow().as_ref().unwrap());
    }) as Box<FnMut()>));

    request_animation_frame(g.borrow().as_ref().unwrap());
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
