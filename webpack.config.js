const { watchFile } = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template/html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  "./src/template.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            },
        ],
    },
};