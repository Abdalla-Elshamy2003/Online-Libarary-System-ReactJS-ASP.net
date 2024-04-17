import React, { useState } from "react";
import NavBar from "../components/NavBar";
import NavBreadcrumb from "../components/NavBreadcrumb";
import Footer from "../components/FooterForm";
import UserDetails from "../components/UserDetails";
import Charts from "../components/Charts";
import DashbordNavSide from "../components/DashbordNavSide";
import { FaBarsStaggered } from "react-icons/fa6";

const Dashbord = () => {
  const [navSide, setNavSide] = useState(false);

  return (
    <>
      <NavBar />
      <NavBreadcrumb page="DashBord" />
      <div className="py-5 relative">
        <button onClick={() => setNavSide(!navSide)}>
          <FaBarsStaggered className="text-[24px] text-bgbtn ms-8" />
        </button>
        <div
          className={
            navSide
              ? " absolute translate-x-0  transition-all duration-300 z-30"
              : " absolute translate-x-[-300px] transition-all duration-300 z-30"
          }
        >
          <DashbordNavSide />
        </div>
        <div className="absolute left-0 right-0 z-10">
          <UserDetails />
          <Charts />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashbord;
