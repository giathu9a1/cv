import { Timeline } from '../ui/timeline';
import { experiences } from '~/constants/data';

const Experience = () => {
    return (
        <div>
            <h2 data-aos="fade-up" className="text-5xl font-semibold text-center pb-10">
                My Experience
            </h2>
            <Timeline data={experiences} />
        </div>
    );
};

export default Experience;
