var join = require("path").join;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var UglifyPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: join(__dirname, "./dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {test: /\.css$/, use: ExtractTextPlugin.extract("css-loader")}
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css"),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new UglifyPlugin()
    ]
};
