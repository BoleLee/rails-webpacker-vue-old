
问题：

1. 修改.vue组件，js实时重新编译;  ```# yes```

2. 前端文件有所修改，浏览器自动reload页面: ```hot reload```；  ```# no```

3. 哪些文件会实时编译打包在```public/packs/``` ? ```# javascript/packs/*.js```，设置见 ```config/webpack/paths.yml```

!!4. 如何使```javascript/packs/```分文件夹里的js也编译？ 如 ```javascript/packs/test/*.js```

!!!5. js文件已重新编译成功（已查看验证了），刷新页面为何内容无更新？

