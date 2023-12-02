import { useRef } from 'react';
import './index.css';
import ReactIcon from '../../../public/react.svg';
import TypescriptIcon from '../../../public/typescript.svg';
import NodeIcon from '../../../public/nodejs.svg';
import SolidityIcon from '../../../public/solidity.svg';
import DockerIcon from '../../../public/docker.svg';
import GCPIcon from '../../../public/gcp.svg';
import {useTranslation} from "react-i18next";

export const Tools = () => {
    const { t } = useTranslation();
    const cardsContainerRef = useRef(null);
    const titleRef = useRef(null);
    const toolsArray = [
        {name: 'React', img: ReactIcon},
        {name: 'Typescript', img: TypescriptIcon},
        {name: 'Nodejs', img: NodeIcon},
        {name: 'Solidity', img: SolidityIcon},
        {name: 'Docker', img: DockerIcon},
        {name: 'Google cloud platform', img: GCPIcon},
    ]

    return (
        <div className="tools-container" id={'tools'}>
            <h2 ref={titleRef} className="name-text text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold outline-text mb-6 mt-28">
                {t('myTools')}
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
