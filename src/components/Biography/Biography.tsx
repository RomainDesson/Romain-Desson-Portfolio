import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from 'react-spring';
import Typed from 'typed.js';
import './index.css';
import ProfilePicture from '../../../public/profile.jpeg';
import MaltIcon from "../../../public/malt.svg";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";

export const Biography = () => {
    const { t } = useTranslation();
    const typedTarget = useRef(null);

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

    return (
        <div className="flex flex-col items-center pt-16 md:pt-24 lg:pt-32" id="biography">
            <animated.div style={fadeInProfile} className="w-40 h-40 rounded-full bg-gray-100 border-2 border-gray-400 flex justify-center items-center">
                <img src={ProfilePicture} alt={t('malt')} className="rounded-full" />
            </animated.div>
            <h1 className="name-text text-4xl lg:text-5xl xl:text-6xl font-bold outline-text mb-6 mt-10">
                <span ref={typedTarget}></span>
            </h1>
            <animated.p style={fadeInIntro} className="text-2xl md:text-3xl xl:text-5xl lg:text-4xl mb-6 mt-6 text-center">
                <span>{t('intro')}</span>
            </animated.p>
            <animated.p style={fadeInDescription} className="text-l md:text-sm lg:text-xl text-gray-400 max-w-prose text-center lg:mt-10">
                {t('description')}
            </animated.p>
            <div className={'flex flex-row mt-10 gap-10'}>
                <animated.div style={fadeInUpIconsMalt} className="img-animation w-20 h-20 rounded-full bg-gray-100 border-2 border-gray-400 flex justify-center items-center">
                    <a href='https://www.malt.fr/profile/romaindesson' target='blank' className='reset-link-styles'><img src={MaltIcon} alt="Malt" className="icon w-3/4 h-3/4"/></a>
                </animated.div>
                <animated.div style={fadeInUpIconsGithub} className="img-animation w-20 h-20 rounded-full bg-gray-100 border-2 border-gray-400 flex justify-center items-center">
                    <a href='https://github.com/RomainDesson' target='blank' className='reset-link-styles'><img src={GithubIcon} alt="Malt" className="icon w-3/4 h-3/4"/></a>
                </animated.div>
                <animated.div style={fadeInUpIconsLinkedin} className="img-animation w-20 h-20 rounded-full bg-gray-100 border-2 border-gray-400 flex justify-center items-center">
                    <a href='https://www.linkedin.com/in/romain-desson-935466168/' target='blank' className='reset-link-styles'><img src={LinkedinIcon} alt="Malt" className="icon w-3/4 h-3/4"/></a>
                </animated.div>
            </div>
        </div>
    );
};
