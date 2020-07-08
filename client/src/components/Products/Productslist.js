import React, { Component } from "react";
import Productsdetail from "./Productsdetail";

export default class Productslist extends Component {
  render() {
    return (
      <div>
        {this.props.products.map((prod, index) => {
          return <Productsdetail post={prod} key={`post-list-key ${index}`} />;
        })}
      </div>
    );
  }
}
