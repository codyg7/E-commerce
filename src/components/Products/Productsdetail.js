import React, { Component } from "react";

export default class Productsdetail extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className='filter--div'>
        <img
          className='filter--div__img'
          src={post.img}
          alt='Supreme Cargo Pants'
        />
        <h1 className='Product--name'>{post.productName}</h1>
        <h3 className='Product--cost'>{post.productCost}</h3>
        <p className='Product--desc'>{post.productDescription}</p>
      </div>
    );
  }
}
