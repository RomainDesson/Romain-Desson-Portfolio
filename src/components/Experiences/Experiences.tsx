import "./index.css";
import LinkedinIcon from '../../../public/linkedin.svg'
import {useTranslation} from "react-i18next";

export const Experiences = () => {
    const { t } = useTranslation();
    const experiences = [
        {
            id: 1,
            name: "Astran",
            slogan: "The secure cloud storage made simple.",
            size: "Startup",
            description: t('astranWork'),
            role: "Front-end engineer",
            links: [
                'https://www.linkedin.com/company/astran-io/',
                'https://astran.io/'
            ]
        },
        {
            id: 1,
            name: "Obat",
            slogan: "Simplifying Invoices & Client Management.",
            size: 'Scale up',
            description: t('obatWork'),
            role: "Front-end engineer",
            links: [
                'https://www.linkedin.com/company/obat/',
                'https://www.obat.fr/'
            ]
        },
        {
            id: 1,
            name: "Soundcast",
            slogan: "Your audio business partner.",
            size: 'Scale up',
            description: t('soundcastWork'),
            role: "Full-stack engineer",
            links: [
                'https://www.linkedin.com/company/soundcast-io/mycompany/',
                'https://soundcast.io/en/'
            ]
        },
    ];

    return (
        <div className={'flex flex-col gap-20'} id={'experiences'}>
            <h1 className="name-text text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold outline-text mb-6 mt-28">
                {t('teamsIWorkedWith')}
            </h1>
            <div className="experience-grid">
                {experiences.map(exp => (
                    <div key={exp.id} className={`experience-card ${exp.name.toLowerCase()}-bg`}>
                        <div className="experience-content">
                            <h3 className={'text-4xl md:text-4xl lg:text-5xl xl:text-6xl'}>{exp.name}</h3>
                            <p className="slogan mb-4">{exp.slogan}</p>
                            <p className='size text-1xl md:text-1xl lg:text-2xl xl:text-3xl'>-{exp.size}-</p>
                            <p className="role mb-8"><strong>Rôle:</strong> {exp.role}</p>
                            <p className='description mb-8'>{exp.description}</p>
                            <div className="card-footer">
                                <div className="links">
                                    <a href={exp.links[0]} target="_blank">
                                        <img src={LinkedinIcon} alt="LinkedIn" />
                                    </a>
                                    <span>|</span>
                                    <a href={exp.links[1]} target="_blank">
                                        <p>Website</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className={'text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-gray-200 text-opacity-50 italic'}>
                {t('startupExperience')}
            </p>
        </div>
    );
};
