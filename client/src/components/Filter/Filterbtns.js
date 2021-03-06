import React, { Component } from "react";

export default class Filterbtns extends Component {
  handleClick(currentValue) {
    // refered to filterbtns
    this.props.onChange(currentValue);
  }

  render() {
    return (
      <div id='filter--btn'>
        <div className='filter--spacing'>
          {/* wrapping the handleClick call in a function in order for it to be called correctly when elements are clicked */}
          <button onClick={() => this.handleClick("")} className='filter--btns'>
            Show All
          </button>
          <button
            onClick={() => this.handleClick("Tops")}
            className='filter--btns'
          >
            Tops
          </button>
          {/* refers to the button event */}
          <button
            onClick={() => this.handleClick("Bottoms")}
            className='filter--btns'
          >
            Bottoms
          </button>
          <button
            onClick={() => this.handleClick("Outerwear")}
            className='filter--btns'
          >
            OuterWear
          </button>
          <button
            onClick={() => this.handleClick("Footwear")}
            className='filter--btns'
          >
            Footwear
          </button>
          <button
            onClick={() => this.handleClick("Tailoring")}
            className='filter--btns'
          >
            Tailoring
          </button>
          <button
            onClick={() => this.handleClick("Accessories")}
            className='filter--btns'
          >
            Accessories
          </button>
          <button
            onClick={() => this.handleClick("0-100")}
            className='filter--btns'
          >
            0-100
          </button>
          <button
            onClick={() => this.handleClick("101-200")}
            className='filter--btns'
          >
            101-200
          </button>
          <button
            onClick={() => this.handleClick("201-300")}
            className='filter--btns'
          >
            201-300
          </button>
          <button
            onClick={() => this.handleClick("400+")}
            className='filter--btns'
          >
            400+
          </button>
        </div>
      </div>
    );
  }
}
