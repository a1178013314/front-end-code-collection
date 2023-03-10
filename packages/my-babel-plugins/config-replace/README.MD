# BASE_URL 自动切换功能

## 需求背景

我们在平时开发时，公司一般会区分几个环境，如：
- 开发环境(DEV)
- 测试环境(TEST)
- 生产环境(PROD)
- 用户接受测试环境（UAT）

在采用docker部署的时候，由于采用了nginx的反向代理，要根据不同的打包环境，手动修改BASE_URL，容易出错，还会造成频繁对git代码进行修改，留下无用的提交记录。

## 不同利益相关者需求
- 用户：
- 运营：
- 产品：
- 测试：测试时由于开发误操作，导致前端调用错误的环境导致数据异常的问题
- 开发：减少手动改动可能出现的问题 减少排查错误的时间 
- 运维：

## 视角——通用需求 软件质量
- 安全性 1、不采用运行时方案，采用本地或者打包服务编译方案 
- 性能 加入文件匹配 只处理规定的文件
- 可拓展性 1、插件功能原子性 2、用户可以通过配置进行定制化修改
- 可靠性 1、单测覆盖
- 开发资源 低
- 演进 增加反馈功能
- 弹性 无
- 法规 无
- 国际化 无

## 方案
- 使用babel插件，在编译阶段对指定代码进行修改，并生成最终打包产物，不对源码进修改
- 100%的单测覆盖率，并与利益相关者讨论测试用例
- 插件功能原子性，支持入参
- 将使用文档，发布到指定平台，方便查阅，并增加反馈功能

## 项目文档
### 系统功能结构
### 重要信息
### 部署方案

## 使用文档