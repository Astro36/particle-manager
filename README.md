# Particle Manager

> Particle Creating Library for Browser with WebAssembly

[![NPM Version](https://img.shields.io/npm/v/particle-manager.svg?style=for-the-badge)](https://www.npmjs.com/package/particle-manager) [![NPM Downloads](https://img.shields.io/npm/dt/particle-manager.svg?style=for-the-badge)](https://www.npmjs.com/package/particle-manager)

**Particle Manager is inspired from [particles.js](https://vincentgarreau.com/particles.js/) developed by [Vincent Garreau](https://github.com/VincentGarreau/particles.js/)**

## ChangeLog

![Demo Screenshot](https://github.com/Astro36/particle-manager/blob/master/demo/screenshot.png)

See [CHANGELOG](https://github.com/Astro36/particle-manager/blob/master/CHANGELOG.md)

## Demo

See [Demo](https://astro36.github.io/particle-manager/demo/)

## Installation

- Install with npm:

```bash
npm install particle-manager --save
```

- Clone the repo:

```bash
git clone https://github.com/Astro36/particle-manager.git
```

## Build Requirement

To build this program, you need to install [Rust](https://www.rust-lang.org/) and [WASM Pack](https://rustwasm.github.io/wasm-pack).

Then you run below command to compile the program.

```bash
wasm-pack build
```

## Usage

### Example

Add particles:

```javascript
import('particle-manager')
  .then(({ ParticleManager }) => {
    const canvas = document.getElementById('particles');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    context.fillStyle = 'white';
    context.strokeStyle = 'white';

    const particleManager = new ParticleManager(canvas, 100);
    const frameRequetCallback = () => {
      particleManager.update();
      window.requestAnimationFrame(frameRequetCallback);
    }
    window.requestAnimationFrame(frameRequetCallback);
  })
  .catch(console.error);
```

## License

```text
Copyright (c) 2018 Seungjae Park

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

Particle Manager is licensed under the [MIT License](https://github.com/Astro36/particle-manager/blob/master/LICENSE).
