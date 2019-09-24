import VueRouter from 'vue-router';

import Home from './pages/home/index.vue';
import Sign from './pages/sign/index.vue';
import AboutUs from './pages/about/index.vue';
import Dashboard from './pages/dashboard/index.vue';
import ArticleDetail from './pages/article-detail/index.vue';

export default new VueRouter({
    base:'/app',
    mode:"history",
    routes:[
        {path:'/', name:"home", component:Home},
        {path:'/about-us', name:"about-us",component:AboutUs},
        {path:'/sign', name:"sign",component:Sign},
        {path:'/post/:slug', name:"post",component:ArticleDetail}
    ]
})