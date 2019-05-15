<template>
	<div ref="contextMenu" class="ctx-menu-container" :style="ctxStyle">
		<slot></slot>
	</div>
</template>

<script>
/**
 * 第一步：实现点击出现
 * 第二步：出现在点击鼠标位置
 * 第三步：点击其他地方隐藏
 */
export default {
  name: "e-vue-contextmenu",
  data() {
    return {
      locals: {},
      ctxVisible: false, // 控制菜单显示隐藏
      ctxTop: 0,
      ctxLeft: 0
    };
  },

  // 监听计算属性，变量只要发生变化都会调用
  computed: {
    ctxStyle() {
      return {
        display: this.ctxVisible ? "block" : "none",
        top: (this.ctxTop || 0) + "px",
        left: (this.ctxLeft || 0) + "px"
      };
    }
  },
  methods: {
    // 全局监听事件
    addListener() {
      window.addEventListener("click", this._onclick, true);
    },
    // 取消全局监听
    removerListener() {
      window.removeEventListener("click", this._onclick, true);
    },
    // 设置位置
    /*
		* this function handles some cross-browser compat issues
		* thanks to https://github.com/callmenick/Custom-Context-Menu
		*/
    setPosition(e) {
      e = e || window.event;
      const scrollingElement =
        document.scrollingElement || document.documentElement;
      if (e.pageX || e.pageY) {
        this.ctxLeft = e.pageX;
        this.ctxTop = e.pageY - scrollingElement.scrollTop;
      } else if (e.clientX || e.clientY) {
        this.ctxLeft = e.clientX + scrollingElement.scrollLeft;
        this.ctxTop = e.clientY + scrollingElement.scrollTop;
      }

      this.$nextTick(() => {
        const menu = this.$el;
        const minHeight =
          (menu.style.minHeight || menu.style.height).replace("px", "") || 32;
        const minWidth =
          (menu.style.minWidth || menu.style.width).replace("px", "") || 32;
        const scrollHeight = menu.scrollHeight || minHeight;
        const scrollWidth = menu.scrollWidth || minWidth;

        const largestHeight = window.innerHeight - scrollHeight - 25;
        const largestWidth = window.innerWidth - scrollWidth - 25;

        if (this.ctxTop > largestHeight) this.ctxTop = largestHeight;
        if (this.ctxLeft > largestWidth) this.ctxLeft = largestWidth;
      });
      return e;
    },
    showMenu(e, data) {
      this.ctxVisible = true;
      this.setPosition(e);
      this.$emit("ctx-show", (this.locals = data || {}));
      this.addListener();
    },
    // 全局监听点击
    _onclick(e) {
      e = e || window.event;
      let isOpen = !!this.ctxVisible;
      let outsideClick = isOpen && !this.$el.contains(e.target);

      if (outsideClick) {
        this.ctxVisible = false;
        this.$emit("ctx-hide", this.locals || {});
        this.removerListener();
      }
    },

    /**
     * 隐藏菜单
     */
    hideMenu() {
      this.ctxVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.ctx-menu-container {
  position: fixed;
  padding: 0;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: block;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 0.9rem;
  color: #373a3c;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  -moz-box-shadow: 0 0 5px #ccc;
  -webkit-box-shadow: 0 0 5px #ccc;
  box-shadow: 0 0 5px #ccc;
}
</style>

