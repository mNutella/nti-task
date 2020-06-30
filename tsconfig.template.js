module.exports = {
  compilerOptions: {
    experimentalDecorators: true,
    baseUrl: ".",
    target: "es2017",
    module: "commonjs",
    strict: true,
    jsx: "preserve",
    importHelpers: true,
    strictNullChecks: true,
    noImplicitThis: true,
    strictFunctionTypes: true,
    noEmit: true,
    moduleResolution: "node",
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    sourceMap: true,
    noImplicitAny: false,
    typeRoots: ["./src/types/*", "./node_modules/@types"],
    types: ["node", "websql"],
    lib: ["esnext", "dom", "dom.iterable", "scripthost", "es6", "es2015"],
    // ...
    // `paths` will be automatically generated using aliases.config.js
    // ...
  },
  include: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
  exclude: ["node_modules"],
  files: ["src/types/shims-vue.d.ts"],
};
