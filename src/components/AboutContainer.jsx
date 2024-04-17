import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutImage from "../Images/About.jpeg";
import Abdallaelsahmy from "../Images/Abdalla_elshamy.jpg";
import zainab from "../Images/zainab.jpg";
import mariam from "../Images/mariam.jpg";
import waled from "../Images/waled.jpg";
import kabongo from "../Images/kabongo.jpg";
import zanon from "../Images/zanon.jpg";


const AboutContainer = () => {
  const [team, setTeam] = useState([
    {
      id: 0,
      name: "Abdalla Elsahmy",
      jop: "Front-End Developer",
      img: Abdallaelsahmy,
    },
    {
      id: 1,
      name: "zainab Yasser",
      jop: "Front-End Developer",
      img: zainab,
    },
    {
      id: 2,
      name: "mariam Walled",
      jop: "Front-End Developer",
      img: mariam,
    },
    {
      id: 3,
      name: "Mostafa Waled",
      jop: "Front-End Developer",
      img: waled,
    },
    {
      id: 4,
      name: "kabongo ",
      jop: "Front-End Developer",
      img: kabongo,
    },
    {
      id: 5,
      name: "Mostafa zanon",
      jop: "Front-End Developer",
      img: zanon,
    },
  ]);
  return (
    <div className="bg-[#E5EDE8]">
      <div className="about-content text-center max-w-2xl mx-auto w-full mt-5 py-10">
        <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">
          We love our customers!
        </h2>
        <img src={AboutImage} alt="AboutImage" className="mx-auto rounded-lg" />
        <p className="text-lg text-center max-sm:text-sm my-6 max-sm:px-2 text-accent-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          obcaecati eum est commodi, quam, ut quidem deleniti quos quod
          temporibus dicta deserunt voluptates ab! Deleniti id repellat, labore
          fugiat obcaecati dolorem minima fugit quasi nam velit reiciendis
          delectus ea tempora.
        </p>
        <Link
          to="/contactUs"
          className="btn btn-wide bg-bgbtn hover:bg-bgbtnHome transition-all duration-200 text-white py-3 px-8 rounded-md "
        >
          Contact Us
        </Link>
      </div>
      {/* The team */}
      <div className="py-8">
        <h1 className="text-[45px] font-bold text-center text-black py-8 mb-5">
          Our Team
        </h1>
        <div className="flex items-center flex-wrap justify-around gap-[40px]">
          {team.map((person) => (
            <div key={person.id} className="w-[25%]">
              <img
                src={person.img}
                alt={person.name}
                className=" object-contain rounded-lg"
              />
              <h1 className="text-center text-[24px] font-bold text-black py-3">
                {person.name}
              </h1>
              <p className="text-center text-[18px] text-bgbtnHome">
                {person.jop}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
