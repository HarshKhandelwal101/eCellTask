import React from "react";
import "./footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
    <footer>
    <div id="body-footer">
        <h1>Get in touch with us today!</h1>
        <p>Send us a message and we ill get back to you as soon as possible</p>
        <button type="button" class="btn  btn-lg btn-primary">Contact us</button>      
        </div>
    </footer>
    <footer>
    
      <p style={{textAlign:"center"}}>Copyright ⓒ {year}</p>
    </footer>
    
    </div>
  );
}

export default Footer;
