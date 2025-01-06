import React from 'react';
import Link from "next/link";
import Logo from "@/components/Logo";
import {useRouter} from "next/router";
import {FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon} from "@/components/Icons";
import {motion} from "framer-motion";

const CustomLink = ({ href, title, className=""}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={ `h-[1px] inline-block bg-dark absolute left-0
                -bottom-0.5 group-hover:w-full transition-[width] ease duration-500
                ${router.asPath === href ? "w-full" : "w-0"}`
                }>
                &nbsp;
            </span>
        </Link>
    );
}
const NavBar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="About" className='mx-4'/>
                <CustomLink href="/projects" title="Projects" className='ml-4'/>
            </nav>
            <nav className="flex items-center justify-center flex-wrap ">
                <motion.a href="https://www.facebook.com/hamzarezguix/" target={"_blank"}
                          className="w-6 mx-3"
                          whileHover={{y: -2}}
                          whileTap={{scale: 0.9}}>
                    <FacebookIcon/>
                </motion.a>
                <motion.a href="https://www.instagram.com/hmoz.rz/" target={"_blank"}
                          className="w-6 mx-3"
                          whileHover={{y: -2}}
                          whileTap={{scale: 0.9}}>
                    <InstagramIcon/>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/hamza-rezgui/" target={"_blank"}
                          className="w-6 mx-3"
                          whileHover={{y: -2}}
                          whileTap={{scale: 0.9}}>
                    <LinkedInIcon/>
                </motion.a>
                <motion.a href="https://github.com/HamzaRezgui-dev" target={"_blank"}
                          className="w-6 ml-3"
                          whileHover={{y: -2}}
                          whileTap={{scale: 0.9}}>
                    <GithubIcon/>
                </motion.a>
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo/>
            </div>
        </header>
    );
};

export default NavBar;