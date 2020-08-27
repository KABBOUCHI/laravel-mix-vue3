const mix = require("laravel-mix");

const { VueLoaderPlugin } = require("vue-loader");

let glob = require("glob");
const fs = require("fs");

class Vue3 {
  constructor() {
    this.toCompile = [];
  }

  /**
   * The API name for the component.
   */
  name() {
    return "vue3";
  }

  /**
   * Required dependencies for the component.
   */
  dependencies() {
    return [
      "@ant-design-vue/babel-plugin-jsx",
      "vue@next",
      "@vue/compiler-sfc",
      "vue-loader@next",
    ];
  }

  /**
   * Register the component.
   *
   * @param {*} entry
   * @param {string} output
   */
  register(entry, output) {
    if (!fs.existsSync(".babelrc")) {
      fs.copyFileSync(__dirname + "/stubs/.babelrc", ".babelrc");
    }

    if (!fs.existsSync("tsconfig.json")) {
      fs.copyFileSync(__dirname + "/stubs/tsconfig.json", "tsconfig.json");
    }

    if (!fs.existsSync("shims-vue.d.ts")) {
      fs.copyFileSync(__dirname + "/stubs/shims-vue.d.ts", "shims-vue.d.ts");
    }

    if (typeof entry === "string" && entry.includes("*")) {
      entry = glob.sync(entry);
    }

    entry = [].concat(entry).map((file) => new File(file));
    output = new File(output);

    this.toCompile.push({ entry, output });

    Mix.bundlingJavaScript = true;
  }

  /**
   * Assets to append to the webpack entry.
   *
   * @param {Entry} entry
   */
  webpackEntry(entry) {
    this.toCompile.forEach((js) => {
      entry.addFromOutput(
        js.entry.map((file) => file.path()),
        js.output,
        js.entry[0]
      );
    });
  }

  /**
   * webpack rules to be appended to the master config.
   */
  webpackRules() {
    return [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { babelrc: true },
          },
          {
            loader: "ts-loader",
            options: { appendTsSuffixTo: [/\.vue$/] },
          },
        ],
      },
    ];
  }

  /**
   * Override the generated webpack configuration.
   *
   * @param {Object} webpackConfig
   */
  webpackConfig(webpackConfig) {
    delete webpackConfig.resolve.alias["vue$"];
    webpackConfig.resolve.extensions = [
      "*",
      ".js",
      ".jsx",
      ".vue",
      ".ts",
      ".tsx",
    ];

    webpackConfig.plugins.push(new VueLoaderPlugin());
  }
}

mix.extend("vue3", new Vue3());
