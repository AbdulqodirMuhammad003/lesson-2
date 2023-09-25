import React, { Component } from "react";
import Slider from "react-slick";
import "./quality.scss";
import Ser1 from "../../assets/images/sertifikat1.png";
import Ser2 from "../../assets/images/ser2.png";
import Ser3 from "../../assets/images/ser3.png";
import Ser4 from "../../assets/images/ser4.png";
import Ser5 from "../../assets/images/ser5.png";

export class Quality extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <section className="quality">
        <div className="container">
          <h2 className="text-center title-quality">Качество продукции подтверждают сертификаты</h2>
          <Slider {...settings}>
            {/* <div className="sertifikate-group"> */}
            <img src={Ser1} alt="" className="images-sertificates"/>
            <img src={Ser2} alt="" className="images-sertificates"/>
            <img src={Ser3} alt="" className="images-sertificates"/>
            <img src={Ser4} alt="" className="images-sertificates"/>
            <img src={Ser5} alt="" />
            {/* </div> */}
          </Slider>
        </div>
      </section>
    );
  }
}

export default Quality;
