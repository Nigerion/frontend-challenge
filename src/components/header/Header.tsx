import { NavLink } from "react-router-dom";

import cl from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <nav className={cl.tabs}>
        <NavLink
          to="/"
          className={({ isActive }) => `${cl.tab} ${isActive ? cl.active : ""}`}
          end
        >
          Все котики
        </NavLink>
        <NavLink
          to="/cat"
          className={({ isActive }) => `${cl.tab} ${isActive ? cl.active : ""}`}
        >
          Любимые котики
        </NavLink>
      </nav>
    </header>
  );
};
