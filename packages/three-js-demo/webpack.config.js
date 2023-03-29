const webpack = require("webpack");
const path = require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const HTMLWebPlugin=require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin")

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
        new CopyPlugin({ 
            patterns: [
                {
                  noErrorOnMissing: false, // 默认false，不会对丢失的文件产生错误
                  force: false, // 默认false，覆盖已经存在的文件
                  priority: 0,   // 允许指定复制具有相同目标名称的文件的优先级
                  from: path.resolve(__dirname, "src/images"),  // 拷贝来源
                  to: path.resolve(__dirname, "dist/images"), // 拷贝到的位置
                  toType: "dir",  // 目录dir、文件file或模板template
                }
             ],
              options: {
                concurrency: 100,   // 同时请求fs的数量限制
              },
        })
        
    ],
    resolve:{
        extensions: ['.ts','.js'],
    }
    // watchOptions:{
    //     poll:1000,//监测修改的时间(ms)
    //     aggregeateTimeout:500, //防止重复按键，500毫米内算按键一次
    //     ignored:/node_modules/,//不监测
    // }

}