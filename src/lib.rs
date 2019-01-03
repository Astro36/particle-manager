extern crate wasm_bindgen;

use std::f64;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    #[wasm_bindgen(js_namespace = Math)]
    fn random() -> f64;
}

fn random_arbitrary(min: f64, max: f64) -> f64 {
    random() * (max - min) + min
}

static CONNECTABLE_DISTANCE: f64 = 100.0;
static CONNECTABLE_DISTANCE_SQUARED: f64 = CONNECTABLE_DISTANCE * CONNECTABLE_DISTANCE;
static PARTICLE_SIZE_LIMIT: f64 = 3.0;
static PARTICLE_SPEED_LIMIT: f64 = 5.0;

#[derive(PartialEq)]
enum ParticlePosition {
    TopBoundary,
    RightBoundary,
    BottomBoundary,
    LeftBoundary,
    InsideCanvas,
}

struct Particle {
    x: f64,
    y: f64,
    size: f64,
    speed_x: f64,
    speed_y: f64,
}

impl Particle {
    fn create_random(
        position: ParticlePosition,
        canvas_width: f64,
        canvas_height: f64,
    ) -> Particle {
        match position {
            ParticlePosition::TopBoundary => Particle {
                x: random_arbitrary(0.0, canvas_width),
                y: 0.0,
                size: random_arbitrary(0.0, PARTICLE_SIZE_LIMIT),
                speed_x: random_arbitrary(-PARTICLE_SPEED_LIMIT, PARTICLE_SPEED_LIMIT),
                speed_y: random_arbitrary(0.0, PARTICLE_SPEED_LIMIT),
            },
            ParticlePosition::RightBoundary => Particle {
                x: canvas_width,
                y: random_arbitrary(0.0, canvas_height),
                size: random_arbitrary(0.0, PARTICLE_SIZE_LIMIT),
                speed_x: random_arbitrary(-PARTICLE_SPEED_LIMIT, 0.0),
                speed_y: random_arbitrary(-PARTICLE_SPEED_LIMIT, PARTICLE_SPEED_LIMIT),
            },
            ParticlePosition::BottomBoundary => Particle {
                x: random_arbitrary(0.0, canvas_width),
                y: canvas_height,
                size: random_arbitrary(0.0, PARTICLE_SIZE_LIMIT),
                speed_x: random_arbitrary(-PARTICLE_SPEED_LIMIT, PARTICLE_SPEED_LIMIT),
                speed_y: random_arbitrary(-PARTICLE_SPEED_LIMIT, 0.0),
            },
            ParticlePosition::LeftBoundary => Particle {
                x: 0.0,
                y: random_arbitrary(0.0, canvas_height),
                size: random_arbitrary(0.0, PARTICLE_SIZE_LIMIT),
                speed_x: random_arbitrary(0.0, PARTICLE_SPEED_LIMIT),
                speed_y: random_arbitrary(-PARTICLE_SPEED_LIMIT, PARTICLE_SPEED_LIMIT),
            },
            _ => Particle {
                x: random_arbitrary(0.0, canvas_width),
                y: random_arbitrary(0.0, canvas_height),
                size: random_arbitrary(0.0, PARTICLE_SIZE_LIMIT),
                speed_x: random_arbitrary(-PARTICLE_SPEED_LIMIT, PARTICLE_SPEED_LIMIT),
                speed_y: random_arbitrary(-PARTICLE_SPEED_LIMIT, PARTICLE_SPEED_LIMIT),
            },
        }
    }

    fn calculate(&mut self) {
        self.x += self.speed_x;
        self.y += self.speed_y;
    }

    fn get_position(&self, canvas_width: f64, canvas_height: f64) -> ParticlePosition {
        let x = self.x;
        let y = self.y;
        if y < -CONNECTABLE_DISTANCE {
            return ParticlePosition::TopBoundary;
        } else if x > canvas_width + CONNECTABLE_DISTANCE {
            return ParticlePosition::RightBoundary;
        } else if y > canvas_height + CONNECTABLE_DISTANCE {
            return ParticlePosition::BottomBoundary;
        } else if x < -CONNECTABLE_DISTANCE {
            return ParticlePosition::LeftBoundary;
        }
        ParticlePosition::InsideCanvas
    }

    fn is_connectable(&self, other_particle: &Particle) -> bool {
        let squared_distance =
            (self.x - other_particle.x).powi(2) + (self.y - other_particle.y).powi(2);
        squared_distance > 0.0 && squared_distance <= CONNECTABLE_DISTANCE_SQUARED
    }
}

#[wasm_bindgen]
pub struct ParticleManager {
    id: String,
    canvas: HtmlCanvasElement,
    canvas_width: f64,
    canvas_height: f64,
    particles: Vec<Particle>,
    particle_amount_limit: u32,
}

#[wasm_bindgen]
impl ParticleManager {
    #[wasm_bindgen(constructor)]
    pub fn new(id: String, amount: u32) -> ParticleManager {
        let canvas = web_sys::window()
            .expect("no global `window` exists")
            .document()
            .expect("should have a document on window")
            .get_element_by_id(&id)
            .expect("document should have a target canvas")
            .dyn_into::<web_sys::HtmlCanvasElement>()
            .map_err(|_| ())
            .unwrap();
        let canvas_width = canvas.width() as f64;
        let canvas_height = canvas.height() as f64;
        let particles = (0..amount)
            .map(|_| {
                Particle::create_random(ParticlePosition::InsideCanvas, canvas_width, canvas_height)
            })
            .collect();
        ParticleManager {
            id: id,
            canvas: canvas,
            canvas_width: canvas_width,
            canvas_height: canvas_height,
            particles: particles,
            particle_amount_limit: amount,
        }
    }

    pub fn update(&mut self) {
        let canvas_width = self.canvas_width;
        let canvas_height = self.canvas_height;
        let context = self
            .canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<CanvasRenderingContext2d>()
            .unwrap();
        let particles = &mut self.particles;
        let particle_amount = particles.len();
        
        context.clear_rect(0.0, 0.0, canvas_width, canvas_height);

        for i in 0..particle_amount {
            let particle = &mut particles[i];
            particle.calculate();
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

        for i in 0..particle_amount {
            let particle = &particles[i];
            for j in i..particle_amount {
                let other_particle = &particles[j];
                if particle.is_connectable(&other_particle) {
                    context.begin_path();
                    context.move_to(other_particle.x, other_particle.y);
                    context.line_to(particle.x, particle.y);
                    context.stroke();
                }
            }
        }

        for i in 0..particle_amount {
            let position = particles[i].get_position(canvas_width, canvas_height);
            if position != ParticlePosition::InsideCanvas {
                particles[i] = Particle::create_random(position, canvas_width, canvas_height);
            }
        }
    }
}
