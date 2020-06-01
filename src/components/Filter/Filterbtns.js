import React, { Component } from "react";

export default class Filterbtns extends Component {
  handleClick(currentValue) {
    // refered to filterbtns
    this.props.onChange(currentValue);
  }

  render() {
    return (
      <div id='filter--btn'>
        {/* We need to wrap the handleClick call in a function in order for it to be called correctly when elements are clicked */}
        <button onClick={() => this.handleClick("")} className='filter--btns'>Show All</button>
        <button onClick={() => this.handleClick("Tops")} className='filter--btns'>
          Tops
        </button>
        {/* refers to the button event */}
        <button onClick={() => this.handleClick("Bottoms")} className='filter--btns'>
          Bottoms
        </button>
        <button onClick={() => this.handleClick("Outerwear")} className='filter--btns'>OuterWear</button>
        <button onClick={() => this.handleClick("Footwear")} className='filter--btns'>Footwear</button>
        <button onClick={() => this.handleClick("Tailoring")} className='filter--btns'>Tailoring</button>
        <button onClick={() => this.handleClick("Accessories")} className='filter--btns'>
          Accessories
        </button>
      </div>
    );
  }
}
