import React from "react";
import Card from "./serviceCard";
import services from "../services";
import "./serviceCardMaker.css";
import"./toggler.css";

function ServiceCards(props)
{
    function toggleTheme(){

        let theme =document.getElementById("theme");
        theme.classList.toggle("dark-mode");
        let dark=document.getElementById("dark");
        dark.classList.toggle("heading-light");
    }
    return(

<div id="theme">

<div class="row" style={{ justifyContent:"right"}}>
    <div class="col" style={{alignItems:"center"}}>
     <label class="switch">
       <input type="checkbox"/>
        <span class="slider round" onClick={toggleTheme} >
        </span>
     </label>
    </div>
    </div>



<div class="cards" style={{ position: "relative", marginTop: "-50px" }}>
<div class="container">

<div id="dark"style={{textAlign: "center",margin : "70px", fontSize:"30px"}}>Our Services</div>

<div class="row">
{services.map( services=> <Card id={services.id} title={services.title} content ={services.content} font={services.font}/>)}

</div>
</div>
</div>

</div>
        
    );
}

export default ServiceCards;