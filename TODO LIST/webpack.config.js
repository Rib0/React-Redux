const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const config = {
    entry: [
        //'webpack-dev-server/client') + '?/',
        './src/styles/index.scss',
        './src/index.js',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist', // webpack будет генерировать файл в памяти который в output и помещать его по этому пути,
                            // при devserver этот файл будет доступен по publicPath/filename/
                           // нужно для loaders, в index.html нужно указывать путь к js в памяти, чтобы был liveroload
                          // добавляет ко всем ссылкам prefix = publicPath
    },
    devServer: {
        // contentBase: path.join(__dirname, '/'), указывает на путь где распологается наш статический html file
        compress: true,
        overlay: true,
        stats: 'errors-only',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]___[hash:base64:5]',
                            sourceMap: true,
                            // importLoaders: 1,
                        }
                    },
                    'sass-loader',
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.scss'], // импорт без расширения файла
        modules: ['node_modules', path.join(__dirname, 'src')], // ищет данные файлы в этих дерикториях при import
    },
    
    // install common chunk plugin
    devtool: 'source-map', 
    plugins: [        
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].[hash].css',
        }),
    ]
}

module.exports = config;