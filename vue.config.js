const { defineConfig } = require('@vue/cli-service');
const packageJson = require('./package.json');
process.env.VUE_APP_VERSION = packageJson.version;

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = 'Learn Key';
            return args;
        });
    }
});
