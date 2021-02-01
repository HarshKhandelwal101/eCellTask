import React from "react";
import Head from "./Header";
import ServiceCards from "./serviceCardMaker";
import Final from "./serviceCardMaker";
import Footer from "./Footer";
import Navbar from "./Navbar";
;

function App() {
  return (
    <div>

    <Navbar/>
    <Head/>
    
    <ServiceCards/>
    
    <Footer/>
       
    
    </div>
  );
}

export default App;
