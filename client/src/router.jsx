import App from "./App";
import Home from "./pages/home";
import Menu from "./pages/menu";
import MenuForm from "./pages/menuform";
import Reservation from "./pages/reservation";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "menuform",
        element: <MenuForm />,
      },
    ],
  },
]);
export default router;
