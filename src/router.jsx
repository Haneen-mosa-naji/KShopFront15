import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/cart/Cart";
import About from "./pages/about/About";
import Wishlist from "./pages/wishlist/Wishlist";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'about',
        element: <About />
      },
        {
        path: 'wishlist',
        element: <Wishlist />
      },
       {
        path: 'products',
        element: <Products />
      },
      {
        path: 'cart',
        element: <Cart/>
      }
    ]
  }
]);

export default router;
