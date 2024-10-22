import { createRouter, createWebHistory } from "vue-router";
import Home from "@components/Home.vue";
import Product from "@components/Product.vue";
import DetailProduct from "@components/DetailProduct.vue";
import NotFound from "@components/NotFound.vue";
import CallCenter from "@components/CallCenter.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/products",
    name: "products",
    component: Product,
    // NESTED ROUTING
    children: [
      {
        path: "/call_center",
        name: "call_center",
        component: CallCenter,
      }
    ]
  },
  {
    // MENGGUNAKAN PARAMS
    // path: "/detail_product/:id",
    name: "detail_product",
    component: DetailProduct,
    // MENGGUNAKAN PARAMS
    // props: true,
  },
  // will match everything and put it under `route.params.pathMatch`
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
