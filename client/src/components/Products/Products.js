import React, { Component } from "react";
import Productslist from "./Productslist";
import Products from "../../products/products.json";
import Filterbtns from "../Filter/Filterbtns";

// let currentValue = "";

export default class Productspage extends Component {
  constructor() {
    super();
    this.state = {
      filterValue: "",
    };
  }

  render() {
    //  everytime it renders it looks what to display
    const products = Products.products.filter((product) => {
      if (this.state.filterValue === "") {
        return true;
      }
      if (this.state.filterValue === product.tag) {
        return true;
      }
      if (this.state.filterValue === product.priceRange) {
        return true;
      }
      return false;
    });

    return (
      // App is the controller the controller is what controlls the data that we see
      <div>
        {/* is hooked up to the controller has on Change */}
        <Filterbtns
          currentValue={this.state.filterValue}
          // signals to controller that something changes
          onChange={(v) => {
            // when you click on filter i update my state with the filter value
            this.setState({ filterValue: v });
          }}
        />
        <Productslist products={products} />
      </div>
    );
  }
}
