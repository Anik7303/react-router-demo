import { createBrowserRouter } from "react-router-dom";
import Base from "./components/Base";
import About from "./pages/About";
import Demo from "./pages/Demo";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "demo", element: <Demo /> },
    ],
  },
]);

export default router;
