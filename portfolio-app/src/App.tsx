import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/work",
    element: <div>{"Work"}</div>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
