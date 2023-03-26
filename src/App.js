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
import Statistics from "./Components/Statistics/Statistics";
import Blog from "./Components/Blog/Blog";
import Test from "./Components/Test/Test";
import NoRoute from "./Components/NoRoute/NoRoute";

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
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          path: "/topics",
          element: <Topics></Topics>,
        },
        {
          path: "/quiz/:id",
          loader: async ({params}) => {
            // console.log(params);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
          element:<Test> </Test>,
        },
        
        {
          path: "/statistics",
          loader: async ({params}) => {
            // console.log(params);
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element:<Statistics> </Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path:"*",
          element:<NoRoute></NoRoute>
        }
      ],
      
    },
    // {
    //   path:"*",
    //   element:<div> No route found</div>
    // }

  
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
