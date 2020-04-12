import React from "react";
import Logo from "../assets/Logo.png";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <p>"Passionate car-wrapper in Lommel."</p>

      <img src={Logo} alt="logo" />

      <a href="/">maak afspraak</a>
    </header>
  );
};
