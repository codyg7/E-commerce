import React from "react";
import "./App.scss";
import Filterbtns from "./components/Filter/Filterbtns";
import Productslist from "./components/Products";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar />
        <Filterbtns />
        <Productslist />
        {/* <Footer /> */}
      </header>
    </div>
  );
}

export default App;
