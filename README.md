# 基本使用方法

## 创建项目

npx create-react-app [projectName]

无需全局安装 如果你是npm 5.2+的用户

或者

yarn create react-app my-app

## 运行项目

npm start 或者 yarn start

## 使用css module

直接使用，但是文件名得是 [name].module.css

## 使用sass

yarn add node-sass

css结尾改为scss 引入的时候直接用scss就可以了

如果想使用module,和css时使用相同的办法[name].module.scss

## 使用装饰器

npm install --save-dev babel-plugin-transform-decorators-legacy

Babel >= 7.x

{
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ]
}

Babel < 7.x
{
    "plugins": ["transform-decorators-legacy"]

