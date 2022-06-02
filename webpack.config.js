const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require ('path');

const ruleForImages = {
    test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ]
}

const ruleForHtml = 
    {
      test: /\.html$/,
      loader: "html-loader",
    }
  

const ruleForStyles = {
    test: /\.(s(a|c)ss)$/,
             use: ['style-loader','css-loader', 'sass-loader']
}

const ruleForJavaScript = {

            test:/\.js$/,
            loader:'babel-loader',
            options: {
                presets: [['@babel/preset-react', 
                    {
                runtime: 'automatic' //classisc
                    }
                ] ]
            }
}


const rules = [ruleForJavaScript, ruleForStyles, ruleForImages, ruleForHtml];

module.exports = {
    entry: './src/index.js',
    // este output cambien el nombre d ela carpeta dist a build para webpack, si quieres dist solo quita este linea de output
    output: {
        path: path.resolve(__dirname, 'build')
    },

    plugins: [

        new HtmlWebpackPlugin({ template: 'public/index.html' })
    ],

    module: { rules },
    devServer: {
        open: true, // abre el nav auto
        port: 3000
          }
}