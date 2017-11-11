import Vue from 'vue'
import VueRouter from 'vue-router'
import VueInstantsearch from 'vue-instantsearch'

Vue.use(VueRouter)
Vue.use(VueInstantsearch)

let router =  new VueRouter({
    routes: [
        { path: '/', component: require('./views/home') },
        { path: '/search', component: require('./views/search') },
    ]
})

new Vue({
    el: '.app',
    router,
})