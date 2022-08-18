import React from "react"
var {SocialIcon} = require('react-social-icons')
export default function Footer(){
    return(
        <section className="bg-gray-900 text-white flex flex-col">
            <div className = "mx-auto w-96 text-center">
                <section>
                    <h1 className = "my-5 text-2xl font-medium">Socials</h1>
                    <hr className = "my-2"></hr>
                    <div className = "my-5 flex flex-row items-center justify-center space-x-5">
                    
                        <SocialIcon url="https://github.com/BrandonMager" fgColor="white"/>
                        <SocialIcon url="https://www.linkedin.com/in/brandon-soto-garcia-9460721bb/" />
                    </div>
                    <hr className = "my-2"></hr>

                <p className = "my-5 text-xl text-green-500">Made by: <a className = "font-medium text-blue-500 hover:text-white" href = "https://brandonmager.netlify.app">Brandon Soto Garcia</a></p>
                </section>
            </div>
        </section>
    )
}