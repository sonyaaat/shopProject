import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logOut } from "../redux/auth/auth-operations";
import {
  selectIsLoggedIn,
  selectUser,
  selectRole,
} from "../../src/redux/auth/auth-selectors";
import sprite from "../images/sprite.svg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openClose = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen)
  };
  

  const handleResize = () => {
    setIsOpen(window.innerWidth > 480 ? false : true);
  };
  window.addEventListener("resize", handleResize);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const role = useSelector(selectRole);

  const handleSubmit = () => {
    dispatch(logOut());
  };

  return (
    <>
      {isOpen && (
        <div
          className="menu-container js-menu-container is-open"
          id="mobile-menu"
        >
          <button
            type="button"
            className="menu-button menu-button--close js-close-menu"
            onClick={openClose}
            aria-label="перемикач мобильного меню"
            aria-expanded="false"
          >
            <svg width="40px" height="40px">
              <use className="icon-cross" href={`${sprite}#cross`}></use>
            </svg>
          </button>

          <div className="mobile-menu ">
            <nav className="header__nav">
              <ul className="list header__list">
                <li className="list header__item" onClick={openClose}>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive
                      ? "header__link  link header__link--active"
                      : "header__link  link "
                  }
                   
                  >
                    About us
                  </NavLink>
                </li>
                <li className="list header__item" onClick={openClose}>
                  <NavLink to="/portfolio"
                   className={({ isActive }) =>
                   isActive
                     ? "header__link  link header__link--active"
                     : "header__link  link "
                 }>
                    Main Page
                  </NavLink>
                </li>
                <li className="list header__item" onClick={openClose}>
                  <NavLink to="/chat" 
                   className={({ isActive }) =>
                   isActive
                     ? "header__link  link header__link--active"
                     : "header__link  link "
                 }>
                    Chat
                  </NavLink>
                </li>
                {!isLoggedIn && (
                  <li className="list header__item js-login none" onClick={openClose}>
                    <NavLink to="/login" 
                     className={({ isActive }) =>
                     isActive
                       ? "header__link  link header__link--active"
                       : "header__link  link "
                   }>
                      Login
                    </NavLink>
                  </li>
                )}
                
                {role === "admin" && (
                  <li className="list header__item js-admin none" onClick={openClose}>
                    <NavLink to="/adminpage" 
                     className={({ isActive }) =>
                     isActive
                       ? "header__link  link header__link--active"
                       : "header__link  link "
                   }>
                      Admin
                    </NavLink>
                  </li>
                )}
                {role && (
                  <li className="list header__item js-user none" onClick={openClose}>
                    <NavLink to="/userinfo" 
                     className={({ isActive }) =>
                     isActive
                       ? "header__link  link header__link--active"
                       : "header__link  link "
                   }>
                      User Info
                    </NavLink>
                  </li>
                )}
                {role === "user" && (
                  <li className="list header__item js-user none" onClick={openClose}>
                    <NavLink to="/myOrders" 
                     className={({ isActive }) =>
                     isActive
                       ? "header__link  link header__link--active"
                       : "header__link  link "
                   }>
                      My orders
                    </NavLink>
                  </li>
                )}

                {role === "admin" && (
                  <li className="list header__item js-add none">
                    <NavLink to="/add"  className={({ isActive }) =>
                    isActive
                      ? "header__link  link header__link--active"
                      : "header__link  link "
                  } onClick={openClose}>
                      Add Item
                    </NavLink>
                  </li>
                )}
                {role === "admin" && (
                  <li className="list header__item js-add none" onClick={openClose}>
                    <NavLink to="/adminOrders" className={({ isActive }) =>
                    isActive
                      ? "header__link  link header__link--active"
                      : "header__link  link "
                  }>
                      Orders
                    </NavLink>
                  </li>
                )}
              </ul>
            </nav>
            {role && (
              <Link to="/basket " onClick={openClose}>
                <svg width="50px" height="70px" className="header__basket">
                  <use href={`${sprite}#basket`}></use>
                </svg>
              </Link>
            )}
            {isLoggedIn && (
              <svg
                width="50px"
                height="70px"
                className="header__basket logout none"
                onClick={handleSubmit}
              >
                <use href={`${sprite}#icon-logout`}></use>
              </svg>
            )}
          </div>
        </div>
      )}
      <header className="header" data-testid="header">
        <div className="container header__container">
          <a href="/" lang="en" className="logo">
            Esste<span className="studio">Store</span>
          </a>
          <div className="header__wrap" id="header__wrap">
            <nav className="header__nav">
              <ul className="list header__list">
                <li className="list header__item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive
                      ? "header__link  link header__link--active"
                      : "header__link  link "
                  }
                  >
                    About us
                  </NavLink>
                </li>
                <li className="list header__item">
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      isActive
                        ? "header__link  link header__link--active"
                        : "header__link  link "
                    }
                  >
                    Main Page
                  </NavLink>
                </li>
                <li className="list header__item">
                  <NavLink
                    to="/chat"
                    className={({ isActive }) =>
                    isActive
                      ? "header__link  link header__link--active"
                      : "header__link  link "
                  }
                  >
                    Chat
                  </NavLink>
                </li>
                {!isLoggedIn && (
                  <li className="list header__item js-login none">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? "header__link  link header__link--active"
                          : "header__link  link "
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                )}
                {role === "admin" && (
                  <li className="list header__item js-admin none">
                    <NavLink
                      to="/adminpage"
                      className={({ isActive }) =>
                        isActive
                          ? "header__link  link header__link--active"
                          : "header__link  link "
                      }
                    >
                      Admin
                    </NavLink>
                  </li>
                )}
                {role && (
                  <li className="list header__item js-user none">
                    <NavLink
                      to="/userinfo"
                      className={({ isActive }) =>
                        isActive
                          ? "header__link  link header__link--active"
                          : "header__link  link "
                      }
                    >
                      User Info
                    </NavLink>
                  </li>
                )}
                {role === "user" && (
                  <li className="list header__item js-user none">
                    <NavLink
                    
                      to="/myOrders"
                      className={({ isActive }) =>
                        isActive
                          ? "header__link  link header__link--active"
                          : "header__link  link "
                      }
                    >
                      My orders
                    </NavLink>
                  </li>
                )}
                {role === "admin" && (
                  <li className="list header__item js-add none">
                    <NavLink
                   
                      to="/add"
                      className={({ isActive }) =>
                        isActive
                          ? "header__link  link header__link--active"
                          : "header__link  link "
                      }
                    >
                      Add Item
                    </NavLink>
                  </li>
                )}
                {role === "admin" && (
                  <li className="list header__item js-add none">
                    <NavLink
                      to="adminOrders"
                      className={({ isActive }) =>
                        isActive
                          ? "header__link  link header__link--active"
                          : "header__link  link "
                      }
                    >
                      Orders
                    </NavLink>
                  </li>
                )}
              </ul>
            </nav>

            <div className="list__wrap">
              <ul className="list contacts">
                <li className="contacts__item">
                  <a
                    href="tel:+380961111111"
                    lang="en"
                    className="contacts__link link contacts__link--tel"
                  >
                    <svg className="contacts__svg contacts__svg--tel">
                      <use href={`${sprite}#tel`}></use>
                    </svg>

                    <span>+38 096 111 11 11</span>
                  </a>
                </li>
              </ul>
            </div>
            {role && (
             
              <Link to="/basket " >
                <svg width="30px" height="21px" className="header__basket" >
                  <use href={`${sprite}#basket`} ></use>
                </svg>
              </Link>
            )}
            {isLoggedIn && (
              <svg
                data-testid="logout-button"
                width="30px"
                height="21px"
                className="header__basket logout none"
                onClick={handleSubmit}
              >
                <use href={`${sprite}#icon-logout`}></use>
              </svg>
            )}
          </div>

          <button
            type="button"
            className="menu-button menu-button--open"
            onClick={openClose}
            aria-label="Перемикач мобільного меню"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg width="30px" height="21px" className="icon-menu">
              <use className="icon-menu" href={`${sprite}#menu`}></use>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
