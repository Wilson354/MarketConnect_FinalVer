import React from 'react'
import logo from '../../assets/images/logoMC-w.png'
import openMenu from '../../assets/images/open-menu.svg'
import closeMenu from '../../assets/images/close-menu.svg'
import { Link, NavLink } from 'react-router-dom'
import SuccessMsg from '../../components/SuccessMsg'
import ResetLocation from '../../helpers/ResetLocation'

const Header = ({ loginModal,
  handleLogout,
  showModal,
  isModalActive,
  hideMenu,
  validLogin, activateLoginModal }) => {
  return (
    <header>
      {loginModal}
      <nav className="main-nav flex-container flex-row txt-center">
        <NavLink
          onClick={() => {
            ResetLocation()
            hideMenu()
          }}
          to="/"
          className="logo-styling flex-container flex-row txt-center txt-white"
        >
          <img
            width="100"
            height="100"
            className="logo"
            src={logo}
            alt="Pizza Time logo"
            style={{ width: '400px', height: '50px' }}
          />
        </NavLink>
        <ul className={`navigation-menu flex-row pop-font ${isModalActive ? 'active' : ''}`}>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#3361FF',
                  }
                  : {}
              }
              className="txt-white"
              to="/"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#3361FF',
                  }
                  : {}
              }
              className="txt-white"
              to="/menu"
            >
              Servicios
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#3361FF',
                  }
                  : {}
              }
              className="txt-white"
              to="/blog"
            >
              MarketPlace
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#3361FF',
                  }
                  : {}
              }
              className="txt-white"
              to="/contact"
            >
              Acerca de
            </NavLink>
          </li>
          {validLogin ? <li>
            <NavLink
              onClick={() => {
                ResetLocation()
                hideMenu()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#3361FF',
                  }
                  : {}
              }
              className="txt-white"
              to="/profile"
            >
              Profile
            </NavLink>
          </li> : null}
          <li>
            <div className="login-and-cart">
              {validLogin ? (
                <Link
                  to="/"
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation()
                    handleLogout()
                  }}
                >
                  Log out
                </Link>
              ) : (
                <div
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation()
                    activateLoginModal()
                  }}
                >
                  Inicio de sesion 
                </div>
              )}
            </div>
          </li>
        </ul>
        <img
          width="50"
          height="50"
          className="burger-bars"
          src={isModalActive ? closeMenu : openMenu}
          alt={isModalActive ? "Close menu" : "Open menu"}
          onClick={showModal}
        />
      </nav>
      <SuccessMsg />
    </header>
  )
}
// }


export default Header;