import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

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

    useEffect(() => {
        const cards = Array.from(cardsContainerRef.current.children);
        const endValue = (index) => `+=${(cardsContainerRef.current.offsetHeight / 2) * (index + 1)}`;
        cards.forEach((card, index) => {
            gsap.fromTo(card as gsap.TweenTarget,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: card,
                        start: "bottom bottom",
                        end: "bottom top",
                        toggleActions: "play none none reverse",
                        markers: false
                    },
                    duration: 0.1
                }
            );
        });

        ScrollTrigger.create({
            trigger: cardsContainerRef.current,
            start: "bottom bottom-=100",
            end: "bottom bottom",
            scrub: true,
            onLeave: () => gsap.to(titleRef.current, { opacity: 0, duration: 0.5 }),
            onEnterBack: () => gsap.to(titleRef.current, { opacity: 1, duration: 0.5 }),
            markers: false
        });
    }, []);

    return (
        <div className="tools-container">
            <h2 ref={titleRef} className="name-text text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold outline-text mb-6 mt-20 sticky top-20">
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
