import React from "react";
import { Link } from 'react-router-dom';
import ThemeSwitch from "./ThemeSwitch";

const Work = () => {
    return (
        <>
            <section id="nav" className="py-20 bg-white">
                <nav className="fixed w-full top-0  z-50 backdrop-blur-sm border-b">
                    <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">
                        <div className="font-mono font-bold text-xl">DARK HARBOUR STUDIOS</div>
                            <div className="hidden md:flex items-center space-x-6 text-sm">
                            <Link to="/" className="hover:underline">MAIN PAGE</Link>
                        <ThemeSwitch />
                        </div>
                    </div>
                </nav>
            </section>
            <section>
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-mono font-bold mb-8 tracking-wider">
                        WORK
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Coming soon...
                    </p>
                </div>
            </section>
        </>
    )
}

export default Work;
// This component is a placeholder for the "Work" section of the website.