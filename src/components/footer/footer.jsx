import React, { Component } from "react";
import "./footer.scss";
import Logo2 from "../../assets/images/logo 2.svg";
import Vk from "../../assets/images/vk.svg";
import Fc from "../../assets/images/fb.svg";
import Linkedin from "../../assets/images/linkedin.svg";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="pictures">
            <img src={Logo2} alt="Logo" />
            <div className="socialNetworks">
              <a href="#vk/AbdulqodirMuhammad">
                <img src={Vk} alt="v kontakte" />
              </a>
              <a href="#fb:abdulqodirMuhammad">
                <img src={Fc} alt="Facebook" />
              </a>
              <a href="#linkdein/AbdulqodirMuhammad">
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </div>
          </div>
          <div className="links">
            <div className="navbar-footer">
              <ul className="products">
                <h3>Продукция</h3>
                <li>
                  <a href="#Home">Ламинатные тубы</a>
                </li>
                <li>
                  <a href="#Home">Экструзионные тубы</a>
                </li>
                <li>
                  <a href="#Home">Другая упаковка</a>
                </li>
              </ul>
              <ul className="products">
                <h3>Компания</h3>
                <li>
                  <a href="#Home">О нас</a>
                </li>
                <li>
                  <a href="#Home">Наша команда</a>
                </li>
                <li>
                  <a href="#Home">Сертификаты</a>
                </li>
              </ul>
              <ul className="products">
                <h3>Разделы</h3>
                <li>
                  <a href="#Home">Контакты</a>
                </li>
                <li>
                  <a href="#Home">Новости</a>
                </li>
                <li>
                  <a href="#Home">Вакансии</a>
                </li>
              </ul>
            </div>
            <div className="phoneNumbers">
              <div className="first-country">
                <div className="country bbb">
                  <h4>Беларусь</h4>
                  <p>+375 (17) 270 53 77</p>
                  <p>+375 (17) 270 53 78</p>
                </div>
                <div className="country bbb">
                  <h4>Европа</h4>
                  <p>+48 73 1111 044</p>
                </div>
              </div>
              <div className="second-country">
                <div className="country">
                  <h4>Москва</h4>
                  <p>+7 (495) 280 73 44</p>
                  <p>+7 (495) 280 73 44</p>
                </div>
                <div className="country">
                  <h4>Екатеринбург</h4>
                  <p>+7 (343) 346 82 06</p>
                </div>
              </div>
            </div>
          </div>
          <p className="rights">
            © 2022 Leangroup. All Rights Reserved. Разработка и продвижение
            сайтов SkyWeb.by
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
