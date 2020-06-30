const appConfig = require("./app.config");

module.exports = {
  configureWebpack: {
    name: appConfig.title,
    resolve: {
      alias: require("./aliases.config").webpack,
    },
  },
  css: {
    sourceMap: true,
  },
  devServer: {
    disableHostCheck: true,
  },
};
