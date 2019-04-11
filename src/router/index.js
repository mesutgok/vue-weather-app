import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main'
import Detail from '@/views/Detail'


const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
    },
    {
        path: '/detail/:id/:color',
        name: 'Detail',
        component: Detail,
        meta:{
            className: 'detail'
        }
    },
    {
        path: '*',
        redirect: '/'
    }
];

Vue.use(Router)

const router = new Router({
    mode:'history',
    routes
});

router.beforeEach((to, from, next)=>{

    //set body class
    let bodyTag = document.getElementsByTagName('BODY')[0];
    bodyTag.className = to.meta.className;

    // next router
    next();
})


export default router
