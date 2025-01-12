import React, {useRef} from 'react';
import {motion, useScroll} from "framer-motion";
import LiIcon from "@/components/LiIcon";

const Details = ({type, time, place, info}) => {
    const ref = useRef(null);
    return (
        <li ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between text-justify">
            <LiIcon reference={ref}/>
            <motion.div initial={{y: 50}} whileInView={{y: 0}} transition={{duration: 0.5, type: "spring"}}>
                <h3 className="capitalize font-bold text-2xl">{type}
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                    {time} | {place}
                </span>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">
                Education
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div style={{scaleY: scrollYProgress}}
                            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        type="Engineering Degree in Applied Sciences and Technology"
                        place="Higher Institute of Multimedia Arts of Manouba"
                        time="September 2021 - October 2024"
                    />

                    <Details
                        type="Bachelor’s Degree in Computer Science and Multimedia"
                        place="Higher Institute of Multimedia Arts of Manouba"
                        time="September 2018 – June 2021"
                    />

                </ul>
            </div>
        </div>
    );
};

export default Education;