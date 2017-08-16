# new_chic_pwa

## 请使用yarn替代部分npm命令

- 安装工程依赖
  ``` bash
  yarn
  ```
- 更新工程依赖
  ``` bash
  yarn upgrade [package]
  ```
- 删除工程依赖
  ``` bash
  yarn remove [package]
  ```
- 在 localhost:9000 上启动带有热更新机制的开发服务器
  ``` bash
  npm run dev
  ```
- 在 localhost:9009 上启动服务器,用于手机上查看控制台报错
  ``` bash
  npm run vconsole
  ```
- 检查您的代码是否规范
  ``` bash
  npm run lint
  ```
- 构建线上生产环境产物
  ``` bash
  npm run build
  ```
- 构建线上生产环境产物并且查看构建分析报告
  ``` bash
  npm run build --report
  ```

## 使用eslint standard规则规范代码，额外的规则如下：
- 两个空格缩进
- js结尾不写分号
- 逗号后面必须写空格
- 禁止 function 标识符和括号之间出现空格
- 强制在花括号中使用空格
- 语句块之前使用空格
- 禁止圆括号内的空格
- 禁止函数圆括号之前有一个空格
- 强制关键字周围使用空格

## 使用stylus
- 不需要额外添加浏览器前缀(autoprefixer处理)
- 不使用rem方案，直接写px
- 使用基于flex的弹性布局，少使用浮动，布局需兼容ipad

## vuex控制
- ajax 请求不要写在 UI 组件里面，放在 action 里便于复用
- 静默原则：部分页面进行静默更新，比如个人中心页，可以先使用vuex内的数据进入页面，然后静默更新数据
- 退出登录清空所有跟用户相关的数据，如订单列表等，所以跟登录相关的数据写在同一个模块内，可以模块内再细分模块

## 其他
- 本项目demo组件在pages/demo下，请严格按照说明书写
- 1px边框解决方案请使用assets/style/1px.styl
- 使用editorconfig, vsCode等编辑器需安装插件： http://editorconfig.org/
- UI库：https://vuetifyjs.com/
