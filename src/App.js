import React from "react";
import Info from "./sections/Info.js"
import About from "./sections/About.js"
import Interests from "./sections/Interests.js"
import Footer from "./sections/Footer.js"

export default function App() {
    return(
        <div className="app">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}