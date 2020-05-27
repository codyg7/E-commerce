import React, { Component } from "react";
import "./App.scss";
import Filterbtns from "./components/Filter/Filterbtns";
import Productslist from "./components/Products";
import Navbar from "./components/Navbar/Navbar";
// import Togglebutton from "./components/Responsivenav/ResNavButton";
import Products from "./products/products.json";
// import Footer from "./components/Footer/Footer";

let currentValue = "";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterValue: "",
    };
  }

  // look at react state life cycle

  render() {
    //  everytime it renders it looks what to display
    const products = Products.products.filter((product) => {
      if (this.state.filterValue === "") {
        return true;
      }
      if (this.state.filterValue === product.tag) {
        return true;
      }
      return false;
    });

    return (
      // App is the controller the controller is what controlls the data that we see
      <div className='App'>
        <header className='App-header'>
          <Navbar />
          {/* <Togglebutton /> */}
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
          {/* <Footer /> */}
        </header>
      </div>
    );
  }
}

export default App;
