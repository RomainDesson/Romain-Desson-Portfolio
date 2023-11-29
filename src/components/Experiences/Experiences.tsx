import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./index.css"; // Assurez-vous de créer ce fichier CSS

export const Experiences = () => {
    const experiences = [
        {
            id: 1,
            name: "Entreprise A",
            slogan: "Slogan de l'Entreprise A",
            description: "Courte description de mon rôle et de l'entreprise.",
            role: "Mon rôle",
            image: "/chemin/vers/image-entreprise-a.png" // Chemin vers l'illustration de l'entreprise
        },
        // Ajoutez d'autres expériences ici
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
