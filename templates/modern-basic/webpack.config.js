const autoprefixer = require('autoprefixer');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const cssNano = require('cssnano');
const historyApiFallback = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = (env) => {
    const isLocal = env === 'local';
    const BrowserSync = new BrowserSyncPlugin({
        port: 3000,
        server: {
            baseDir: 'build',
            middleware: [historyApiFallback()],
        },
    });
    const HtmlWebpack = new HtmlWebpackPlugin({
        template: 'src/index.ejs',
        inject: 'body',
    });
    const MiniCssExtract = new MiniCssExtractPlugin({
        filename: 'style.min.css',
    });
    return {
        mode: isLocal ? 'development' : 'production',
        entry: ['@babel/polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'scripts.min.js',
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: [/node_modules/, /build/],
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader',
                    ],
                },
                {
                    test: /(\.css|\.scss|\.sass)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    cssNano,
                                    autoprefixer,
                                ],
                                sourceMap: true,
                            },
                        }, {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [path.resolve(__dirname, 'src', 'scss')],
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
        watch: isLocal,
        plugins: isLocal
            ? [
                BrowserSync,
                MiniCssExtract,
                HtmlWebpack,
            ]
            : [
                MiniCssExtract,
                HtmlWebpack,
            ],
        devtool: isLocal ? 'inline-source-map' : 'source-map',
        devServer: {
            historyApiFallback: true,
        },

    };
};
