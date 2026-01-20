import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import Certifications from './_components/Certifications';

export default function Home() {
    return (
        <div className="page-wrapper">
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <ProjectList /> 
            <Certifications /> 
        </div>
    );
}