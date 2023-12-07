import './index.css'
import {useTranslation} from "react-i18next";
import {Button, TextField, ThemeProvider} from "@mui/material";
import { darkTheme } from '../../themes/dark.ts'
import MaltIcon from '../../../public/malt.svg'
import LinkedinIcon from '../../../public/linkedin.svg'
import GithubIcon from '../../../public/github.svg'
import {Footer} from "../Footer/Footer.tsx";
import axios from 'axios'
import {downloadResumeEndpoint, sendGridEndpoint} from "../../endpoints.ts";
import {ChangeEvent, FormEvent, useState} from "react";
import {useSnackbar} from "notistack";

export const Contact = () => {
    const { t } = useTranslation();
    const { enqueueSnackbar } = useSnackbar();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        project: '',
        message: ''
    });

    const socialMedias = [
        {name: 'Malt', img: MaltIcon, desc: t('maltDesc'), link: 'https://www.malt.fr/profile/romaindesson'},
        {name: 'Linkedin', img: LinkedinIcon, desc: t('linkedinDesc'), link: 'https://www.linkedin.com/in/romain-desson-935466168/'},
        {name: 'Github', img: GithubIcon, desc: t('githubDesc'), link: 'https://github.com/RomainDesson'}
    ]

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSendMailClick = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post(sendGridEndpoint, {
                subject: 'Email venant du portfolio',
                text: `Nom : ${formData.firstName} ${formData.lastName}\nEmail : ${formData.email}\nProjet : ${formData.project}\nMessage : ${formData.message}`
            });
            console.log(response)
            if (response.status === 200) {
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    project: '',
                    message: ''
                })
                enqueueSnackbar(t('messageSent'), { variant: 'success' });
            }

        } catch (error) {
            enqueueSnackbar(t('messageError'), { variant: 'error' });
        }
    }

    return (
        <div className={'contact-container pt-28'} id={'contact'}>
            <ThemeProvider theme={darkTheme}>
                <h1 className="name-text text-5xl lg:text-6xl xl:text-7xl font-bold outline-text mb-6 mt-20">
                    {t('contact')}
                </h1>
                <div className='flex justify-center mt-16 md:mb-8 text-3xl'>
                    <Button variant="contained" color="primary" type="submit" onClick={() => window.open(downloadResumeEndpoint, "_blank")}>
                        <p className='text-lg'>{t('downloadResume')}</p>
                    </Button>
                </div>
                <div className={'flex flex-col between gap-20 md:flex-row mb-60'}>
                    <div className="form-container mt-20 w-full md:w-2/4">
                        <p className={'text-3xl'}>Let's talk about your project !</p>
                            <form style={{ maxWidth: '800px' }} onSubmit={handleSendMailClick}>
                                <TextField
                                    fullWidth
                                    required
                                    label={t('firstName')}
                                    variant="standard"
                                    margin="normal"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    fullWidth
                                    required
                                    label={t('lastName')}
                                    variant="standard"
                                    margin="normal"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    fullWidth
                                    required
                                    label={t('email')}
                                    type="email"
                                    variant="standard"
                                    margin="normal"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    fullWidth
                                    label={t('yourProject')}
                                    variant="standard"
                                    margin="normal"
                                    name="project"
                                    value={formData.project}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    fullWidth
                                    required
                                    label={t('message')}
                                    multiline
                                    rows={4}
                                    margin="normal"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                                <Button variant="contained" color="primary" type="submit">
                                    {t('send')}
                                </Button>
                            </form>
                    </div>
                    <div className={'w-full md:w-2/4 mt-20'} style={{ maxWidth: '800px' }}>
                        <p className={'text-3xl'}>{t('socialMedia')}</p>
                        <div className='flex flex-col gap-16 mt-20'>
                            {socialMedias.map((media, index) => (
                                <div className='grid grid-cols-1 gap-2 items-center lg:grid-cols-2' key={index}>
                                    <div className='flex justify-center'>
                                        <a href={media.link} target='blank'><img src={media.img} className={'media-icon '}/></a>
                                    </div>
                                    <div className='flex flex-col justify-start'>
                                        <p className='text-2xl'>{media.name}</p>
                                        <p>{media.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="underline"></div>
                <Footer />
            </ThemeProvider>
        </div>
    )
}
