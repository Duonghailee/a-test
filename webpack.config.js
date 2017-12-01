const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './entry.js',
    output: {
        path: __dirname + '/src',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }

            }
        ]

    },
    devServer: {
        port: 9000
    },

    plugins: [new HtmlWebpackPlugin({
        title: "HTML5 test",
        filename: 'src/index.html'
    })]
}