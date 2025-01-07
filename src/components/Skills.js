import React from 'react';
import {motion} from "framer-motion";

const Skill = ({name, x, y, color}) => {
    return (
        <motion.div
            className={`flex items-center justify-center rounded-full font-semibold
                    p-8 shadow-dark cursor-pointer absolute py-3 px-6`}
            style={{backgroundColor: color, color: "white"}} // Unified color per skill group
            whileHover={{scale: 1.05}}
            initial={{x: 0, y: 0}}
            animate={{x: x, y: y}}
            transition={{duration: 1.5}}
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
                    className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
                    <motion.div
                        className="flex items-center justify-center rounded-full font-semibold
                    bg-dark text-light p-8 shadow-dark cursor-pointer"
                        whileHover={{scale: 1.05}}
                    >
                        Web
                    </motion.div>

                    { /* Basics */}
                    <Skill name="HTML" x="0vw" y="6vw" color="#FFD700"/>
                    <Skill name="CSS" x="0vw" y="-6vw" color="#FFD700"/>

                    { /* Languages */}
                    <Skill name="Javascript" x="-10vw" y="-7vw" color="#FF4500"/>
                    <Skill name="Typescript" x="12vw" y="-5vw" color="#FF4500"/>
                    <Skill name="Java" x="1vw" y="9vw" color="#FF4500"/>

                    { /* Frameworks and environments */}
                    <Skill name="React" x="-12vw" y="-10vw" color="#4682B4"/>
                    <Skill name="Angular" x="-20vw" y="-2vw" color="#4682B4"/>
                    <Skill name="Express" x="-16vw" y="7vw" color="#4682B4"/>
                    <Skill name="NodeJs" x="-7vw" y="11vw" color="#4682B4"/>
                    <Skill name="Nest" x="10vw" y="10vw" color="#4682B4"/>
                    <Skill name="Next" x="20vw" y="2vw" color="#4682B4"/>
                    <Skill name="Springboot" x="10vw" y="-10vw" color="#4682B4"/>

                    { /* Databases */}
                    <Skill name="MongoDB" x="-20vw" y="-10vw" color="#32CD32"/>
                    <Skill name="MySQL" x="18vw" y="10vw" color="#32CD32"/>
                    <Skill name="Postgres" x="18vw" y="-10vw" color="#32CD32"/>

                    { /* Testing */}
                    <Skill name="Jest" x="1vw" y="17vw" color="#8A2BE2"/>
                    <Skill name="Cypress" x="1vw" y="-17vw" color="#8A2BE2"/>

                    { /* DevOps */}
                    <Skill name="Docker" x="-7vw" y="-20vw" color="#FF6347"/>
                    <Skill name="Gitlab CI/CD" x="-25vw" y="-14vw" color="#FF6347"/>
                    <Skill name="Microservices" x="-36vw" y="-2vw" color="#FF6347"/>
                    <Skill name="Kafka" x="25vw" y="-14vw" color="#FF6347"/>
                    <Skill name="Grafana" x="36vw" y="-2vw" color="#FF6347"/>
                </div>
            </div>
        );
    }
;

export default Skills;
