import React, {useEffect, useRef} from 'react';
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/hmozman.jpeg"
import {useInView, useMotionValue, useSpring} from "framer-motion";

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latestValue) => {
            if (ref.current && latestValue.toFixed(0) <= value) {
                ref.current.textContent = latestValue.toFixed(0)
            }
        })
    }, [springValue, value]);
    return <span ref={ref}></span>
}

const
    About = () => {
        return (
            <div>
                <Head>
                    <title>Hamza. | About Page</title>
                    <meta name="description" content="about page"/>
                </Head>
                <main className="flex w-full flex-col items-center justify-center">
                    <Layout className="pt-16">
                        <AnimatedText text="Passion fuels Purpose!" className="mb-16"/>
                        <div className="grid w-full grid-cols-9 gap-16">
                            <div className="col-span-3 flex flex-col items-start justify-start text-justify">
                                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                                <p className="font-medium">
                                    As a skilled full-stack engineer, I am dedicated to turning ideas into innovative
                                    web
                                    applications. I have a strong passion for creating seamless user experiences and
                                    efficient back-end systems.
                                </p>
                                <p className="my-4 font-medium">
                                    With experience in both front-end and back-end development, I excel at building
                                    full-featured
                                    applications that are scalable, performant, and secure. I take pride in my ability
                                    to
                                    adapt to new challenges and continuously improve my craft.
                                </p>
                                <p className="font-medium">
                                    Explore my latest projects, where I demonstrate my ability to work across various
                                    domains and deliver high-quality
                                    solutions.
                                </p>
                            </div>
                            <div
                                className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                                <div
                                    className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark "/>
                                <Image src={profilePic} alt="hamza_pic" className="w-full h-auto rounded-3xl"/>
                            </div>
                            <div className="col-span-2 flex flex-col items-end justify-between">
                                <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={5}/>+
                                </span>
                                    <h2 className="text-xl font-medium capitalize text-dark/75">
                                        satisfied clients
                                    </h2>
                                </div>
                                <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={10}/>+
                                </span>
                                    <h2 className="text-xl font-medium capitalize text-dark/75">
                                        projects completed
                                    </h2>
                                </div>
                                <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={1}/>+
                                </span>
                                    <h2 className="text-xl font-medium capitalize text-dark/75">
                                        years of experience
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Layout>
                </main>
            </div>
        );
    };

export default About;