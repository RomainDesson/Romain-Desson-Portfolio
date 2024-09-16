import { Biography } from './components/Biography/Biography.tsx';
//import {Projects} from "./components/Projects/Projects.tsx";
import './index.css'
import {Tools} from "./components/Tools/Tools.tsx";
import {Experiences} from "./components/Experiences/Experiences.tsx";
import {Contact} from "./components/Contact/Contact.tsx";
import {Topbar} from "./components/Topbar/Topbar.tsx";
import { SnackbarProvider } from 'notistack';

const App = () => {
    return (
        <SnackbarProvider maxSnack={3}>
            <div className="animated-background text-white global-container">
                <Topbar />
                <div className="first-view-container px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <Biography />
                </div>
                {/*
                <div className="view-container projects-view tools- px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <Projects />
                </div>
                */}
                <div className="view-container tools-view px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <Tools />
                </div>
                <div className="view-container experiences-view px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <Experiences />
                </div>
                <div className="view-container contact-view px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <Contact />
                </div>
            </div>
        </SnackbarProvider>
    );
}

export default App;
