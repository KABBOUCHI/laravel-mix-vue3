# Laravel Mix v5 - Vue 3

A Laravel Mix extension for Vue 3, Typescript and JSX.

<b>Deprecated use [Laravel Mix v6](https://laravel-mix.com/docs)</b>

## Usage

First, install the extension.

```bash
npm install laravel-mix-vue3 --save-dev

//or

yarn add laravel-mix-vue3 -D
```

Make sure to install the below if Laravel Mix failed to install them

```
npm install @types/webpack-env @vue/compiler-sfc vue-loader@next laravel-mix-vue3  --save-dev
// or
yarn add @types/webpack-env @vue/compiler-sfc vue-loader@next laravel-mix-vue3 -D
```

Then, require it within your `webpack.mix.js` file, like so:

### Basic

```js
const mix = require("laravel-mix");

require("laravel-mix-vue3");

mix.vue3("resources/js/app.js", "public/js");
```

### Enable Typescript

```js
const mix = require("laravel-mix");

require("laravel-mix-vue3");

mix.vue3("resources/js/app.ts", "public/js", {
  typescript: true,
});
```

### Enable JSX

```js
const mix = require("laravel-mix");

require("laravel-mix-vue3");

mix.vue3("resources/js/app.jsx", "public/js", {
  jsx: true,
});
```

### Enable TSX

```js
const mix = require("laravel-mix");

require("laravel-mix-vue3");

mix.vue3("resources/js/app.tsx", "public/js", {
  typescript: true,
  jsx: true,
});
```
