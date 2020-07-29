# Laravel Mix - Vue 3

A Laravel Mix extension for Vue 3, Typescript and JSX.

## Usage

First, install the extension.

```
npm install laravel-mix-vue3 --save-dev
```

Then, require it within your `webpack.mix.js` file, like so:

```js
const mix = require("laravel-mix");

require("./laravel-mix-vue3");

mix.vue3("resources/js/app.ts", "public/js");
```
