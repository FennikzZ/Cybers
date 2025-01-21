import { lazy } from "react";

import { RouteObject } from "react-router-dom";

import Loadable from "../components/third-patry/Loadable";

// import FullLayout from "../layout/FullLayout";

const MainPages = Loadable(lazy(() => import("../pages/authentication/Login")));

const Dashboard = Loadable(lazy(() => import("../pages/dashboard")));

const Customer = Loadable(lazy(() => import("../pages/customer")));

const CreateCustomer = Loadable(lazy(() => import("../pages/customer/create")));

const EditCustomer = Loadable(lazy(() => import("../pages/customer/edit")));

const Game = Loadable(lazy(() => import("../pages/ciper")));

const CiperCreate1 = Loadable(lazy(() => import("../pages/ciper/level1")));
const CiperCreate2 = Loadable(lazy(() => import("../pages/ciper/level2")));
const CiperCreate3 = Loadable(lazy(() => import("../pages/ciper/level3")));
const CiperCreate4 = Loadable(lazy(() => import("../pages/ciper/level4")));
const CiperCreate5 = Loadable(lazy(() => import("../pages/ciper/level5")));
const Final = Loadable(lazy(() => import("../pages/ciper/final")));

const AdminRoutes = (isLoggedIn: boolean): RouteObject => {

  return {

    path: "/",

    // element: isLoggedIn ? <FullLayout /> : <MainPages />,

    children: [

      {

        path: "/",

        element: <Dashboard />,

      },

      {

        path: "/customer",

        children: [

          {

            path: "/customer",

            element: <Customer />,

          },

          {

            path: "/customer/create",

            element: <CreateCustomer />,

          },

          {

            path: "/customer/edit/:id",

            element: <EditCustomer />,

          },

        ],

      },
      {

        path: "/ciper",
        children: [
          {
            path: "/ciper",
            element: <Game />,
          },
          {
            path: "/ciper/level1",
            element: <CiperCreate1 />,
          },
          {
            path: "/ciper/level2",
            element: <CiperCreate2 />,
          },
          {
            path: "/ciper/level3",
            element: <CiperCreate3 />,
          },
          {
            path: "/ciper/level4",
            element: <CiperCreate4 />,
          },
          {
            path: "/ciper/level5",
            element: <CiperCreate5 />,
          },
          {
            path: "/ciper/final",
            element: <Final />,
          },
        ],
      },
    ],
  };
};


export default AdminRoutes;