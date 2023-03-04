import type { NextPage } from "next";
import Image from "next/image";
import { SocialButton } from "../components/Buttons/SocialButton";
import { Lanyard } from "../components/Lanyard";
import { LanyardData } from "../hooks/LanyardData";
import { Project } from "../components/Project";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faSpotify, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home: NextPage = () => {
    const lanyardData = LanyardData();
    return (
        <>
            {lanyardData?.activities[0] ? (
                <div className="hidden lg:block">
                    <Lanyard />
                </div>
            ) : null}
            <div id="intro" className="min-h-[650px] pb-[68px] relative flex items-center justify-center flex-col">
                <div id="title" className="px-[40px] max-w-[750px] h-[50%]">
                    <div className="flex mb-4 items-center justify-between">
                        <span>
                            <h1 className="text-white text-[2em] font-firamono mb-2">Jax Dunfee</h1>
                            <p id="main-bio" className="font-firamono text-[#5e5e5e] text-[1.4em] hidden sm:block">
                               Aspiring Security Engineer
                            </p>
                            <p id="alt-bio" className="font-firamono text-[#5e5e5e] text-[1.4em] block sm:hidden">
                                Developer
                            </p>
                        </span>
                        <div className="w-[120.967px] h-[80px] relative hidden md:block">
                            <Image alt="Signature" src="/signature.png" layout="fill"></Image>
                        </div>
                    </div>
                    <p className="mb-0">Full-Time student at George Mason University studying Cyber Security Engineering.</p>
                    <br />
                    <div>
                        <SocialButton link="mailto:jaxdunfee@protonmail.com" name="Email" icon={faEnvelope} />
                        <SocialButton link="https://github.com/anger" name="anger" icon={faGithub} />
                        <SocialButton link="https://www.linkedin.com/in/jaxdunfee/" name="Jax Dunfee" icon={faLinkedin} />
                        <SocialButton link="https://twitter.com/0xAnger" name="0xAnger" icon={faTwitter} />
                    </div>
                    <br />
                    <p>
                        <a href="mailto:jaxdunfee@protonmail.com">Ask me </a>
                        for my resume.
                    </p>
                </div>
                {lanyardData?.activities[0] ? (
                    <div>
                        <div className="relative top-[70px] lg:static lg:top-0 lg:hidden">
                            <div className="flex justify-center items-center">
                                <div className="px-[20px]">
                                    <Lanyard />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="bg-black flex justify-center items-center">
                <div id="projects" className="max-w-[1000px] py-[40px] px-[50px] text-white">
                    <h2 className="text-[1.5em] font-firamono">Projects</h2>
                    <br />
                    <div className="mx-[-20px]">
                        <div className="block amstlg:grid grid-cols-2 gap-[30px]">
                            <Project
                                name="Puppy Crush"
                                img_src="/projects/puppy.jpg"
                                type="Web Game"
                                time_period="Dec 2022 - Jan 2023"
                                description="A Candy Crush clone made for my Mom as a christmas gift. Created with Javascript, HTML, and CSS. Graphics are bad for comedic purposes."
                                button_text="Play PuppyCrush"
                                button_link="https://anger.github.io/puppycrush/"
                                repo_link="https://github.com/anger/puppycrush"
                            />
                            <Project
                                name="Targeted Password Generator"
                                img_src="/projects/passwd.png"
                                type="Python Script"
                                time_period="Nov 2021"
                                description="A Python script that creates a targeted password wordlist that it forms with patterns and known information inputted by a user."
                                button_text="View on GitHub"
                                button_link="https://github.com/anger/targeted-password-generator"
                                repo_link="https://github.com/anger/targeted-password-generator"
                            />
                        </div>
                        <div className="block amstlg:grid grid-cols-2 gap-[30px]">
                            <Project
                                name="Website"
                                img_src="https://avatars.githubusercontent.com/u/48845671"
                                type="Web App"
                                time_period="Jan 2023 - Present"
                                description="The webpage you’re currently on (: - It was made in Next.js in TypeScript."
                                button_text="Website"
                                button_link="https://jaxd.dev"
                                repo_link="https://github.com/anger/website"
                            />
                            <Project
                                name="GitHub Dork Search"
                                img_src="/projects/gds.png"
                                type="Dork Searcher"
                                time_period="Feb 2023"
                                description="A tool that uses an inputted word list to generate GitHub dork links for a specified target."
                                button_text="Website"
                                button_link="https://gds.jaxd.dev/"
                                repo_link="https://github.com/anger/gds"
                            />
                        </div>
                        <div className="block amstlg:grid grid-cols-2 gap-[30px]">
                            <Project
                                name="Angel Fetch"
                                img_src="/projects/angelfetch.png"
                                type="Shell Script"
                                time_period="Feb 2022"
                                description="An Angel themed fetch script written in BASH."
                                button_text="Download"
                                button_link="https://github.com/anger/angelfetch"
                                repo_link="https://github.com/anger/angelfetch"
                            />
                            <Project
                                name="AskNetSec"
                                img_src="/projects/asknetsec.png"
                                type="Forum"
                                time_period="Aug 2020 - Current"
                                description="Owner and Head-Moderator. I organize and administer events with 174,000+ members. I lead a team of six security professionals in the moderation and organization of events."
                                button_text="Website"
                                button_link="https://www.reddit.com/r/AskNetsec/"
                            />
                        </div>
                        <span className="block text-md text-center text-norm-gray">
                            View my other projects on my
                            <a href="https://github.com/anger"> GitHub </a>
                            profile.
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
