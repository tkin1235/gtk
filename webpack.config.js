const path = require('path');

const isProduction = typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'inline-source-map';

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        watch: mode === 'development',
        entry: './src/index.tsx',
        target: 'web',
        mode,
        devtool,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,

                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {loader: 'style-loader', options: {sourceMap: true}},
                        {loader: 'css-loader'},
                        {loader: 'postcss-loader'},
                        {loader: 'sass-loader'},
                    ],
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'client.js',
            path: path.join(__dirname, 'dist', 'public')
        },
        plugins: [
            new HtmlWebPackPlugin({
                favicon: './public/favicon.ico',
                template: "./public/index.html",
                filename: "./index.html"
            })
        ]
    },
];