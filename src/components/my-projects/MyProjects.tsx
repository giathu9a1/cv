import { StickyScroll } from '../ui/sticky-scroll-reveal';
import { projects } from '~/constants/data';

const MyProjects = () => {
    return (
        <div id="projects">
            <h2 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-5xl font-semibold pb-10">
                My Projects
            </h2>
            <StickyScroll content={projects} />
        </div>
    );
};

export default MyProjects;
