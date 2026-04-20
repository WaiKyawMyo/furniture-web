import { createBrowserRouter } from "react-router";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";

// import Blog from "./Pages/blogs/Blog";
// import BlogDetail from "./Pages/blogs/BlogDetail";
// import BlogRootLayout from "./Pages/blogs/BlogRootLayout";

import ProductRootLayout from "./Pages/products/ProductRootLayout";
import RootLayout from "./Pages/RootLayout";
import Product from "./Pages/products/Product";
import ProductDetail from "./Pages/products/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: Error,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "blogs",
        lazy: () =>
          import("./Pages/blogs/BlogRootLayout").then((module) => ({
            Component: module.default,
          })),

        children: [
          {
            index: true,
            lazy: () =>
              import("./Pages/blogs/Blog").then((module) => ({
                Component: module.default,
              })),
          },
          {
            path: ":postId",
            lazy: () =>
              import("./Pages/blogs/BlogDetail").then((module) => ({
                Component: module.default,
              })),
          },
        ],
      },
      {
        path: "products",
        Component: ProductRootLayout,
        children: [
          { index: true, Component: Product },
          { path: ":productId", Component: ProductDetail },
        ],
      },
    ],
  },
]);

export default router;
