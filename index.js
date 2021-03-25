#!/usr/bin/env node

const { program } = require("commander"); //引入npm包 commander
//异步方式转为promise 
const { promisify } = require("util");
// 构建自定义cli脚手架
//显示进度
const ora = require(ora);
const downloadGitRepo = require('download-git-repo')


// 设置指令版本
program.version("1.0.0");

program
// 增加指令
    .command("init")
    // 设置指令参数
    .arguments("<filderName>")
    // 指令的描述
    .description("初始化 wan-cli 脚手架")
    // 执行指令的回调
    .action((filderName) => {
        console.log(filderName);
    });

// 该行放置末尾，解析option方法所构建的参数
program.parse(process.argv);