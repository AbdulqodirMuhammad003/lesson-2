import React, { Component } from 'react'
import "./news.scss";
import News1 from "../../assets/images/news1.png";
import News2 from "../../assets/images/news2.png";
import News3 from "../../assets/images/news3.png";

export class News extends Component {
  render() {
    return (
        <section className='news-section'>
            <div className="container">
                <h1 className='text-center mb-5'>Новости</h1>
                <div className="news">
                    <div className="news1">
                        <img src={News1} alt="" />
                        <p>28.01.2022</p>
                        <h4>"ЛеанГрупп" серебряный призер EcoVadis!</h4>
                    </div>
                    <div className="news2">
                        <img src={News2} alt="" />
                        <p>28.01.2022</p>
                        <h4>"ЛеанГрупп" серебряный призер EcoVadis!</h4>
                    </div>
                    <div className="news3">
                        <img src={News3} alt="" />
                        <p>28.01.2022</p>
                        <h4>"ЛеанГрупп" серебряный призер EcoVadis!</h4>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

export default News