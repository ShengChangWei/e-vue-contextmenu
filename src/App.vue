<template>
  <div id="app">
    <div class="box" @contextmenu.stop.prevent="$refs.ctxMenu.showMenu($event, '数据')"></div>
    <e-vue-contextmenu id="ctx-menu-content" ref="ctxMenu" @ctx-show="show" @ctx-hide="hide">
      <div @click="testDoing">详情</div>
      <div>设置</div>
    </e-vue-contextmenu>
  </div>
</template>

<script>
// import EVueContextmenu from './../packages/index.js'
export default {
  name: 'app',
  components: {
    //EVueContextmenu
  },
  methods: {
    show(data) {
       console.log('右键菜单显示不了')
    },
    hide(data){
        console.log('右键菜单隐藏了')
    },
    testDoing() {
     alert('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  background-color: #fff;
  }

  #ctx-menu-content {
    background-color: #434b55;
    border: 1px solid #fff;
    color: #fff;
    padding: 0;
    >div {
      padding: 5px;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
    }
  }

</style>


