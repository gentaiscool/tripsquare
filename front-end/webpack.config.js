var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            },
            {
                 test: /\.css$/,
                 loader: 'style-loader!css-loader',
                 include: /flexboxgrid/
            },
            {
                 test: /\.css$/,
                 loader: 'style-loader!css-loader',
                 include: APP_DIR
            }
        ]
    }
};

module.exports = config;