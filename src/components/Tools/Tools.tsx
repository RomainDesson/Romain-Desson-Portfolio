import React from 'react'
import './index.css';
import ReactIcon from '../../../public/react.svg';
import TypescriptIcon from '../../../public/typescript.svg';
import NodeIcon from '../../../public/nodejs.svg';
import SolidityIcon from '../../../public/solidity.svg';
import DockerIcon from '../../../public/docker.svg';
import GithubIcon from '../../../public/github.svg';
import GcpIcon from '../../../public/gcp.svg';
import GitlabIcon from '../../../public/gitlab.svg'
import ExpressIcon from '../../../public/express.svg'
import NextJsIcon from '../../../public/nextjs.svg'
import ReduxIcon from '../../../public/redux.svg'
import TailwindIcon from '../../../public/tailwind.svg'
import SocketIOIcon from '../../../public/socketio.svg'
import VercelIcon from '../../../public/vercel.svg'
import ThreeJsIcon from '../../../public/threejs.svg'
import {useTranslation} from "react-i18next";
import {Tooltip} from "../Tooltip/Tooltip.tsx";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const Tools = () => {
    const { t } = useTranslation();
    gsap.registerPlugin(ScrollTrigger);
    const toolRefs = useRef<HTMLElement[]>([]);
    toolRefs.current = [];

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !toolRefs.current.includes(el)) {
            toolRefs.current.push(el);
        }
    };

    const toolsArray = [
        {name: 'React', img: ReactIcon, desc: t('toolReact')},
        {name: 'Typescript', img: TypescriptIcon, desc: t('toolTypescript')},
        {name: 'Nodejs', img: NodeIcon, desc: t('toolNode')},
        {name: 'Solidity', img: SolidityIcon, desc: t('toolSolidity')},
        {name: 'Docker', img: DockerIcon, desc: t('toolDocker')},
        {name: 'Github', img: GithubIcon, desc: t('toolGithub')},
    ]

    const otherToolsArray = [
        {name: 'Google cloud platform', img: GcpIcon},
        {name: 'Gitlab', img: GitlabIcon},
        {name: 'Express', img: ExpressIcon},
        {name: 'NextJS', img: NextJsIcon},
        {name: 'Redux', img: ReduxIcon},
        {name: 'TailwindCSS', img: TailwindIcon},
        {name: 'Socket.io', img: SocketIOIcon},
        {name: 'Vercel', img: VercelIcon},
        {name: 'ThreeJS', img: ThreeJsIcon},
    ]

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        toolRefs.current.forEach((el, index) => {
            gsap.fromTo(el,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        gsap.to(e.currentTarget, { scale: 1.2, ease: "power1.out" });
        const icons = gsap.utils.toArray('.other-tool').filter(icon => icon !== e.currentTarget);
        gsap.to(icons, { scale: 0.8, ease: "power1.out" });
    };

    const handleMouseLeave = () => {
        const icons = gsap.utils.toArray('.other-tool');
        gsap.to(icons, { scale: 1, ease: "power1.out" });
    };

    return (
        <div className="tools-container mb-20" id={'tools'}>
            <h2 className="name-text text-5xl lg:text-6xl xl:text-7xl font-bold outline-text mb-6 mt-28">
                {t('myTools')}
            </h2>
            <div className="cards-container pt-20 grid grid-cols-1 mb-20">
                {toolsArray.map((tool, index) => (
                    <div ref={addToRefs} key={index} className="tool-card">
                        <img src={tool.img} alt={`${tool.name} icon by Icons8 https://icons8.com/icons`} className="tool-icon"></img>
                        <p className={'text-xl'}>{tool.desc}</p>
                    </div>
                ))}
            </div>
            <div>
                <div className="underline"></div>
                <p className={'text-2xl text-center mt-20'}>
                    {t('otherTools')}
                </p>
                <div className={'flex flex-row justify-center mt-20 gap-10 other-tools-container '}>
                    {otherToolsArray.map((tool, index) => (
                        <Tooltip key={index} text={tool.name}>
                            <img
                                src={tool.img}
                                className={'other-tool'}
                                onMouseEnter={(e) => handleMouseEnter(e)}
                                onMouseLeave={handleMouseLeave}
                            />
                        </Tooltip>
                    ))}
                </div>
            </div>
        </div>
    );
};
