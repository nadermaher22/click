import React, {useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About-Us/AboutUs";
import ContactUs from "./pages/Contact-Us/ContactUs";
import Exports from "./pages/Exports/Exports";
import Services from "./pages/Services/Services";
import Shop from "./pages/Shop/Shop";
import LoginUser from "./pages/Login/LoginUser";
import SignupUser from "./pages/Login/SignupUser";
import SignUpExpert from "./pages/Login/SignupExpert";
import LoginExpert from "./pages/Login/LoginExpert";
import Verify from "./pages/Login/Verify";

const Layout = () => {

  return (
    <div className="app">
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/exports",
        element: <Exports />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/signupUser",
        element: <SignupUser />,
      },
      {
        path: "/signupexpert",
        element: <SignUpExpert />,
      },
      {
        path: "/LoginUser",
        element: <LoginUser />,
      },
      {
        path: "/LoginExpert",
        element: <LoginExpert />,
      },
      {
        path: "/Verify",
        element: <Verify />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
