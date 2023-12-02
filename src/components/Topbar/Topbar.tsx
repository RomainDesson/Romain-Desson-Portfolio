import './index.css';
import { useTranslation } from 'react-i18next';
import {useEffect, useState} from "react";
import Logo from '../../../public/logo.png'

export const Topbar = () => {
    const { i18n, t } = useTranslation();
    const [activeLanguage, setActiveLanguage] = useState(i18n.language);
    const [activeSection, setActiveSection] = useState('');

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setActiveLanguage(lang);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['biography', 'projects', 'tools', 'experiences', 'contact'];
            let currentSection = '';
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 50 && rect.bottom >= 50) {
                        currentSection = section;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center topbar-container w-screen fixed top-0 right-0">
            <img src={Logo} className={'logo'}/>
            <div className={'flex justify-center md:gap-10 sm:gap-3'}>
                <div onClick={() => scrollToSection('biography')} className={`text-white text-2xl my-2 md:my-0 md:mx-2 cursor-pointer ${activeSection === 'biography' ? 'active-link active' : 'active-link'}`}>{t('biography')}</div>
                <div onClick={() => scrollToSection('projects')} className={`text-white text-2xl my-2 md:my-0 md:mx-2 cursor-pointer ${activeSection === 'projects' ? 'active-link active' : 'active-link'}`}>{t('projects')}</div>
                <div onClick={() => scrollToSection('tools')} className={`text-white text-2xl my-2 md:my-0 md:mx-2 cursor-pointer ${activeSection === 'tools' ? 'active-link active' : 'active-link'}`}>{t('tools')}</div>
                <div onClick={() => scrollToSection('experiences')} className={`text-white text-2xl my-2 md:my-0 md:mx-2 cursor-pointer ${activeSection === 'experiences' ? 'active-link active' : 'active-link'}`}>{t('experiences')}</div>
                <div onClick={() => scrollToSection('contact')} className={`text-white text-2xl my-2 md:my-0 md:mx-2 cursor-pointer ${activeSection === 'contact' ? 'active-link active' : 'active-link'}`}>{t('contact')}</div>
            </div>
            <div className={'flex justify-end mr-10 md:gap-5 sm:gap-2 '}>
                <span
                    className={`cursor-pointer fi fi-gb text-xl ${activeLanguage === 'en' ? 'active-language' : ''}`}
                    onClick={() => changeLanguage('en')}
                ></span>
                <span
                    className={`cursor-pointer fi fi-fr text-xl ${activeLanguage === 'fr' ? 'active-language' : ''}`}
                    onClick={() => changeLanguage('fr')}
                ></span>
            </div>
        </div>
    );
};
