import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Details from "../Details/Details";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetail from "../Pages/BookDetail/BookDetail";
import BookDetail2 from "../Pages/BookDetail2/BookDetail2";
import BookDetail3 from "../Pages/BookDetail3/BookDetail3";
import BookDetail4 from "../Pages/BookDetail4/BookDetail4";
import Read1 from "../Pages/BookDetail/Read1";
import AllBooks from "../Pages/AllBooks/AllBooks";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://library-management-server-rho.vercel.app/Books')
        },
        {
          path: '/addBook',
          element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
          path: '/allBooks',
          element: <AllBooks></AllBooks>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: () => fetch('https://library-management-server-rho.vercel.app/Books')
        },
        {
          path: '/bookDetail/:id',
          element: <BookDetail></BookDetail>,
          loader: () => fetch('https://library-management-server-rho.vercel.app/Books')
      },
      {
          path: '/bookDetail2/:id',
          element: <BookDetail2></BookDetail2>,
          loader: () => fetch('https://library-management-server-rho.vercel.app/Books')

      },
      {
          path: '/bookDetail3/:id',
          element: <BookDetail3></BookDetail3>,
          loader: () => fetch('https://library-management-server-rho.vercel.app/Books')
      },
      {
          path: '/bookDetail4/:id',
          element: <BookDetail4></BookDetail4>,
          loader: () => fetch('https://library-management-server-rho.vercel.app/Books')
      },
      {
        path: '/read',
        element: <Read1></Read1>
      }


      ]
    },
  ]);

  export default router;