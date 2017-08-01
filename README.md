# new_chic_pwa

## 请使用yarn替代部分npm命令

``` bash
# 安装工程依赖
yarn

# 更新工程依赖
yarn upgrade [package]

# 删除工程依赖
yarn remove [package]

# 在 localhost:9000 上启动带有热更新机制的开发服务器
npm run dev

# 检查您的代码是否规范
npm run lint

# 构建线上生产环境产物
npm run build

# 构建线上生产环境产物并且查看构建分析报告
npm run build --report
```

## 使用eslint standard规则规范代码，额外的规则如下：
- 使用2个空格代表一个tab
- js结尾不写分号

## 使用stylus
- 不需要额外处理浏览器前缀(autoprefixer处理)
- 不使用rem方案，直接写px
- 使用基于flex的弹性布局，少使用浮动，布局需兼容ipad
