import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "product",
    component: () =>
      import(/*webpackChunkName:"Product"*/ "../views/Product.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/*webpackChunkName:"Cart"*/ "../views/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 100);
      })
    );
  },
});

router.afterEach((to, from) => {
  window.document.title = `${String(to.name)} | Qtec Solution Store`;
});

export default router;
