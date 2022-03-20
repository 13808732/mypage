#gh-pages 使用
    1.package.json文件下：
        添加"homepage":"https://用户名.github.com/项目名"
    2.配置scripts
        "scripts":{
            ...,
            "predeploy":"npm run build",
            "deploy";"gh-pages -d build"
        }
    3.需要生成可部署在github上的页面时，执行npm run deploy命令
      此时在远程repo里会多一条gh-pages分支，该分支可用来配置给github pages来展示网页。