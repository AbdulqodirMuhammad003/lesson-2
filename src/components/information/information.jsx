import "./information.scss";

import React, { Component } from "react";

export class Information extends Component {
  render() {
    return (
      <section className="information">
        <div className="container">
          <aside className="left">
            <h2 className="me-5">Получить подробную информацию</h2>
            <p className="me-[36px]">
              Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее
              время
            </p>
            <div className="inputs">
              <div className="inputss mb-3">
              <input type="text" placeholder="Ваше имя" className="me-3" />
              <input type="text" placeholder="+375 (29) 0000000" />
              </div>
              <div className="comment">
                {" "}
                <textarea placeholder="Comment..." className="comment-area mb-4"></textarea>
              <button className="btn-information">Получить информацию</button>
              </div>
            </div>
          </aside>
          <aside className="right"></aside>
        </div>
      </section>
    );
  }
}

export default Information;
