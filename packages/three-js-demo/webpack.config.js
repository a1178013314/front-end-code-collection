const webpack = require("webpack");
const path = require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const HTMLWebPlugin=require('html-webpack-plugin');

module.exports = {
    mode: "development",
    // 从哪里开始编译
    entry: {
        app: "./src/main.ts",
        vendor: ["three"]

    },
    // 编译到哪里
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[chunkhash].js"
    },
    // 配置模块规则
    module: {
        rules: [
            {
                test: /\.ts?$/,    // .ts或者tsx后缀的文件，就是typescript文件
                use: "ts-loader",   // 就是上面安装的ts-loader
                exclude: "/node-modules/" // 排除node-modules目录
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebPlugin({
            template: "./src/index.html",
            // watch: false,
            // inline :false,
            hot:false,
            liveReload: false,
        }),
    ]

}