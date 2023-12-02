import "./index.css";

export const Experiences = () => {
    const experiences = [
        {
            id: 1,
            name: "Astran",
            slogan: "The secure cloud storage made simple.",
            description: "Startup",
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
            slogan: "Construct Success: Simplifying Invoices & Client Management.",
            description: "Scale-up",
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
            description: "Scale-up",
            role: "Full-stack engineer",
            image: "/chemin/vers/image-entreprise-a.png",
            links: [
                'https://www.linkedin.com/company/soundcast-io/mycompany/',
                'https://soundcast.io/en/'
            ]
        },
    ];

    return (
        <>
            <h1 className="name-text text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold outline-text mb-6 mt-20">
                Teams I<br/>Worked With
            </h1>
            <div className="experience-grid">
                {experiences.map(exp => (
                    <div key={exp.id} className="experience-card">
                        <img src={exp.image} alt={`Logo de ${exp.name}`} className="experience-image"/>
                        <h3>{exp.name}</h3>
                        <p className="slogan">{exp.slogan}</p>
                        <p>{exp.description}</p>
                        <p className="role"><strong>Rôle:</strong> {exp.role}</p>
                    </div>
                ))}
            </div>
        </>
    );
};
