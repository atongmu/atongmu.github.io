---
title: 'nvm 安装使用教程'
date: 2022-11-15 14:40:22
tags: [常用工具]
published: true
hideInList: false
feature: 
isTop: false
---
## 1.安装 nvm:
[下载nvm压缩包地址](https://github.com/coreybutler/nvm-windows/releases)

## 2.配置安装目录下修改settings.txt，配置安装目录下创建nodejs目录。
```
root: e:\Users\Administrator\AppData\Roaming\nvm
path: e:\Users\Administrator\AppData\Roaming\nvm\nodejs  ##node 目录
arch: 64
proxy: none
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

## 3.命令
```
nvm命令行操作命令
1,nvm nvm list 是查找本电脑上所有的node版本
 
- nvm list 查看已经安装的版本
- nvm list installed 查看已经安装的版本
- nvm list available 查看网络可以安装的版本
 
2,nvm install 安装最新版本nvm
 
3,nvm use <version> ## 切换使用指定的版本node
 
4,nvm ls 列出所有版本
 
5,nvm current显示当前版本
 
6,nvm alias <name> <version> ## 给不同的版本号添加别名
 
7,nvm unalias <name> ## 删除已定义的别名
 
8,nvm reinstall-packages <version> ## 在当前版本node环境下，重新全局安装指定版本号的npm包
 
9,nvm on 打开nodejs控制
 
10,nvm off 关闭nodejs控制
 
11,nvm proxy 查看设置与代理
 
12,nvm node_mirror [url] 设置或者查看setting.txt中的node_mirror，如果不设置的默认是 https://nodejs.org/dist/
　　nvm npm_mirror [url] 设置或者查看setting.txt中的npm_mirror,如果不设置的话默认的是： https://github.com/npm/npm/archive/.
 
13,nvm uninstall <version> 卸载制定的版本
 
14,nvm use [version] [arch] 切换制定的node版本和位数
 
15,nvm root [path] 设置和查看root路径
 
16,nvm version 查看当前的版本
```