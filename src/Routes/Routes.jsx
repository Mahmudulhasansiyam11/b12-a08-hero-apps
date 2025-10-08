import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import App from "../Pages/App/App";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
            loader: () => fetch('/hero.json'),
        },
        {
            path: "/app",
            Component: App
        }
    ]
  },
]);



export default router;