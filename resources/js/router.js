import VueRouter from 'vue-router'

import Index from './pages/index.vue'

export default new VueRouter({
    mode:"history",
    routes:[
        {path:'/', component:Index}
    ]
})