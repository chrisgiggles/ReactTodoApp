var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: [
            'webpack.test.config.js'
        ],
        preprocessors: {
            'webpack.test.config.js': ['webpack']
        },
        reporters: ['dots'],
        webpack: {
            module: {
                loaders: [{
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015']
                    }
            }]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};