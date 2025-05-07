import React from "react";
import { Link } from 'react-router-dom';
import ThemeSwitch from "./ThemeSwitch";
import workPic from "/images/work-image.jpg"

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
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8 tracking-wider">
                        BLOOD AND BOND
                    </h2>
                    <div className="flex justify-center items-center">
                        <div className="relative w-full max-w-[960px] aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/e5Zq1n_Ea5s?si=JhzmDe2Hv_fxiqba"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                    <br />
                    <p>In this powerful and thought-provoking short film, we follow Welsh deer stalker Paul Pritchard as he opens up about the complexities of modern deer management and the heavy responsibility that comes with it.</p>
                    <br />
                    <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8 tracking-wider mt-20">
                        MOG - Master of Gloves 
                    </h2>
                    <div className="flex justify-center items-center">
                        <div className="relative w-full max-w-[960px] aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/JrkpNJxnLX4?si=DrTvTGTlOPjtDDhP"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                        <br />
                        <p>Master of Gloves tactical branded content</p>
                        <br />
                </div>
            </section>
        </>
    )
}

export default Work;
// This component is a placeholder for the "Work" section of the website.