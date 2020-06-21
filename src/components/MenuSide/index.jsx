import React from "react";
import { withRouter } from "react-router-dom";

const MenuSide = ({ isMenuOpen, handleMenu, history }) => (
  <div className={["sideMenu", isMenuOpen && "sideMenu--open"].join(" ")}>
    <div
      className={["sideMenu__menu", isMenuOpen && "sideMenu__menu--show"].join(
        " "
      )}
    >
      <ul className="">
        <li
          onClick={() => {
            handleMenu();
            history.push("/");
          }}
        >
          Notas
        </li>
        <li
          onClick={() => {
            handleMenu();
            history.push("/sobre");
          }}
        >
          Sobre
        </li>
      </ul>
    </div>
    <div className="sideMenu__close" onClick={() => handleMenu()}></div>
  </div>
);

export default withRouter(MenuSide);
