import { useState } from 'react';

export default function Home2() {
    const [activeTitle, setActiveTitle] = useState(null);
    const handleTitleClick = (titleId) => {
        // set the activeTitle on click
        setActiveTitle(activeTitle === titleId ? null : titleId);
    };
    return (
        <>
            <div className="container">
                <h2
                    className="my-title"
                    onClick={() => handleTitleClick(1)}
                >
                    Title 1
                </h2>
                <p className={`my-detail ${activeTitle === 1 ? 'active' : ''}`}>
                    Detail 1 <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos voluptas eos quos quis voluptatibus pariatur vero, perspiciatis temporibus at nisi?
                </p>
            </div>

            <div className="container">
                <h2
                    className="my-title"
                    onClick={() => handleTitleClick(2)}
                >
                    Title 2
                </h2>
                <p className={`my-detail ${activeTitle === 2 ? 'active' : ''}`}>
                    Detail 2 <br />
                    Another set of details about something else, providing a little more info.
                </p>
            </div>
        </>
    );
}