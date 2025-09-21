import AboutMe from '~/components/about-me/AboutMe';
import BasicInfo from '~/components/basic-info/BasicInfo';
import Education from '~/components/education/Education';
import Experience from '~/components/experience/Experience';
import MainHome from '~/components/main-home/MainHome';
import MyProjects from '~/components/my-projects/MyProjects';

const HomePage = () => {
    return (
        <div className="space-y-50 container">
            <MainHome />
            <AboutMe />
            <Education />
            <BasicInfo />
            <Experience />
            <MyProjects />
        </div>
    );
};

export default HomePage;
