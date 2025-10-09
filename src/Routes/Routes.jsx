import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import App from "../Pages/App/App";
import AppDetails from "../Pages/AppDetails/AppDetails";
import PageError from "../Errors/PageError/PageError";
import SearchError from "../Errors/SearchError/SearchError";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch('../hero.json'),
      },
      {
        path: "/app",
        Component: App,
        loader: () => fetch("../hero.json"),
      },
      {
        path: "/app/:id",
        Component: AppDetails,
        loader: () => fetch("../hero.json"),
        errorElement: <SearchError></SearchError>,
      },
    ],
    errorElement: <PageError></PageError>,
  },
]);

export default router;
