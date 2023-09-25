import React, { Component } from "react";

import "./header.scss"
import Logo from "../../assets/images/logo.svg"
import { hover } from "@testing-library/user-event/dist/hover";

export class Header extends Component {
  render() {
    const onDark = () => {
      document.body.classList.toggle('dark')
      document.querySelector('.changeTheme').innerHTML = "Light"
    }
    return <header>
      <div className="container">
      <img src={Logo} alt="Logo-site" className="logo-site" />
      <nav className="navbar">
        <ul className="navbar-list">
          <li><a href="#Home" className="">Продукция</a></li>
          <li><a href="#Home" className="">Сертификаты</a></li>
          <li><a href="#Home" className="">Наша команда</a></li>
          <li><a href="#Home" className="">О нас</a></li>
          <li><a href="#Home" className="">Новости</a></li>
          <li><a href="#Home" className="">Вакансии</a></li>
          <li><a href="#Home" className="home">Контакты</a></li>
        </ul>
        <button className="changeTheme" onClick={onDark}>Dark</button>
      </nav>
      </div>
    </header>;
  }
}

export default Header;
