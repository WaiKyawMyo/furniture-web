import { createBrowserRouter } from "react-router";
import RootLayout from "./Pages/RootLayout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Blog from "./Pages/blogs/Blog";
import BlogDetail from "./Pages/blogs/BlogDetail";
import BlogRootLayout from "./Pages/blogs/BlogRootLayout";
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
        Component: BlogRootLayout,
        children: [
          {
            index: true,
            Component: Blog,
          },
          {
            path: ":postId",
            Component: BlogDetail,
          },
        ],
      },
    ],
  },
]);

export default router;
