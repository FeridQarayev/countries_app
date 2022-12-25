import MainRoot from "../pages/MainRoot";
import Country from "../pages/Country";
import Home from "../pages/Home";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "country",
        element: <Country />,
      },
    ],
  },
];
