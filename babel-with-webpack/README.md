# Building ES2015 code for the browser with Webpack

## Setup: the loader
Loaders are "extension points" for Webpack that allow it to work with various tools, including Babel.

- Uses `babel-loader` and `babel-core`, which are included as dev dependencies.
- Configuration for the loader is set in the `module` section of "webpack.config.js".
  - "test" says pack up all the Javascript..
  - ... except what's in the "exclude" section.

## Modules
We have a CommonJS module working in the browser. "main.js" requires a module using ES2015 `import` syntax. Babel transpiles this to CommonJS. Then Webpack allows CommonJS syntax to be run in the browser (see all the gobblydegook at the top of the generated file "bundle.js").
