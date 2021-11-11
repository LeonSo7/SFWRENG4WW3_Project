import React from 'react';
import '../styles/components/Footer.css'
import { IoIceCreamOutline } from 'react-icons/io5';
import {Animated} from "react-animated-css";

//Common Footer
const CommonFooter = () => (
    <footer id="footer">
        <div id="brand">
            <Animated animationIn="bounceInLeft" isVisible={true}>
                <IoIceCreamOutline/> Scoops
            </Animated>
        </div>
    </footer>
);

export default CommonFooter;