import "./index.css";
import LinkedinIcon from '../../../public/linkedin.svg'
import {useTranslation} from "react-i18next";
import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const Experiences = () => {
    const { t } = useTranslation();
    gsap.registerPlugin(ScrollTrigger);
    const cardRefs = useRef<HTMLDivElement[]>([]);
    cardRefs.current = [];
    const textRef = useRef<HTMLParagraphElement>(null);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        cardRefs.current.forEach((card, index) => {
            gsap.fromTo(card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: index * 0.3,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        const text = textRef.current;
        if (text && text.textContent) {
            const words = text.textContent.split(' ');
            text.textContent = '';
            words.forEach((word) => {
                const wordSpan = document.createElement('span');
                wordSpan.textContent = word + ' ';
                text.appendChild(wordSpan);
            });

            gsap.fromTo(text.children,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.2 * cardRefs.current.length,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: text,
                        start: 'top bottom',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        gsap.to(e.currentTarget, { scale: 1.1, ease: "power1.out" });
        const otherCards = gsap.utils.toArray('.experience-card').filter(card => card !== e.currentTarget);
        gsap.to(otherCards, { scale: 0.9, ease: "power1.out" });
    };

    const handleMouseLeave = () => {
        const allCards = gsap.utils.toArray('.experience-card');
        gsap.to(allCards, { scale: 1, ease: "power1.out" });
    };

    const experiences = [
        {
            id: 1,
            name: "Astran",
            slogan: "The secure cloud storage made simple.",
            size: "Start up",
            description: t('astranWork'),
            role: "Front-end engineer",
            links: [
                'https://www.linkedin.com/company/astran-io/',
                'https://astran.io/'
            ]
        },
        {
            id: 2,
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
            id: 3,
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
            <h1 className="name-text text-5xl lg:text-6xl xl:text-7xl font-bold outline-text mb-6 mt-28">
                {t('teamsIWorkedWith')}
            </h1>
            <div className="experience-grid">
                {experiences.map(exp => (
                    <div
                        key={exp.id}
                        ref={addToRefs}
                        className={`experience-card ${exp.name.toLowerCase()}-bg`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
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
            <p className={'text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-gray-200 text-opacity-50 italic'} ref={textRef} >
                {t('startupExperience')}
            </p>
        </div>
    );
};
