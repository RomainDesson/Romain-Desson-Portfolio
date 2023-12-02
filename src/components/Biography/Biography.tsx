import './index.css';
import ProfilePicture from '../../../public/profile.jpeg'

export const Biography = () => {
    return (
        <div className="relative flex flex-col items-center pt-16 md:pt-24 lg:pt-32 h-screen" id={'biography'}>
            <div className="w-40 h-40 rounded-full bg-gray-100 border-2 border-gray-400 flex justify-center items-centertransition duration-500 ease-in-out hover:scale-110 cursor-pointer">
                <img src={ProfilePicture} alt="Malt" className=" rounded-full" />
            </div>
            <h1 className="name-text text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold outline-text mb-6 mt-20">
                Hello, I'm Romain !
            </h1>
            <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:text-4xl mb-6 mt-6 text-center">
                <span>I'm developing Creative &amp; </span>
                <br />
                <span>Innovative webapps</span>
            </p>
            <p className="text-l md:text-sm lg:text-3xl text-gray-400 max-w-prose text-center lg:mt-20">
                Fullstack developer with a focus on creating seamless, intuitive user experiences. Skilled in ReactJS, NodeJS and Solidity, I build high-quality, dynamic web applications. Passionate about fullstack development, cryptocurrency, and blockchain technology.
            </p>
        </div>
    );
};
