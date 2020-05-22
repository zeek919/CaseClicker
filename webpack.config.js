const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const config = {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            extensions: ['.js'],
            alias: {
                style: path.resolve(__dirname, 'src', 'style'),
            },
        },
        mode: 'development',
        watch: true,
        devtool: 'source-map',
        devServer: {
            historyApiFallback: true,
            contentBase: './',
            contentBase: './dist',
            hot: true,
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        { loader: 'style-loader' },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName:
                                    env === 'production'
                                        ? '[hash:base64]'
                                        : '[path][name]__[local]--[hash:base64:5]',
                            },
                        },
                        { loader: 'sass-loader' },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: './src/index.html',
                filename: './index.html',
            }),
        ],
    };

    return config;
};
