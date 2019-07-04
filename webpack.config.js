const path = require('path'); 

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ],
            }, 
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'jquery': path.resolve(path.join(__dirname, 'node_modules', 'jquery')),
            'react': path.resolve(path.join(__dirname, 'node_modules', 'react')),
            'react-dom': path.resolve(path.join(__dirname, 'node_modules', 'react-dom'))
        }
    }
};