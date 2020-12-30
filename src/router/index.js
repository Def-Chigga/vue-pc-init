import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home'),
    children: [
      /* 路由懒加载 */
      {
        path: 'main',
        name: 'main',
        component: () => import(/* webpackChunkName: "main" */ '../views/Home/Main/Main')
      },
      {
        path: 'demo',
        name: 'demo',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Home/Demo/Demo')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

// 导航守卫
/*
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数 表示放行
  // next() 放行   next('/login')  强制跳转
  /!*  if (to.path !== 'login') {
      const tokenStr = window.sessionStorage.getItem('token');
      if (!tokenStr) {
        next('/login');
      }
    } else {
      next();
    } *!/
  /!*
  if (to.path === 'login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login');
  next();
  *!/
});
*/

export default router;
