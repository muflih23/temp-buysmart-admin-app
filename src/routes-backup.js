import React, { lazy } from "react";

const routes = [
  {
    element: lazy(() => import("./pages/auth/login")),
    path: "/login",
    isAuthorized: false,
  },
  {
    element: lazy(() => import("./pages/home/dashboard/home")),
    path: "/dashboard",
    isAuthorized: true,
  },
  {
    element: lazy(() => import("./pages/auth/login")),
    path: "/",
    isAuthorized: false,
  },
  {
    element: lazy(() => import("./pages/home/create-new-template/create-new-template")),
    path: "/new-template",
    isAuthorized: true,
  },
  /* catalog route */
  {
    element: lazy(() => import("./pages/home/catalog/catalogs-list")),
    path: "/catalog-list",
    isAuthorized: true,
  },
  {
    element: lazy(() => import("./pages/home/create-new-catalog/create-new-catalog")),
    path: "/new-catalog",
    isAuthorized: true,
  },
  /* category route */
  {
    element: lazy(() => import("./pages/home/category/categories-list")),
    path: "/category-list",
    isAuthorized: true,
  },
  {
    element: lazy(() => import("./pages/home/create-new-category/create-new-category")),
    path: "/new-category",
    isAuthorized: true,
  },
]

export default routes;