import "./comand.scss";
import first from "../../assets/images/first.png"
import second from "../../assets/images/second.png"
import third from "../../assets/images/three.png"
import four from "../../assets/images/four.png"
import five from "../../assets/images/five.png"


import React, { Component } from 'react'

export class Comand extends Component {
  render() {
    return (
      <section className="comand">
        <div className="container">
            <h2 className="mb-5 text-center">Наша команда</h2>
            <div className="teachers">
                <div className="first-teacher">
                <img src={first} alt=""  className="teacher-img"/>
                <h4>Войнич Дарья</h4>
                <p>Заместитель директора по продажам</p>
                <p>+375 (17) 270-53-77 (317)</p>
                </div>
                <div className="second-teacher">
                <img src={second} alt=""  className="teacher-img"/>
                <h4>Мисько Екатерина</h4>
                <p>Начальник отдела сопровождения</p>
                <p>+375 (17) 270-53-77 (317)</p>
                <p>k.melnichenko@leangroup.by</p>
                </div>
                <div className="second-teacher">
                <img src={third} alt=""  className="teacher-img"/>
                <h4>Мисько Екатерина</h4>
                <p>Начальник отдела сопровождения</p>
                <p>+375 (17) 270-53-77 (317)</p>
                <p>k.melnichenko@leangroup.by</p>
                </div>
                <div className="second-teacher">
                <img src={four} alt=""  className="teacher-img"/>
                <h4>Мисько Екатерина</h4>
                <p>Начальник отдела сопровождения</p>
                <p>+375 (17) 270-53-77 (317)</p>
                <p>k.melnichenko@leangroup.by</p>
                </div>
                <div className="second-teacher">
                <img src={five} alt=""  className="teacher-img"/>
                <h4>Мисько Екатерина</h4>
                <p>Начальник отдела сопровождения</p>
                <p>+375 (17) 270-53-77 (317)</p>
                <p>k.melnichenko@leangroup.by</p>
                </div>
            </div>
           
        </div>
      </section>
    )
  }
}

export default Comand