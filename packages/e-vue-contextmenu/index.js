import EVueContextmenu from './e-vue-contextmenu.vue'


EVueContextmenu.install = function(vue) {
    Vue.component(EVueContextmenu.name, EVueContextmenu)
}

export default EVueContextmenu;