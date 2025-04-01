import React, { useState } from "react";
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

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Shia Namaz App</h1>

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
    );
}
