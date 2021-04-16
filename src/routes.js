import { lazy } from "react";

const routes = [
  {
    label: "Домашняя страница",
    path: "/",
    exact: true,
    component: lazy(() => import("./components/pages/Home")),
    redirectTo: "/auth",
    privated: true,
    restricted: true,
  },
  {
    label: "Страница авторизации",
    path: "/auth",
    exact: true,
    component: lazy(() => import("./components/pages/Auth")),
    redirectTo: "/auth",
    privated: false,
    restricted: true,
  },
];

export default routes;
