import React from "react";
import Logo from "../assets/Logo.png";

import { Button } from "@material-ui/core";
import Dropdown from "./Dropdown";

export const Header: React.FC = () => {
  return (
    <header>
      <p>"Passionate car-wrapper in Lommel."</p>

      <nav>
        <img src={Logo} alt="logo" />

        <ul>
          <li>
            <p>
              Diensten <Dropdown />
            </p>
          </li>
          <li>
            <a href="/">Freelance</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>

      <Button variant="contained" color="secondary">
        maak afspraak
      </Button>
    </header>
  );
};
