# e-vue-contextmenu

基于 vue 的鼠标菜单事件,本组件提供菜单的显示和隐藏，可自定义菜单，以及菜单列的样式

## 展示
<img src="/images/contextMenu.gif" />

## Usage

1. Install

	```shell
	npm install --save e-vue-contextmenu@latest
	```
2. main.js

    ```shell
    import EVueContextmenu from 'e-vue-contextmenu'
    Vue.use(EVueContextmenu)
    ``
3. template

```html
    <div @contextmenu.stop.prevent="$refs.ctxshow.showMenu($event, data)">
        鼠标右键点击
    </div>
     <e-vue-contextmenu ref="ctxshow" id="contextStyle" @ctx-show="show" @ctx-hide="hide">
        <div @click="handlerSql">Sql数据操作</div>
        <div @click="hideMenu">打开表</div>
        <div>生成代码</div>
    </e-vue-contextmenu>
```
4. javascript

```javascript

    hideMenu() {
        this.$refs.ctxshow.hideMenu(); // 隐藏菜单
    }
    show(data) {
        console.log('菜单显示了')
    },
    hide(data) {
        console.log('菜单隐藏了')
    },
    handlerSql() {
        // 自定义事件
    }
```


## API

- showMenu 鼠标菜单显示方法，$event, data自定义参数，@ctx-show，@ctx-hide可接收到这个参数
- hideMenu 鼠标菜单隐藏方法，可通过this.$refs.ctxshow.hideMenu()调用
- ctx-show 鼠标菜单显示事件
- ctx-hide 鼠标菜单隐藏事件


## Develop

	```shell

	npm install // 安装依赖包
	
	npm start // 启动项目
    
	```

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)