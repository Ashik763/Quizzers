import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Topics from "./Components/Topics/Topics";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <Home> </Home>,
      children: [
        {
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          path: "/",
          element: <Topics></Topics>,
        },
        
        {
          path: "/topics",
          element: <Topics></Topics>,
        },
      ],
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
