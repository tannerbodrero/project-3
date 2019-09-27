import React from 'react';
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
// import "./Splash.css";




export default function SplashButtons() {

    const fade = useSpring({
        config : {duration: 2500}, from: {opacity:0}, to: {opacity:1}
      });

    return (
        <animated.div style={fade} className="button-wrap" >

        <Link className="splash-link" to="/home"><button className="splash-button">JUST BROWSING</button></Link>

        <Link className="splash-link" to="/garage"><button className="splash-button">SIGN UP or SIGN IN</button></Link>
      
            
        </animated.div>
    )
}
