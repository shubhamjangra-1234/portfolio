// Layout.js
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./assets/components/Navbar/navbar"
import PropTypes from "prop-types";
import Footer from './assets/components/Footer/Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  // Define the path where navbar and footer should be hidden
  const hideLayout = location.pathname === "/";
  console.log(location.pathname);

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      <Outlet />
      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;
