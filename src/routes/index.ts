import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import TemplateDetail from '../views/TemplateDetail.vue'
import Works from '../views/Works.vue'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'index',
            component:Index,
            children:[
                { path: '', name: 'home', component: Home, meta: { title: '欢迎来到慕课乐高' } },
                { path: 'template/:id', name: 'template', component: TemplateDetail, meta: { title: '模版详情' } },
                { path: 'works', name: 'works', component: Works, meta: { title: '我的作品', requiredLogin: true } }
            ]
        },
        {
            path: '/editor/:id',
            name: 'editor',
            component: () => import(/* webpackChunkName: "editor" */ '../views/Editor.vue'),
            meta: { requiredLogin: true, title: '编辑我的设计' }
          },
    ]
})
export default router