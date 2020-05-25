import React, { Component } from "react";
import Products from "../products/products.json";
import Productsdetail from "./Productsdetail";

export default class Productslist extends Component {
  render() {
    return (
      <div>
        {Products.map((prod, index) => {
          return <Productsdetail post={prod} key={`post-list-key ${index}`} />;
        })}
      </div>
    );
  }
}
