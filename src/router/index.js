import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/vistas/Dashboard.vue";
import Tables from "@/vistas/Tables.vue";
import Billing from "@/vistas/Billing.vue";
import Profile from "@/vistas/Profile.vue";
import Rtl from "@/vistas/Rtl.vue";
import SignIn from "@/vistas/SignIn.vue";
import SignUp from "@/vistas/SignUp.vue";
import auto from "@/vistas/auto.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
  {
    path: "/auto",
    name: "Autos",
    component: auto
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
