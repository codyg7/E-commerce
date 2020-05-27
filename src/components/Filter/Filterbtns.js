import React, { Component } from "react";

export default class Filterbtns extends Component {
  handleClick(currentValue) {
    // refered to filterbtns
    this.props.onChange(currentValue);
  }

  render() {
    return (
      <div>
        {/* We need to wrap the handleClick call in a function in order for it to be called correctly when elements are clicked */}
        <button onClick={() => this.handleClick("")}>Show All</button>
        <button onClick={() => this.handleClick("Tops")} className='Tops'>
          Tops
        </button>
        {/* refers to the button event */}
        <button onClick={() => this.handleClick("Bottoms")} className='Bottoms'>
          Bottoms
        </button>
        <button onClick={() => this.handleClick("Outerwear")}>OuterWear</button>
        <button onClick={() => this.handleClick("Footwear")}>Footwear</button>
        <button onClick={() => this.handleClick("Tailoring")}>Tailoring</button>
        <button onClick={() => this.handleClick("Accessories")}>
          Accessories
        </button>
      </div>
    );
  }
}
