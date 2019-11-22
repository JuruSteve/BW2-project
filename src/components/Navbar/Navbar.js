import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <Nav>
      <h1>
        <Link to="/">Treasure Hunt</Link>
      </h1>
    </Nav>
  );
}
const Nav = Styled.div`
    display: flex;
    justify-content: space-around
    align-content: center;
    width: 100%;
    margin: 0 auto;
    background-color: #282c34;
    font-size: 18px;
    h1, a {
      margin:0;
      font-size: 24px;
      padding: 10px;
      color: #ffffff;
      text-decoration: none
    };
    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
        margin: 0;
        padding: 10px
        li {
            padding:0px 10px
        }
    }
`;

export default Navbar;
