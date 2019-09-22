import VueRouter from 'vue-router'

import Index from './pages/index.vue'
import Sign from './pages/sign.vue'
import AboutUs from './pages/about/index.vue'

export default new VueRouter({
    base:'/app',
    mode:"history",
    routes:[
        {path:'/', name:"home", component:Index},
        {path:'/about-us', name:"about-us",component:AboutUs},
        {path:'/sign', name:"sign",component:Sign}
    ]
})