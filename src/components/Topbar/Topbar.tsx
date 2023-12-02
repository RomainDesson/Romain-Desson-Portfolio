import './index.css';
import { useTranslation } from 'react-i18next';
import {useState} from "react";
import Logo from '../../../public/logo.png'

export const Topbar = () => {
    const { i18n, t } = useTranslation();
    const [activeLanguage, setActiveLanguage] = useState(i18n.language);

    const changeLanguage = (lang: any) => {
        i18n.changeLanguage(lang);
        setActiveLanguage(lang);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center topbar-container w-screen fixed top-0 right-0">
            <img src={Logo} className={'logo'}/>
            <div className={'flex justify-center md:gap-10 sm:gap-3'}>
                <a href="#biography" className="text-white text-2xl hover:underline my-2 md:my-0 md:mx-2">{t('biography')}</a>
                <a href="#projects" className="text-white text-2xl hover:underline my-2 md:my-0 md:mx-2">{t('projects')}</a>
                <a href="#tools" className="text-white text-2xl hover:underline my-2 md:my-0 md:mx-2">{t('tools')}</a>
                <a href="#experiences" className="text-white text-2xl hover:underline my-2 md:my-0 md:mx-2">{t('experiences')}</a>
                <a href="#contact" className="text-white text-2xl hover:underline my-2 md:my-0 md:mx-2">{t('contact')}</a>
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
