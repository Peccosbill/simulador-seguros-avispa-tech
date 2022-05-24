import React from "react";
import avispa from "../img/avispa.png";

const Nav = () => {
  return (
    <nav className="text-white bg-blue-500 h-14 px-4 flex items-center justify-between font-poppins font-semibold">
      <div className="flex items-center">
        <img className="w-10" src={avispa} alt="Avispa" />
        <h1 className="text-2xl">AvispaTech Seguros</h1>
      </div>
      <a className="p-2 rounded-md hover:bg-blue-600 hover:text-white ease-in duration-100" href="https://www.avispa.tech" target="_blank">Sobre nosotros</a>
    </nav>
  );
};

export default Nav;
