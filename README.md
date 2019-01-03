# Particle Manager

> Particle Creating Library for Browser with WebAssembly

**Particle Manager is inspired from [particles.js](https://vincentgarreau.com/particles.js/) developed by [Vincent Garreau](https://github.com/VincentGarreau/particles.js/)**

## ChangeLog

See [CHANGELOG](./CHANGELOG.md)

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

To build this program, you need to install Rust.

Then you run below command to compile the program.

```bash
npm run build
```

## Usage

### Example

Add particles:

```javascript
import('./particle-manager')
  .then()
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

Particle Manager is licensed under the [MIT License](./LICENSE).
