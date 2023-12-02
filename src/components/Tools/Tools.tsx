import { useRef } from 'react';
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

export const Tools = () => {
    const { t } = useTranslation();
    const toolsArray = [
        {name: 'React', img: ReactIcon, desc: t('toolReact')},
        {name: 'Typescript', img: TypescriptIcon, desc: t('toolTypescript')},
        {name: 'Nodejs', img: NodeIcon, desc: t('toolNode')},
        {name: 'Solidity', img: SolidityIcon, desc: t('toolSolidity')},
        {name: 'Docker', img: DockerIcon, desc: t('toolDocker')},
        {name: 'Google cloud platform', img: GithubIcon, desc: t('toolGithub')},
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

    return (
        <div className="tools-container mb-20" id={'tools'}>
            <h2 className="name-text text-5xl lg:text-6xl xl:text-7xl font-bold outline-text mb-6 mt-28">
                {t('myTools')}
            </h2>
            <div className="cards-container pt-20 grid grid-cols-1 mb-20">
                {toolsArray.map((tool, index) => (
                    <div key={index} className="tool-card">
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
                            <img src={tool.img} className={'other-tool'}/>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </div>
    );
};
