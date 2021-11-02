import React, { Component } from "react";
import Slider from "react-slick";
import "./All.css";
import makarna from "../images/makarna.png";
import çikolata from '../images/çikolata.png';
import muz from '../images/muz.png';

class NewProduct extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
    };
    return (
      <div id="newProduct">
        <div className="container" style={{ padding: "0" }}>
          <div className="row" style={{ padding: "0", margin: "0" }}>
            <div className="newBack">
              <h1>Yeni Ürünler</h1>
            </div>
            <Slider {...settings}>
              <div className="newProductBack">
                <div className="elements">
                  <img src={makarna} alt="makarna"  style={{ width: "238px" }}/>
                  <h2>Filiz Makarna 500 gr</h2>
                  <div className="fiyatZemin">
                    <h3>4.99 ₺</h3>
                  </div>
                </div>
              </div>
              <div className="newProductBack">
              <div className="elements">
                  <img src={çikolata} alt="çikolata" style={{ width: "238px" }} />
                  <h2>Ülker Çikolatalı Gofret</h2>
                  <div className="fiyatZemin">
                    <h3>1.25 ₺</h3>
                  </div>
                </div>
              </div>
              <div className="newProductBack">
              <div className="elements">
                  <img src={muz} alt="muz" style={{ width: "238px" }}/>
                  <h2>Muz İthal kg</h2>
                  <div className="fiyatZemin">
                    <h3>12.99 ₺</h3>
                  </div>
                </div>
              </div>
              <div className="newProductBack">
              <div className="elements">
                  <img src={makarna} alt="makarna" />
                  <h2>Muz İthal kg</h2>
                  <div className="fiyatZemin">
                    <h3>12.99 ₺</h3>
                  </div>
                </div>
              </div>
              <div className="newProductBack">
              <div className="elements">
                  <img src={makarna} alt="makarna" />
                  <h2>Filiz Makarna 500 gr</h2>
                  <div className="fiyatZemin">
                    <h3>4.99 ₺</h3>
                  </div>
                </div>
              </div>
              <div className="newProductBack">
              <div className="elements">
                  <img src={makarna} alt="makarna" />
                  <h2>Filiz Makarna 500 gr</h2>
                  <div className="fiyatZemin">
                    <h3>4.99 ₺</h3>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProduct;
