import React from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const menuClick = (e) => {
    document.querySelector(".nav-links").classList.toggle("active");
    document.addEventListener("click", function (e) {
      if (!e.composedPath().includes(document.querySelector(".menu-btn"))) {
        document.querySelector(".nav-links").classList.remove("active");
      }
    });
  };
  return (
    <div>
      <header>
        <div className="containerHeader">
          <div className="content">
            <div className="headerLeft">
              <div className="logo">
                <Link to={"/"} className="logo">
                  TMDB
                </Link>
              </div>
            </div>

            <ul className="nav-links">
              <li>
                <Link to={"/"} className="add">
                  Add Movie
                </Link>
              </li>
              <li>
                <Link to={"/watchlist"} className="wl">
                  Watchlist
                </Link>
              </li>

              <li>
                <Link to={"/watched"} className="whd">
                  Watched
                </Link>
              </li>
            </ul>
            <div className="responsiveRight">
              <Link className="menu-btn" onClick={menuClick}>
                <IoMenu className="menu" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
