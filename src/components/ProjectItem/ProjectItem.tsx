import './index.css'

type ProjectItemType = {
    text: string
    imgSrc: string
    isReverse?: boolean
}

export const ProjectItem = ({ text, imgSrc, isReverse }: ProjectItemType) => {
    console.log(imgSrc)
    return (
        <div className={`flex flex-col md:flex-row sm:flex-col items-center justify-between space-y-4 md:space-y-0 md:space-x-4 w-full max-w-7xl my-4 md:pt-20 project-item ${isReverse ? '' : 'md:flex-row-reverse'}`}>
            <p className="text-center w-full md:w-1/2 text-4xl project-text">{text}</p>
            <div className='overflow-hidden w-full md:w-1/2'>
                <div className="bg-teal-500 w-full md:w-full h-20vh project-image"></div>
            </div>
        </div>
    );
};

