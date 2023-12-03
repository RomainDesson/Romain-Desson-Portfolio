import {useTranslation} from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className="footer-container bg-dark text-white py-4 mt-10 mb-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center">
                    <div>
                        <p>{t('allRights')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
