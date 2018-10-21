import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('./views/Index.vue');
const Market = () => import('./views/Market.vue');
const AllProducts = () => import('./components/market/AllProducts.vue');
const Product = () => import('./components/market/Product.vue');
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/store',
      name: 'market',
      component: Market,
      children: [
        {
          path: '',
          name: 'all_products',
          component: AllProducts
        },
        {
          path: '/product/:id',
          name: 'product',
          component: Product
        }
      ]
    }
  ]
})
