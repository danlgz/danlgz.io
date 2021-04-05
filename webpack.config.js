const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/app/scripts/app.js'),
    output: {
        filename: '[fullhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ],
            },
            {
                test: /.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name(file) {
                        // if (argv.mode === 'production') {
                        //   return '[contenthash].[ext]';
                        // }
        
                        return '[name].[ext]';
                      },
                    }
                  },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Daniel Lucas',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/app/app.html'),
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[fullhash].css',
            chunkFilename: '[fullhash].css',
        }),
    ],
};
