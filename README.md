# vueWebpackStructure
## 运行
### 启动后端服务器, 模拟proxy功能实现
```
cd backend
yarn
yarn server
```
### 启动开发编译
```
cd ..
yarn
yarn dev // 开发编译
yarn build // 生产编译
```

## TODO
### 公共
- [x] 加入 babel编译, polyfill
- [x] 加入 css编译, scss css预处理编译
- [x] 加入 vue或jsx的编译
- [x] 打包文件在html里面自动引入
- [x] 分离开发和生产的配置文件
- [x] 去除多余的编译信息
- [x] 添加ts编译
### 开发
- [x] 开发: 配置dev-server, proxy等
- [x] 开发: 配置source-map, 方便开发debug
- [x] 开发: 加入后缀解析和别名
- [x] 生产: 压缩css文件
- [x] 生产: 压缩js文件, mode为production时webpack默认配置

### 生产
- [x] 生产: 抽离公共的chunk, 比如node_modules里面的包单独打包
- [x] 生产: 指定html上面的publicPath
- [x] 生产: 提取css出来到指定文件

### 优化
- [x] 提高编译速度, 设置cache为true