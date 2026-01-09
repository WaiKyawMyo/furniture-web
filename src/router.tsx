import { createBrowserRouter } from "react-router";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";

import error from "./Pages/error";
import about from "./Pages/about";
import blog from "./Pages/blogs/blog";
import { blogDetail } from "./Pages/blogs/blogDetail";
import blogLayout from "./Pages/blogs/blogLayout";
import productRootLayout from "./Pages/product/productRootLayout";
import productDetail from "./Pages/product/productDetail";
import product from "./Pages/product/product";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: error,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: about,
        ErrorBoundary: error,
      },
      {
        path: "blogs",
        Component: blogLayout,
        ErrorBoundary: error,
        children: [
          {
            path: ":postid",
            Component: blogDetail,
            ErrorBoundary: error,
          },
          {
            index: true,
            Component: blog,
          },
        ],
      },
      {
        path: "products",
        Component: productRootLayout,
        ErrorBoundary: error,
        children: [
          {
            path: ":productid",
            Component: productDetail,
            ErrorBoundary: error,
          },
          {
            index: true,
            Component: product,
          },
        ],
      },
    ],
  },
]);
