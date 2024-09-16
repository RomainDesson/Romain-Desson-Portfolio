import {useEffect, useRef, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from 'react-spring';
import Typed from 'typed.js';
import './index.css';
import ProfilePicture from '../../../public/profile.png';
import MaltIcon from "../../../public/malt.svg";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";

export const Biography = () => {
    const { t } = useTranslation();
    const typedTarget = useRef(null);
    const [hoverMalt, setHoverMalt] = useState(false);
    const [hoverGithub, setHoverGithub] = useState(false);
    const [hoverLinkedin, setHoverLinkedin] = useState(false);

    useEffect(() => {
        const typed = new Typed(typedTarget.current, {
            strings: [t('hello')],
            typeSpeed: 30,
            showCursor: false
        });

        return () => {
            typed.destroy();
        };
    }, [t]);

    const fadeInUpIconsMalt = useSpring({ from: { opacity: 0, transform: 'translateY(50px)' }, to: { opacity: 1, transform: 'translateY(0)' }, delay: 1000 });
    const fadeInUpIconsGithub = useSpring({ from: { opacity: 0, transform: 'translateY(50px)' }, to: { opacity: 1, transform: 'translateY(0)' }, delay: 1300 });
    const fadeInUpIconsLinkedin = useSpring({ from: { opacity: 0, transform: 'translateY(50px)' }, to: { opacity: 1, transform: 'translateY(0)' }, delay: 1600 });
    const fadeInDescription = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 2000 });
    const fadeInIntro = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1500 });
    const fadeInProfile = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 2300 });
    const hoverMaltAnimation = useSpring({ transform: hoverMalt ? 'scale(1.1)' : 'scale(1)' });
    const hoverGithubAnimation = useSpring({ transform: hoverGithub ? 'scale(1.1)' : 'scale(1)' });
    const hoverLinkedinAnimation = useSpring({ transform: hoverLinkedin ? 'scale(1.1)' : 'scale(1)' });

    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mx-auto px-4" id="biography">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                <h1 className="name-text text-center md:text-left text-5xl lg:text-6xl xl:text-8xl font-bold outline-text mb-6">
                    <span ref={typedTarget}></span>
                </h1>
                <animated.h2 style={fadeInIntro} className="text-2xl md:text-3xl xl:text-5xl lg:text-4xl mb-6 text-center md:text-left">
                    <span>{t('intro')}</span>
                </animated.h2>
                <animated.p style={fadeInDescription} className="text-l md:text-lg lg:text-2xl xl:text-3xl max-w-prose text-center md:text-left mb-10">
                    {t('description')}
                </animated.p>
                <div className="flex flex-row gap-10">
                <animated.div
                    style={{...fadeInUpIconsMalt, ...hoverMaltAnimation}}
                    className="img-animation w-20 h-20 rounded-full flex justify-center items-center"
                    onMouseEnter={() => setHoverMalt(true)}
                    onMouseLeave={() => setHoverMalt(false)}
                >
                    <a href='https://www.malt.fr/profile/romaindesson' target='blank' className='reset-link-styles'>
                        <img src={MaltIcon} alt="Malt" className="icon w-3/4 h-3/4"/>
                    </a>
                </animated.div>
                <animated.div
                    style={{...fadeInUpIconsGithub, ...hoverGithubAnimation}}
                    className="img-animation w-20 h-20 rounded-full flex justify-center items-center"
                    onMouseEnter={() => setHoverGithub(true)}
                    onMouseLeave={() => setHoverGithub(false)}
                >
                    <a href='https://github.com/RomainDesson' target='blank' className='reset-link-styles'>
                        <img src={GithubIcon} alt="Malt" className="icon w-3/4 h-3/4 "/>
                    </a>
                </animated.div>
                <animated.div style={{...fadeInUpIconsLinkedin, ...hoverLinkedinAnimation}}
                              className="img-animation w-20 h-20 rounded-full flex justify-center items-center"
                              onMouseEnter={() => setHoverLinkedin(true)}
                              onMouseLeave={() => setHoverLinkedin(false)}
                >
                    <a href='https://www.linkedin.com/in/romain-desson-935466168/' target='blank' className='reset-link-styles'>
                        <img src={LinkedinIcon} alt="Malt" className="icon w-3/4 h-3/4"/>
                    </a>
                </animated.div>
                </div>
            </div>
            
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end md:mt-0 overflow-visible">
                <animated.div style={fadeInProfile} className="w-auto h-[40vh] md:w-[100vh] md:h-[100vh] flex overflow-visible">
                    <img src={ProfilePicture} alt={t('malt')} className="rounded-full w-auto h-auto object-cover" />
                </animated.div>
            </div>
        </div>
    );
};
