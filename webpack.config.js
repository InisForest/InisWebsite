// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'eval-source-map',
    plugins: [
        // Add your plugins here
        // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
    ],
    optimization: {
        minimize: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        [ "@babel/plugin-transform-react-jsx", { "pragma": "jsx" } ],
                        [ "@babel/plugin-proposal-class-properties", { "loose": true } ],
                    ],
                    comments: false
                }
            },
            {
                test: /\.css$/i,
                use: [ "css-loader" ],
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader'
            }
        ],
    },
};
