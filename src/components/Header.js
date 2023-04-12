import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { logOut } from '../redux/auth/auth-operations';
import {
  selectIsLoggedIn,
  selectUser,
  selectRole,
} from '../../src/redux/auth/auth-selectors';
import sprite from '../images/sprite.svg';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(prev => !prev);
  };

  const handleResize = () => {
    setIsOpen(window.innerWidth > 480 ? false : true);
  };
  window.addEventListener('resize', handleResize);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const role = useSelector(selectRole);
  console.log(role)
  const handleSubmit = () => {
    dispatch(logOut());
  };

  return (
    <>

      {isOpen && (
        <div class="menu-container js-menu-container is-open" id="mobile-menu">
          <button
            type="button"
            class="menu-button menu-button--close js-close-menu"
            onClick={open}
            aria-label="Переключатель мобильного меню"
            aria-expanded="false"
          >
            <svg width="40px" height="40px">
              <use class="icon-cross" href={`${sprite}#cross`}></use>
            </svg>
          </button>

          <div class="mobile-menu ">
            <nav class="header__nav">
              <ul class="list header__list">
                <li class="list header__item">
                  <a href="/" class="header__link header__link--active link">
                    About us
                  </a>
                </li>
                <li class="list header__item">
                  <a href="/portfolio.html" class="header__link link">
                    Main Page
                  </a>
                </li>
                {!isLoggedIn && (
                  <li class="list header__item js-login none">
                    <a href="/login.html" class="header__link link">
                      Login
                    </a>
                  </li>
                )}
                {role === 'admin' && (
                  <li class="list header__item js-admin none">
                    <a href="/adminpage.html" class="header__link  link">
                      Admin
                    </a>
                  </li>
                )}
                {role && (
                  <li class="list header__item js-user none">
                    <a href="/userinfo" class="header__link  link">
                      User Info
                    </a>
                  </li>
                )}
                {role==="user" && (
                  <li class="list header__item js-user none">
                    <a href="/myOrders" class="header__link  link">
                      My orders
                    </a>
                  </li>
                )}

                {role === 'admin' && (
                  <li class="list header__item js-add none">
                    <a href="/add" class="header__link  link">
                      Add Item
                    </a>
                  </li>
                )}
                {role === 'admin' && (
                  <li class="list header__item js-add none">
                    <a href="/adminOrders" class="header__link  link">
                     Orders
                    </a>
                  </li>
                )}
              </ul>
            </nav>
            {role && (
              <Link to="/basket ">
                <svg width="50px" height="70px" class="header__basket">
                  <use href={`${sprite}#basket`}></use>
                </svg>
              </Link>
            )}
            {isLoggedIn && (
              <svg
              width="50px" height="70px"
                class="header__basket logout none"
                onClick={handleSubmit}
              >
                <use href={`${sprite}#icon-logout`}></use>
              </svg>
            )}
          </div>
        </div>
      )}
      <header class="header">
        <div class="container header__container">
          <a href="/" lang="en" class="logo">
            Esste<span class="studio">Store</span>
          </a>
          <div class="header__wrap" id="header__wrap">
            <nav class="header__nav">
              <ul class="list header__list">
                <li class="list header__item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? 'header__link  link ' : 'header__link  link '
                    }
                  >
                    About us
                  </NavLink>
                </li>
                <li class="list header__item">
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      isActive
                        ? 'header__link  link header__link--active'
                        : 'header__link  link '
                    }
                  >
                    Main Page
                  </NavLink>
                </li>
                {!isLoggedIn && (
                  <li class="list header__item js-login none">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? 'header__link  link header__link--active'
                          : 'header__link  link '
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                )}
                {role === 'admin' && (
                  <li class="list header__item js-admin none">
                    <NavLink
                      to="adminpage"
                      className={({ isActive }) =>
                        isActive
                          ? 'header__link  link header__link--active'
                          : 'header__link  link '
                      }
                    >
                      Admin
                    </NavLink>
                  </li>
                )}
                {role && (
                  <li class="list header__item js-user none">
                    <NavLink
                      to="userinfo"
                      className={({ isActive }) =>
                        isActive
                          ? 'header__link  link header__link--active'
                          : 'header__link  link '
                      }
                    >
                      User Info
                    </NavLink>
                  </li>
                )}
                 {role==="user" && (
                  <li class="list header__item js-user none">
                    <NavLink
                      to="/myOrders"
                      className={({ isActive }) =>
                        isActive
                          ? 'header__link  link header__link--active'
                          : 'header__link  link '
                      }
                    >
                      My orders
                    </NavLink>
                  </li>
                )}
                {role === 'admin' && (
                  <li class="list header__item js-add none">
                    <NavLink
                      to="/add"
                      className={({ isActive }) =>
                        isActive
                          ? 'header__link  link header__link--active'
                          : 'header__link  link '
                      }
                    >
                      Add Item
                    </NavLink>
                  </li>
                )}
                {role === 'admin' && (
                  <li class="list header__item js-add none">
                    <NavLink
                      to="adminOrders"
                      className={({ isActive }) =>
                        isActive
                          ? 'header__link  link header__link--active'
                          : 'header__link  link '
                      }
                    >
                      Orders
                    </NavLink>
                  </li>
                )}
              </ul>
            </nav>

            <div class="list__wrap">
              <ul class="list contacts">
                <li class="contacts__item">
                  <a
                    href="tel:+380961111111"
                    lang="en"
                    class="contacts__link link contacts__link--tel"
                  >
                    <svg class="contacts__svg contacts__svg--tel">
                      <use href={`${sprite}#tel`}></use>
                    </svg>

                    <span>+38 096 111 11 11</span>
                  </a>
                </li>
              </ul>
            </div>
            {role && (
              <Link to="/basket ">
                <svg width="30px" height="21px" class="header__basket">
                  <use href={`${sprite}#basket`}></use>
                </svg>
              </Link>
            )}
            {isLoggedIn && (
              <svg
                width="30px"
                height="21px"
                class="header__basket logout none"
                onClick={handleSubmit}
              >
                <use href={`${sprite}#icon-logout`}></use>
              </svg>
            )}
          </div>

          <button
            type="button"
            class="menu-button menu-button--open"
            onClick={open}
            aria-label="Переключатель мобильного меню"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg width="30px" height="21px" class="icon-menu">
              <use class="icon-menu" href={`${sprite}#menu`}></use>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
