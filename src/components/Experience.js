import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between lg:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="sm:ml-8 md:ml-6 lg:ml-10"
      >
        <div className="capitalize font-bold text-2xl lg:text-xl md:text-base">
          <h3>{position}</h3>
          <h3>
            <a
              href={companyLink}
              target="_blank"
              className="text-primary dark:text-primaryDark capitalize"
            >
              @{company}
            </a>
          </h3>
        </div>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 md:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-20">
      <h2 className="font-bold text-8xl mb-24 w-full text-center lg:text-7xl xs:text-5xl">
        Experience
      </h2>
      <div ref={ref} className="w-[90%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer Intern"
            company="Fondative"
            time="February 2024 - July 2024"
            address="Tunis"
            companyLink="https://www.fondative.com/"
            work="Designed and developed authentication and profile management modules to ensure a smooth and secure user experience, along with data management and chatbot interaction modules that integrated advanced AI features to enhance user engagement. Additionally, I created ticket management and dashboard modules, providing clear and effective data visualization for both users and administrators. To ensure stability and reliability, I rigorously implemented unit and integration tests for all developed features. The application was fully Dockerized, and I automated the CI/CD pipeline for seamless deployment. Furthermore, I documented the entire codebase comprehensively. The technologies used included React, Nest, Flask, MySQL, Weaviate, Cohere API, Jest, Cypress, Swagger, Docker, GitLab CI/CD, and AWS."
          />

          <Details
            position="Part time Fullstack Developer"
            company="Appaxis Innovations"
            time="July 2023 - September 2023"
            address="Remote"
            companyLink="https://www.appaxisinnovations.tn/"
            work="Developed the web interface based on provided designs, optimizing both user experience and design aesthetics. Additionally, I integrated the Konnect payment service to enable secure and seamless transactions. I also implemented business logic and managed the database to support application functionality. The technologies used included React, MongoDB, Express.js, Node.js, and the Konnect API."
          />

          <Details
            position="Frontend Developer Intern"
            company="Terrakodo SUARL"
            time="August 2022 - September 2022"
            address="Tunis"
            companyLink="https://www.terrakodo.com/"
            work="Designed a new user interface for the Fynka application, carefully addressing user needs and expectations. I developed and integrated the new design, ensuring optimization and compatibility across platforms. Additionally, I produced a detailed report outlining the changes made, along with explanations of the modifications and their impact. The technologies used included Angular and Ionic."
          />

          <Details
            position="Fullstack Developer Intern"
            company="Amen Bank"
            time="February 2021 - May 2021"
            address="Tunis"
            companyLink="https://www.amenbank.com.tn/"
            work="Implemented authentication and profile management features, along with modules designed for administrators to handle client and bank account management. Furthermore, I built transfer and dashboard functionalities to improve usability and streamline operations. The technologies utilized included Spring Boot, Angular, and MySQL."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
