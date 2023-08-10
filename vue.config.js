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
    },
    productionSourceMap: false,
    pwa: {
        name: 'Learn Key',
        themeColor: '#8db3f1',
        iconPaths: {
            faviconSVG: null,
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-180x180.png',
            maskIcon: null,
            msTileImage: null
        },
        manifestOptions: {
            icons: [
                {
                    src: './img/icons/android-chrome-192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: './img/icons/android-chrome-512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ]
        },
        workboxOptions: {
            skipWaiting: true
        }
    }
});
