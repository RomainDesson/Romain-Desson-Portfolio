import './index.css'
import {useTranslation} from "react-i18next";
import {Button, TextField, ThemeProvider} from "@mui/material";
import { darkTheme } from '../../themes/dark.ts'
import MaltIcon from '../../../public/malt.svg'
import LinkedinIcon from '../../../public/linkedin.svg'
import GithubIcon from '../../../public/github.svg'

export const Contact = () => {
    const { t } = useTranslation();

    const socialMedias = [
        {name: 'Malt', img: MaltIcon, desc: t('maltDesc')},
        {name: 'Linkedin', img: LinkedinIcon, desc: t('linkedinDesc')},
        {name: 'Github', img: GithubIcon, desc: t('githubDesc')}
    ]

    return (
        <div className={'contact-container pt-28'} id={'contact'}>
            <h1 className="name-text text-5xl lg:text-6xl xl:text-7xl font-bold outline-text mb-6 mt-20">
                {t('contact')}
            </h1>
            <div className={'flex flex-col between gap-20 md:flex-row'}>
                <div className="form-container mt-20 w-2/4">
                    <p className={'text-3xl'}>Let's talk about your project !</p>
                    <ThemeProvider theme={darkTheme}>
                        <form style={{ maxWidth: '800px' }}>
                            <TextField
                                fullWidth
                                label={t('firstName')}
                                variant="standard"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label={t('lastName')}
                                variant="standard"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label={t('email')}
                                type="email"
                                variant="standard"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label={t('yourProject')}
                                variant="standard"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label={t('message')}
                                multiline
                                rows={4}
                                margin="normal"
                            />
                            <Button variant="contained" color="primary" type="submit">
                                {t('send')}
                            </Button>
                        </form>
                    </ThemeProvider>
                </div>
                <div className={'w-2/4 mt-20'} style={{ maxWidth: '800px' }}>
                    <p className={'text-3xl'}>{t('socialMedia')}</p>
                    <div className='flex flex-col gap-16 mt-20'>
                        {socialMedias.map(media => (
                            <div className='grid grid-cols-1 gap-2 items-center lg:grid-cols-2'>
                                <a className='flex justify-center'>
                                    <img src={media.img} className={'media-icon '}/>
                                </a>
                                <div className='flex flex-col justify-start'>
                                    <p className='text-2xl'>{media.name}</p>
                                    <p>{media.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
