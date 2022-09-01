import React from "react"
var {SocialIcon} = require('react-social-icons')
export default function Footer(){
    return(
        <section className="text-white flex flex-col">
            <div className = "bg-gray-900">
                <div className = "flex flex-row mx-auto my-5 justify-center items-center">
                    <div className = "flex flex-col mr-20">
                    <ul className = "text-white font-medium">
                        <li>13000 Venice Blvd.</li>
                        <li>Los Angeles, CA 90066</li>
                        <li>P: (310) 577-4200</li>
                        <li>F: (310) 306-3249.</li>
                    </ul>
                </div>
                <div className = "flex flex-row mr-20">
                    <h1 className = "text-5xl font-semibold">Venice High School</h1>
                </div>
                <div className = "flex-row">
                    <img src = "https://venicehs.org/pics/Venice-logo.png"/>
                </div>
            </div>
            </div>
            <div className = "bg-gray-800">
                <div className = "flex flex-row mx-auto my-3 text-center justify-center items-center">
                    <p>Made by <span>Brandon Soto Garcia</span></p>
                </div>
            </div>
            
        </section>
    )
}