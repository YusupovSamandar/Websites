/* eslint-disable */

import React from "react";
import logo from './cart.svg'
import "./Header.css";

const Header = () => {
    return (
        <div id="header">
            <div id="logo">
                <a href=""> </a>
            </div>
            <div id="menu">
                <ul>
                    <li className="current_page_item"><a href="index.html" accessKey="1">Homepage</a></li>
                    <li><a href="subjectsPage.html" accessKey="2">Products</a></li>
                    <li><a href="contact.html" accessKey="5">Contact Us</a></li>

                    <li><a href="login/index.html" accessKey="5">Login</a></li>
                    <li><a style={{ padding: '0px 0px 0px 20px' }} href="" style={{ textTransform: 'capitalize' }}><img width="30px" style={{ marginBottom: '5px' }} src={logo} /></a></li>
                </ul>
            </div>
            
        </div>
    );
}


export default Header