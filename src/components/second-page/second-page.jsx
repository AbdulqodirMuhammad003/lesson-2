import React, { Component } from "react";

import "./second-page.scss"

export class SecondPage extends Component {
  render() {
    return (
      <section className="secondPage">
        <div className="container">
            <h1 className="title">О компании LEANGROUP</h1>
          <div className="content">
            <aside className="left">
              <iframe
                width="562"
                height="300"
                src="https://www.youtube.com/embed/6nmWGfwxOgY?si=6rLz0uKnxzkfxA_w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </aside>
            <aside className="right">
              <p>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб. Имея две технологии – для
                производства ламинатных и экструзионных туб, мы предлагаем вам
                широкий спектр возможностей. Большим преимуществом является
                собственный печатный цех в ламинате и in-line печать в экструзии
                с возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции. С января 2018
                года компания стала членом Европейской Ассоциации производителей
                туб (ETMA), что подтверждает сильную позицию бренда и на рынке
                Европы.{" "}
              </p>
            </aside>
          </div>
        </div>
      </section>
    );
  }
}

export default SecondPage;
