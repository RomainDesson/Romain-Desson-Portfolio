import './index.css'

type ProjectItemType = {
    text: string
    imgSrc: string
    isReverse?: boolean
}

export const ProjectItem = ({ text, isReverse }: ProjectItemType) => {
    return (
        <div className="flex flex-col md:flex-row sm: flex-col items-center justify-between space-y-4 md:space-y-0 md:space-x-4 w-full max-w-7xl my-4 md:pt-20">
            {isReverse ? (
                <>
                    <p className="text-center w-full md:w-1/2 text-4xl">{text}</p>
                    <div className="bg-teal-500 w-full md:w-1/2 h-20vh"></div>
                </>
            ) : (
                <>
                    <div className="bg-teal-500 w-full md:w-1/2 h-20vh"></div>
                    <p className="text-center w-full md:w-1/2 text-4xl">{text}</p>
                </>
            )}
    </div>
    );
};
