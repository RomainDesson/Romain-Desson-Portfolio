import { ProjectItem } from '../ProjectItem/ProjectItem.tsx'

export const Projects = () => {
    return (
        <>
            <h1 className="name-text text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold outline-text mb-6 mt-20">
                My<br/>
                Projects
            </h1>
            <div className="flex flex-col justify-center items-center space-y-8 max-w-7xl mx-auto">
                <ProjectItem
                    imgSrc="path/to/your/image1.jpg"
                    text="Project Description 1"
                />
                <ProjectItem
                    imgSrc="path/to/your/image2.jpg"
                    text="Project Description 2"
                />
                <ProjectItem
                    imgSrc="path/to/your/image3.jpg"
                    text="Project Description 3"
                />
                <ProjectItem
                    imgSrc="path/to/your/image4.jpg"
                    text="Project Description 4"
                />
            </div>
        </>
    );
}
