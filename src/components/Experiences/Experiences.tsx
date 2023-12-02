import "./index.css";
import LinkedinIcon from '../../../public/linkedin.svg'

export const Experiences = () => {
    const experiences = [
        {
            id: 1,
            name: "Astran",
            slogan: "The secure cloud storage made simple.",
            size: "Startup",
            description: "I participated in early stage of Astran, implementing strong basics and good code practice for the users interface.",
            role: "Front-end engineer",
            image: "/chemin/vers/image-entreprise-a.png",
            links: [
                'https://www.linkedin.com/company/astran-io/',
                'https://astran.io/'
            ]
        },
        {
            id: 1,
            name: "Obat",
            slogan: "Simplifying Invoices & Client Management.",
            size: "Scale-up",
            description: "I joined Obat to refact the legacy applications in react. I learnt a lot about refactoring and good pratices",
            role: "Front-end engineer",
            image: "/chemin/vers/image-entreprise-a.png",
            links: [
                'https://www.linkedin.com/company/obat/',
                'https://www.obat.fr/'
            ]
        },
        {
            id: 1,
            name: "Soundcast",
            slogan: "Your audio business partner.",
            size: "Scale-up",
            description: "In my years at Soundcast, I participated in many aspects of a startup project, from designing user interface to implement back-end services.",
            role: "Full-stack engineer",
            image: "/chemin/vers/image-entreprise-a.png",
            links: [
                'https://www.linkedin.com/company/soundcast-io/mycompany/',
                'https://soundcast.io/en/'
            ]
        },
    ];

    return (
        <div className={'flex flex-col gap-20'} id={'experiences'}>
            <h1 className="name-text text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold outline-text mb-6 mt-20">
                Teams I Worked With
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
            <p className={'text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-gray-200 text-opacity-50 italic'}>
                "I mainly worked with startups, able to see many faces in the development process and I had to always adapt myself in many situations."
            </p>
        </div>
    );
};
