import React from "react";
import {title} from "../data"
export default function Navbar() {
    return (
        <header className = "bg-blue-400">
            <div className = "container mx-auto p-5 flex flex-wrap items-center justify-center ">
            <a href = "venicehs.org" className = 'md:w-1/6'>
                <img src = {title} alt = "Venice High School"/>
            </a>
            <nav className = "md:mr-auto md:ml-4 md:border-l md:border-white-700 md:py-1 md:pl-4 flex flex-wrap items-center text-white text-xl font-medium text-base justify-center">
                <a href = "https://www.vhsengineers.com/blog/" className="ml-5 mr-5 hover:text-blue-700">
                    Blog
                </a>
                <a href = "https://www.vhsengineers.com/current-projects/" className="mr-5 hover:text-blue-700">
                    Current Projects
                </a>
                <a href = "https://www.vhsengineers.com/other-engineering-courses/" className="mr-5 hover:text-blue-700">
                    Other Engineering Courses
                </a>
                <a href = "https://www.vhsengineers.com/projects/" className="mr-5 hover:text-blue-700">
                    Practice Page
                </a>
                <a href = "#" className="mr-5 hover:text-blue-700">
                    Weather
                </a>
            </nav>
            </div>
        </header>
    )
}