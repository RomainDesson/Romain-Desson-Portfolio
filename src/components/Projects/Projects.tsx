import { ProjectItem } from '../ProjectItem/ProjectItem.tsx'
import {useTranslation} from "react-i18next";

export const Projects = () => {
    const { t } = useTranslation();
    return (
        <div id={'projects'}>
            <h1 className="name-text text-5xl lg:text-6xl xl:text-7xl font-bold outline-text mb-6 pt-28">
                {t('myProjects')}
            </h1>
            <div className="flex flex-col justify-center items-center space-y-32 max-w-7xl mx-auto">
                <ProjectItem
                    imgSrc="path/to/your/image1.jpg"
                    text="Project Description 1"
                />
                <ProjectItem
                    imgSrc="path/to/your/image2.jpg"
                    text="Project Description 2"
                    isReverse
                />
                <ProjectItem
                    imgSrc="path/to/your/image3.jpg"
                    text="Project Description 3"
                />
                <ProjectItem
                    imgSrc="path/to/your/image4.jpg"
                    text="Project Description 4"
                    isReverse
                />
            </div>
        </div>
    );
}
