import { useTranslation } from 'react-i18next';
import './index.css';
import ProfilePicture from '../../../public/profile.jpeg';

export const Biography = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center pt-16 md:pt-24 lg:pt-32" id="biography">
            <div className="w-40 h-40 rounded-full bg-gray-100 border-2 border-gray-400 flex justify-center items-center transition duration-500 ease-in-out hover:scale-110 cursor-pointer">
                <img src={ProfilePicture} alt={t('malt')} className="rounded-full" />
            </div>
            <h1 className="name-text text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold outline-text mb-6 mt-10">
                {t('hello')}
            </h1>
            <p className="text-2xl md:text-3xl xl:text-5xl lg:text-4xl mb-6 mt-6 text-center">
                <span>{t('intro')}</span>
            </p>
            <p className="text-l md:text-sm lg:text-xl text-gray-400 max-w-prose text-center lg:mt-10">
                {t('description')}
            </p>
        </div>
    );
};
