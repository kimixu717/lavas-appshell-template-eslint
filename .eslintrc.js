module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  // required to lint *.vue files
  "plugins": [
    "html"
  ],
  // check if imports actually resolve
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "build/webpack.base.conf.js"
      }
    }
  },
  "rules": {
    "no-unused-vars": 0,
    "linebreak-style": [0, "unix"],
    "no-console": 0,
    'no-undef': 0,
    "no-mixed-spaces-and-tabs": 2,
    // 两个空格缩进
    "indent": ["error", 2],
    // 使用单引号
    "quotes": ["error", "single"],
    // 结尾不使用分号
    "semi": ["error", "never"],
    // 逗号后面必须写空格
    "comma-spacing": [2, { "before": false, "after": true }],
    // 禁止 function 标识符和括号之间出现空格
    "no-spaced-func": 2,
    // 强制在花括号中使用空格
    "object-curly-spacing": [2, "always"],
    // 语句块之前使用空格
    "space-before-blocks": [2, "always"],
    // 禁止圆括号内的空格
    "space-in-parens": [2, "never"],
    // 禁止函数圆括号之前有一个空格
    "space-before-function-paren": [2, "never"],
    // 强制关键字周围使用空格
    "keyword-spacing": [2, { "before": true, "after": true }]
  }
}
