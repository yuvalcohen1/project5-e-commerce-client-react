import React, { FC } from "react";
import "./AboutBox.css";

interface Props {}

const AboutBox: FC<Props> = (props) => {
  return (
    <div id="about-box">
      <img
        src="https://images.unsplash.com/photo-1628102491629-778571d893a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt="some-ugly-shit"
      />
      <div id="about-para">
        <p>Welcome to Shopo!</p>
        <p>
          Our online store offers a variety of products, without leaving home!
        </p>
        <p>
          Just add the products you want to your cart, fill in the order details
          and the delivery will reach you at the time you choose...
        </p>
      </div>
    </div>
  );
};

export default AboutBox;
