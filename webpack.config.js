        const path = require ('path');
        const HtmlwebpackPlugin = require('html-webpack-plugin');

        module.exports = {
            entry: './src/app/index.js',
            output: {
                path: path.join(__dirname,'dist'),
                filename: 'bundle.js'
            },
        devServer:{
            port:3000
        },
        module:{
            rules:[
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
       plugins:[
            new HtmlwebpackPlugin({
                template: './src/index.html'
            })
        ],
    };