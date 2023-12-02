import { useRef } from 'react';
import './index.css';

export const Tools = () => {
    const cardsContainerRef = useRef(null);
    const titleRef = useRef(null);
    const toolsArray = [
        {name: 'React', img: '../../../public/react.svg'},
        {name: 'Typescript', img: '../../../public/typescript.svg'},
        {name: 'Nodejs', img: '../../../public/nodejs.svg'},
        {name: 'Solidity', img: '../../../public/solidity.svg'},
        {name: 'Docker', img: '../../../public/docker.svg'},
        {name: 'Google cloud platform', img: '../../../public/gcp.svg'},
    ]

    return (
        <div className="tools-container">
            <h2 ref={titleRef} className="name-text text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold outline-text mb-6 mt-20">
                My<br/>Tools
            </h2>
            <div ref={cardsContainerRef} className="cards-container pt-20">
                {toolsArray.map((tool, index) => (
                    <div key={index} className="tool-card">
                        <img src={tool.img} alt={`${tool.name} icon by Icons8 https://icons8.com/icons`} className="tool-icon"></img>
                        <p className="tool-name">{tool.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
