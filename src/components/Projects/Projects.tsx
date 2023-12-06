import { ProjectItem } from '../ProjectItem/ProjectItem.tsx'
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Projects = () => {
    const { t } = useTranslation();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray<any>('.project-item').forEach((item: any, i: number) => {
            let img = item.querySelector('.project-image');
            let text = item.querySelector('.project-content');

            gsap.from(img, {
                opacity: 0,
                transform: `translateX(${i % 2 === 0 ? '-100%' : '100%'})`,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                    once: true
                }
            });

            gsap.from(text, {
                opacity: 0,
                delay: 0.5,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                    once: true
                }
            });
        });
    }, []);

    return (
        <div id={'projects'}>
            <h1 className="name-text text-5xl lg:text-6xl xl:text-7xl font-bold outline-text mb-6 pt-28">
                {t('myProjects')}
            </h1>
            <div className="flex flex-col justify-center items-center space-y-32 max-w-7xl mx-auto">
                <ProjectItem
                    imgSrc="path/to/your/image1.jpg"
                    name='TheGreatMeme'
                    text="Project Description 1"
                />
                <ProjectItem
                    imgSrc="path/to/your/image2.jpg"
                    name='TheGreatMeme'
                    text="Project Description 2"
                    isReverse
                />
                <ProjectItem
                    imgSrc="path/to/your/image3.jpg"
                    name='TheGreatMeme'
                    text="Project Description 3"
                />
                <ProjectItem
                    imgSrc="path/to/your/image4.jpg"
                    name='TheGreatMeme'
                    text="Project Description 4"
                    isReverse
                />
            </div>
        </div>
    );
}
