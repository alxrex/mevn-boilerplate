import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import BootstrapVue from 'bootstrap-vue'
//  Posts
import Posts from '@/components/Posts'
import CreatePost from '@/components/CreatePost'
import EditPost from '@/components/EditPost'
//  Cliente
import Cliente from '@/components/cliente/Cliente'
import CreateCliente from '@/components/cliente/CreateCliente'
import EditCliente from '@/components/cliente/EditCliente'
//  Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bModal from 'bootstrap-vue/es/components/modal/modal'
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'

Vue.component('b-modal', bModal)
Vue.directive('b-modal', bModalDirective)

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
      //  Posts
        {
          path: '/posts',
          name: 'Posts',
          component: Posts,
          children: [
            {
              path: ':postId',
              name: 'EditPost',
              component: EditPost
            },
            {
              path: 'create',
              name: 'CreatePost',
              component: CreatePost
            }
          ]
        },
        //  Cliente
        {
          path: '/cliente',
          name: 'Cliente',
          component: Cliente,
          children: [
            {
              path: ':clienteId',
              name: 'EditCliente',
              component: EditCliente
            },
            {
              path: 'create',
              name: 'CreateCliente',
              component: CreateCliente
            }
          ]
        }
      ]
    }
  ]
})
