import React from 'react';
import {motion} from "framer-motion";

const Skill = ({name, x, y}) => {
    return (
        <motion.div
            className={`flex items-center justify-center rounded-full font-semibold
                    p-8 shadow-dark cursor-pointer absolute py-3 px-6 bg-dark text-light dark:bg-light dark:text-dark`}
            whileHover={{scale: 1.05}}
            initial={{x: 0, y: 0}}
            whileInView={{x: x, y: y, transition: {duration: 1.5}}}
            viewport={{once: true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
        return (
            <div>
                <h2 className="font-bold text-8xl mt-64 w-full text-center">
                    Skills
                </h2>
                <div
                    className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
                    <motion.div
                        className="flex items-center justify-center rounded-full font-semibold
                    bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark"
                        whileHover={{scale: 1.05}}
                    >
                        Web
                    </motion.div>

                    { /* Basics */}
                    <Skill name="HTML" x="0vw" y="6vw"/>
                    <Skill name="CSS" x="0vw" y="-6vw"/>

                    { /* Languages */}
                    <Skill name="Javascript" x="-10vw" y="-7vw"/>
                    <Skill name="Typescript" x="12vw" y="-5vw"/>
                    <Skill name="Java" x="1vw" y="9vw"/>

                    { /* Frameworks and environments */}
                    <Skill name="React" x="-12vw" y="-10vw"/>
                    <Skill name="Angular" x="-20vw" y="-2vw"/>
                    <Skill name="Express" x="-16vw" y="7vw"/>
                    <Skill name="NodeJs" x="-7vw" y="11vw"/>
                    <Skill name="Nest" x="10vw" y="10vw"/>
                    <Skill name="Next" x="20vw" y="2vw"/>
                    <Skill name="Springboot" x="10vw" y="-10vw"/>

                    { /* Databases */}
                    <Skill name="MongoDB" x="-20vw" y="-10vw"/>
                    <Skill name="MySQL" x="18vw" y="10vw"/>
                    <Skill name="Postgres" x="18vw" y="-10vw"/>

                    { /* Testing */}
                    <Skill name="Jest" x="1vw" y="17vw"/>
                    <Skill name="Cypress" x="1vw" y="-17vw"/>

                    { /* DevOps */}
                    <Skill name="Docker" x="-7vw" y="-20vw"/>
                    <Skill name="Gitlab CI/CD" x="-25vw" y="-14vw"/>
                    <Skill name="Microservices" x="-36vw" y="-2vw"/>
                    <Skill name="Kafka" x="25vw" y="-14vw"/>
                    <Skill name="Grafana" x="36vw" y="-2vw"/>
                </div>
            </div>
        );
    }
;

export default Skills;
