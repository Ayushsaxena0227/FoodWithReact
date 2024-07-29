import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Globalcontext } from "../context/Context.";

export default function Navbar() {
  const { searchparam, setsearchparam, handlesubmit } =
    useContext(Globalcontext);
  console.log(searchparam);
  return (
    <div className={styles.navbarContainer}>
      <h2 className={styles.logo}>FoodRecipe</h2>
      <form className={styles.searchForm} onSubmit={handlesubmit}>
        <input
          type="text"
          name="search"
          value={searchparam}
          onChange={(event) => setsearchparam(event.target.value)}
          placeholder="Enter Items"
          className={styles.searchInput}
        />
      </form>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={styles.navLink}
            // activeClassName={styles.activeLink}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/favorites"
            className={styles.navLink}
            // activeClassName={styles.activeLink}
          >
            Favourites
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/details"
            className={styles.navLink}
            // activeClassName={styles.activeLink}
          >
            Details
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
