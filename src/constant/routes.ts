import AboutUsPage from "@/pages/AboutUsPage";
import ProductsPage from "@/pages/ProductsPage";
import RootPage from "@/pages/RootPage";
import ServicesPage from "@/pages/ServicesPage";
import WorkDetail from "@/pages/WorkDetail";
import WorksPage from "@/pages/WorksPage";
import { createElement } from "react";
import { PathRouteProps } from "react-router-dom";

const withNavRoutes: Array<PathRouteProps> = [
  {
    path: "/",
    element: createElement(RootPage),
  },
  {
    path: "/works",
    element: createElement(WorksPage),
  },
  {
    path: "/about-us",
    element: createElement(AboutUsPage),
  },
  {
    path: "/services",
    element: createElement(ServicesPage),
  },
  {
    path: "/products",
    element: createElement(ProductsPage),
  },

  {
    path: "/work/:index",
    element: createElement(WorkDetail),
  },
];

const routes: Array<PathRouteProps> = [{}];

export { routes, withNavRoutes };
