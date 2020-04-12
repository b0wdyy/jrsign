import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <p>"Passionate car-wrapper in Lommel."</p>

      <img src="../assets/Logo.png" alt="logo" />
    </header>
  );
};
