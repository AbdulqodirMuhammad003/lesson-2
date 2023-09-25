import React, { Component } from "react";

import "./intro.scss";

export class Intro extends Component {
  render() {
    return (
      <section className="intro-section">
        <div className="container">
          <aside className="left-content">
            <p>LEANGROUP - тубы и этикетки</p>
            <h2>Ламинатные тубы</h2>
            <p>
              Используются для производства зубных паст. Широко применяются в
              сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
              химии и DIY (Do-it-Yourself).
            </p>
            <button>Каталог</button>
          </aside>
        </div>
      </section>
    );
  }
}

export default Intro;
