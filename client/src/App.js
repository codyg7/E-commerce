import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Nav/Navbar";
import Index from "./components/Index/Index";
import Productspage from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {/* makes sure it filters out the other pages with / */}
          <Route path='/' exact component={Index} />
          <Route path='/products' component={Productspage} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
