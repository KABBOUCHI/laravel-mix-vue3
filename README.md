# Laravel Mix - Vue 3

A Laravel Mix extension for Vue 3, Typescript and JSX.

## Usage

First, install the extension.

```bash
npm install laravel-mix-vue3 vue-loader@next --save-dev

//or

yarn add laravel-mix-vue3 vue-loader@next -D
```

Then, require it within your `webpack.mix.js` file, like so:

```js
const mix = require("laravel-mix");

require("laravel-mix-vue3");

mix.vue3("resources/js/app.js", "public/js");
```
