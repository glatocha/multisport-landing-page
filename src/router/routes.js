const routes = [
  { path: "/", component: () => import("../pages/WelcomePage.vue") },
  { path: "/welcome", component: () => import("../pages/WelcomePage.vue") },
  { path: "/password", component: () => import("../pages/ChangePassword.vue") },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/ErrorNotFound.vue"),
  },
];

export default routes;
