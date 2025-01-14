import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import project2 from "../../public/images/projects/microservices-ecommerce.png";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, img, summary, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border-2 border-solid relative border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] rounded-br-3xl xs:-right-2 sm:h-[102%] xs:rounded-[1.5rem] bg-dark dark:bg-light" />
      <div className="w-1/2 cursor-pointer overflow-hidden lg:w-full">
        {!img ? (
          <motion.video
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            controls={true}
            src="/images/projects/demo.mp4"
            className="w-full h-auto"
          ></motion.video>
        ) : (
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            priority
            sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:decoration-light"
        >
          <h2 className="my-2 w-full text-left text-4xl dark:text-light font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 dark:text-light">
            <GithubIcon className="dark:fill-light" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, img, link, github }) => {
  return (
    <article className="relative rounded-2xl rounded-br-2xl w-full flex flex-col items-center border border-solid border-dark bg-light dark:border-light dark:bg-dark p-10 xs:p-6">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <div className="w-full cursor-pointer overflow-hidden">
        {!img ? (
          <video
            controls={true}
            src="/images/projects/demo.mp4"
            className="w-full h-auto"
          ></video>
        ) : (
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            priority
            sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:decoration-light"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between dark:text-light">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline underline-offset-2 dark:decoration-light md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Hamza. | Projects</title>
        <meta name="description" content="projects page" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Generative AI Chatbot for Employee Assistance"
                github="/"
                summary="The project offers a generative AI-powered chatbot designed to assist employees with common workplace questions,
                                provide instant access to company policies, offer IT troubleshooting guidance, and support task-related queries."
                link="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="E-Commerce Microservices App"
                img={project2}
                github="/"
                link="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="E-Commerce Microservices App"
                img={project2}
                github="/"
                link="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="E-Commerce Microservices App"
                img={project2}
                github="/"
                summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi dolor iure officia quidem
                                quis, vero vitae. Animi, facere, tempora. Atque commodi eos est incidunt nihil perspiciatis placeat quo vero."
                link="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="E-Commerce Microservices App"
                img={project2}
                github="/"
                link="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="E-Commerce Microservices App"
                img={project2}
                github="/"
                link="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
