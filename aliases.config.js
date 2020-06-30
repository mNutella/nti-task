const path = require("path");
const fs = require("fs");
const prettier = require("prettier");

const aliases = {
  "@": ".",
  "@src": "src",
  "@api": "src/api",
  "@components": "src/components",
  "@views": "src/routes/views",
  "@layouts": "src/routes/layouts",
  "@assets": "src/assets",
  "@utils": "src/utils",
  "@types": "src/types",
  "@design": "src/assets/design/index.sass",
  "@constants": "src/constants",
  "@config": "src/config",
  "@plugins": "src/plugins",
};

module.exports = {
  webpack: {},
  tsconfig: {},
};

for (const alias in aliases) {
  const aliasTo = aliases[alias];
  module.exports.webpack[alias] = resolveSrc(aliasTo);
  module.exports.tsconfig[alias + "/*"] = [aliasTo + "/*"];
  module.exports.tsconfig[alias] = aliasTo.includes("/index.")
    ? [aliasTo]
    : [
        aliasTo + "/index.ts",
        aliasTo + "/index.json",
        aliasTo + "/index.vue",
        aliasTo + "/index.sass",
      ];
}

const tsconfigTemplate = require("./tsconfig.template") || {};
const tsconfigPath = path.resolve(__dirname, "tsconfig.json");

fs.writeFileSync(
  tsconfigPath,
  prettier.format(
    JSON.stringify({
      ...tsconfigTemplate,
      compilerOptions: {
        ...(tsconfigTemplate.compilerOptions || {}),
        paths: module.exports.tsconfig,
      },
    }),
    {
      parser: "json",
    }
  ),
  (error) => {
    console.log("Error");
    console.log(error);
    if (error) {
      console.error(
        "Error while creating tsconfig.json from aliases.config.js."
      );
      throw error;
    }
  }
);

function resolveSrc(_path) {
  return path.resolve(__dirname, _path);
}
