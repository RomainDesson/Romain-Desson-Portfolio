import './index.css'
import {AiOutlineArrowRight} from "react-icons/ai";
import GithubIcon from '../../../public/github.svg';

type ProjectItemType = {
    text: string
    name: string
    imgSrc: string
    isReverse?: boolean
}

export const ProjectItem = ({ text, name, isReverse }: ProjectItemType) => {

    return (
        <div className={`flex flex-col md:flex-row sm:flex-col items-center justify-between space-y-4 md:space-y-0 md:space-x-4 w-full max-w-7xl my-4 md:pt-44 project-item ${isReverse ? '' : 'md:flex-row-reverse'}`}>
            <div className='flex flex-col gap-10 items-center justify-center w-full md:w-1/2 project-content'>
                <h3 className="text-center md:w-1/2 text-4xl project-text">{name}</h3>
                <p className="text-center md:w-1/2 text-2xl project-text">{text}</p>
                <div className='project-buttons flex flex-row items-center gap-20 order-2'>
                    <a href="#" className="visit-button text-2xl">Visit</a>
                    <button className="github-button text-black text-2xl">
                        <img src={GithubIcon} alt="GitHub" className="github-icon"/>
                        <AiOutlineArrowRight className="arrow-icon text-3xl" />
                    </button>
                </div>
            </div>
            <div className='overflow-hidden w-full md:w-1/2'>
                <div className="bg-teal-500 w-full md:w-full h-20vh project-image"></div>
            </div>
        </div>
    );
};

