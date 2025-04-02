import React, { useState, useEffect } from "react";
import Fajr from "./Fajr";
import Zuhr from "./Zuhr";
import Asr from "./Asr";
import Maghrib from "./Maghrib";
import Isha from "./Isha";

const prayers = [
    { name: "Fajr", detailsComponent: Fajr },
    { name: "Zuhr", detailsComponent: Zuhr },
    { name: "Asr", detailsComponent: Asr },
    { name: "Maghrib", detailsComponent: Maghrib },
    { name: "Isha", detailsComponent: Isha },
];

export default function Home() {
    const [expanded, setExpanded] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Change when scrolled 50px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* <nav>
                <a className={`navbar-brand ${isScrolled ? "scrolled" : ""
                    }`} href="#" onClick={(e) => e.preventDefault()}>
                    <span className="brand-1">SHIA</span>
                    <span className="brand-2">NAMAZ</span>
                </a>
            </nav> */}

            <div className="container content">
                <h1 className="my-4">SHIA NAMAZ APP</h1>

                <div className="row justify-content-center">

                    {prayers.map((prayer, index) => (
                        <div className="col-12 mb-3 text-center" key={index}>

                            <h2 className="card prayer-card" onClick={() => setExpanded(expanded === index ? null : index)}>{prayer.name}</h2>

                            <div
                                className={`details-cover ${expanded === index ? 'active' : ''}`}
                            >
                                <prayer.detailsComponent />
                            </div>

                        </div>
                    ))}




                </div>
            </div>
        </>
    );
}
