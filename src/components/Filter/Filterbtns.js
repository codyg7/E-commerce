import React, { Component } from "react";

export default class Filterbtns extends Component {
  render() {
    return (
      <div>
        <button>Show All</button>
        <button className='tops'>Tops</button>
        <button className='Bottoms'>Bottoms</button>
        <button>OuterWear</button>
        <button>Footwear</button>
        <button>Tailoring</button>
        <button>Accessories</button>
      </div>
    );
  }
}
