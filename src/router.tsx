import { createBrowserRouter } from "react-router";
import RootLayout from "./Pages/RootLayout";
import Error from "./Pages/error";
import Home from "./Pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary:Error,
    children:[
        {
            index:true,
            Component: Home
        },
        {
            
        }
    ]
  },
]);

export default router