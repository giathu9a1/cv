import React from 'react';
import { ctu } from '~/assets/images';

const Education = () => {
    return (
        <div>
            <h2 data-aos="fade-up" className="text-5xl font-semibold pb-10">
                Education
            </h2>
            <div className="flex gap-5">
                <img src={ctu} className="h-20 w-20" alt="ctu" />
                <div>
                    <p className="text-xl font-semibold">Can Tho University</p>
                    <p>Information Technology</p>
                </div>
            </div>
        </div>
    );
};

export default Education;
