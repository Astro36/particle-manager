/* eslint-disable import/no-extraneous-dependencies */
const Bundler = require('parcel-bundler');
const fs = require('fs');
const path = require('path');

const entryFiles = path.join(__dirname, './lib/index.js');

const options = {
  outDir: './dist',
  outFile: 'particles.bundle.js',
  watch: false,
  minify: true,
  logLevel: 2,
  sourceMaps: false,
};

(async () => {
  const bundler = new Bundler(entryFiles, options);
  bundler.on('buildEnd', () => {
    const distDir = path.join(__dirname, './dist');
    const bundledFile = path.join(distDir, '/particles.bundle.js');
    const bundledFileContent = fs.readFileSync(bundledFile).toString();
    const cargoFile = fs.readdirSync(distDir).find(value => value.search(/Cargo\.\w+\.toml/) >= 0);
    const wasmFile = bundledFileContent.match(/particles_bg\.\w+\.wasm/);
    if (wasmFile && wasmFile[0]) {
      fs.renameSync(path.join(distDir, wasmFile[0]), path.join(distDir, 'particles.bundle.wasm'));
      fs.unlinkSync(path.join(distDir, cargoFile));
      fs.writeFileSync(
        bundledFile,
        bundledFileContent.split(wasmFile[0]).join('particles.bundle.wasm'),
      );
    }
  });
  await bundler.bundle();
})();
