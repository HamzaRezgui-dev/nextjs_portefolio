import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import {GithubIcon} from "@/components/Icons";
import project2 from "../../public/images/projects/microservices-ecommerce.png"
import Image from "next/image";
import {motion} from "framer-motion";

const FramerImage = motion(Image)
const FeaturedProject = ({type, title, img, summary, link, github}) => {
    return (
        <article
            className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border-2 border-solid relative border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12">
            <div
                className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light"/>
            <div className="w-1/2 cursor-pointer overflow-hidden">
                {!img ?
                    <motion.video whileHover={{scale: 1.03}} transition={{duration: 0.2}} controls={true}
                                  src="/images/projects/demo.mp4"
                                  className="w-full h-auto"></motion.video> :
                    <FramerImage src={img} alt={title} className="w-full h-auto" priority
                                 sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                 whileHover={{scale: 1.05}} transition={{duration: 0.2}}/>
                }
            </div>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
                <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2 dark:decoration-light">
                    <h2 className="my-2 w-full text-left text-4xl dark:text-light font-bold">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10 dark:text-light">
                        <GithubIcon className="dark:fill-light"/>
                    </Link>
                    <Link href={link} target="_blank"
                          className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, img, link, github}) => {
    return (
        <article
            className="relative rounded-3xl rounded-br-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12">
            <div
                className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light"/>
            <div className="w-full cursor-pointer overflow-hidden">
                {!img ?
                    <video controls={true} src="/images/projects/demo.mp4"
                           className="w-full h-auto"></video> :
                    <FramerImage src={img} alt={title} className="w-full h-auto" priority
                                 sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                 whileHover={{scale: 1.05}} transition={{duration: 0.2}}/>
                }
            </div>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <Link href={link} target="_blank" className="hover:underline underline-offset-2 dark:decoration-light">
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between dark:text-light">
                    <Link href={link} target="_blank"
                          className="text-lg font-semibold underline underline-offset-2 dark:decoration-light">
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8">
                        <GithubIcon/>
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    return (
        <>
            <Head>
                <title>Hamza. | Projects</title>
                <meta name="description" content="projects page"/>
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16"/>

                    <div className="grid grid-cols-12 gap-24">
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
                        <div className="col-span-6">
                            <Project
                                title="E-Commerce Microservices App"
                                img={project2}
                                github="/"
                                link="/"
                            />
                        </div>
                        <div className="col-span-6">
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
                        <div className="col-span-6">
                            <Project
                                title="E-Commerce Microservices App"
                                img={project2}
                                github="/"
                                link="/"
                            />
                        </div>
                        <div className="col-span-6">
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