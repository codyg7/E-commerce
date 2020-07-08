import React, { Component } from "react";
import { Slider } from "../Slider/Slider";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Slider />
        <section className="byStyle">
          <h2 className="byStlye--header">Shop by Style!</h2>
          <div className="byStyle--row">
            <div className="byStyle--item">
              <img className="byStyle--img" src="img/streetwear.png" alt="streetwear" />
              <p className="byStyle--p">Streetwear</p>
            </div>
            <div className="byStyle--item">
              <img className="byStyle--img" src="img/Luxury.jpeg" alt="luxury" />
              <p className="byStyle--p">Luxury</p>
            </div>
            <div className="byStyle--item">
              <img className="byStyle--img" src="img/avantgarde.jpg" alt="avantgarde" />
              <p className="byStyle--p">Avant Garde</p>
            </div>
            <div className="byStyle--item">
              <img className="byStyle--img" src="img/Vintage.jpg" alt="Vintage" />
              <p className="byStyle--p">Vintage</p>
            </div>
            <div className="byStyle--item">
              <img className="byStyle--img" src="img/techgear.jpg" alt="techgear" />
              <p className="byStyle--p">Tech Gear</p>
            </div>
            <div className="byStyle--item">
              <img className="byStyle--img" src="img/Minimalist.jpg" alt="Minimalist" />
              <p className="byStyle--p">Minimalist</p>
            </div>
          </div>
        </section>

        <section className="designers">
          <h2 className="designers--h2">Popular designers</h2>
          <div className="designers--row">
            <img src="./img/supreme.png" alt="" className="designers--img" />
            <img src="./img/palace.png" alt="" className="designers--img" />
            <img src="./img/RafSimmons.jpg" alt="" className="designers--img" />
            <img src="./img/Gucci.png" alt="" className="designers--img" />
            <img src="./img/offwhite.png" alt="" className="designers--img" />
          </div>
        </section>

        <section className="trends">
          <h2 className="trends--h2">Shop Popular Trends</h2>
          <div className="trends--row">
            <div className="trends--cards">
              <img className="trends--img" src="./img/Cardigan.png" alt="cardigan" />
              <div className="trends--name">Cardigan</div>
            </div>
            <div className="trends--cards">
              <img
                className="trends--img"
                src="./img/CargoPants.png"
                alt="cargo pants"
              />
              <div className="trends--name">Cargo Pants</div>
            </div>
            <div className="trends--cards">
              <img
                className="trends--img"
                src="./img/ChoreJacket.png"
                alt="chore jacket"
              />
              <div className="trends--name">Chore Jacket</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
