import MaltIcon from '../../../public/malt.svg';
import GithubIcon from '../../../public/github.svg';
import LinkedinIcon from '../../../public/linkedin.svg';
import './index.css'

export const Contact = () => {
    return (
        <div className={'contact-container'} id={'contact'}>
            <h1 className="name-text text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold outline-text mb-6 mt-20">
                Contacts
            </h1>
            <div className="flex flex-row items-center justify-center space-x-4 my-12 bubbles-container">
                <div className=" relative img-animation w-20 h-20 rounded-full bg-gray-100 border-2 border-gray-400 flex justify-center items-center transition duration-500 ease-in-out hover:scale-110 cursor-pointer" style={{ top: '-5%', left: '50vw' }}>
                    <img src={MaltIcon} alt="Malt" id='maltIcon' className="icon w-3/4 h-3/4" />
                </div>

                <div className=" relative img-animation w-20 h-20 rounded-full bg-gray-100 border-2 border-gray-400 flex justify-center items-center transition duration-500 ease-in-out hover:scale-110 cursor-pointer" style={{ top: '80%', left: '1vw' }}>
                    <img src={GithubIcon} alt="GitHub" id='githubIcon' className="icon w-3/4 h-3/4" />
                </div>

                <div className=" relative img-animation w-20 h-20 rounded-full bg-gray-100 border-2 border-gray-400 flex justify-center items-center transition duration-500 ease-in-out hover:scale-110 cursor-pointer" style={{ top: '45%', right: '5vw' }}>
                    <img src={LinkedinIcon} alt="LinkedIn" id='linkedinIcon' className="icon w-3/4 h-3/4" style={{marginTop: '0.5px'}} />
                </div>
            </div>
        </div>
    )
}
