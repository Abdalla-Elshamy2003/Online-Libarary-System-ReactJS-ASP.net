import React from "react";
import { Link } from "react-router-dom";

const DashbordNavSide = () => {
  return (
    <>
      <div className=" bg-bgbtn w-[300px] h-[100vh] flex items-center flex-col gap-[60px] rounded-md py-5">
        <Link
          to="/addBooks"
          className=" text-white text-center text-[18px] w-full h-[40px] rounded-lg hover:text-bgbtnHome transition-all duration-200"
        >
          Add Book
        </Link>
        <Link
          to="/mange_account"
          className=" text-white text-center text-[18px] w-full h-[40px] rounded-lg hover:text-bgbtnHome transition-all duration-200"
        >
          Mange Account
        </Link>
        <Link
          to="/mangeBorrowed"
          className=" text-white text-center text-[18px] w-full h-[40px] rounded-lg hover:text-bgbtnHome transition-all duration-200"
        >
          Mange Borrowed
        </Link>
      </div>
    </>
  );
};

export default DashbordNavSide;
