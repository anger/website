import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useTimePassed } from "../hooks/useTimePassed";
import ReactTooltip from 'react-tooltip';

const About: NextPage = () => {
    const birthday = 1098357071000;
    const age = useTimePassed(birthday);
    return (
        <div className="flex justify-center items-center min-h-[400px]">
            <div className="w-[750px] px-[40px] py-[20px]">
                <div className="flex items-center">
                    <div className="inline-block mr-4 min-w-[64px] h-[64px] relative rounded-[50%] overflow-hidden">
                        <Image src="/unix.gif" alt="Me!" layout="fill" />
                    </div>
                    <h1 className="text-white text-2xl font-firamono inline-block">Jax Dunfee</h1>
                </div>
                <br />
                <div className="inline-block">
                    <p>
                        Hello! My name is Jax(Anger), a&nbsp;
                        <p data-tip data-for="age" className="inline underline">{Math.floor(age)}</p>
                        <ReactTooltip id="age" effect="solid">{age.toString().substring(0, 12)}</ReactTooltip>
                        &nbsp;year-old aspiring Security Engineer. 
                        I am a freshman at George Mason University pursuing a major in Cyber Security Engineering. I currently spend my free time participating in CTF events, studying for class, reading fiction (I love Fantasy & Sci-Fi) and skateboarding.
                    </p>
                    <br></br>
                </div>
                <p>
                    <h2>Certifications</h2>
                    <ul>
                        <li>CompTIA Security+ SYO-601</li>
                    </ul>
                    <h2>Achievements</h2>
                    <ul>
                        <li>Top 1% TryHackMe Global</li>
                        <li>Top 5% HackTheBox Global</li>
                    </ul>
                    <h2>Communities</h2>
                    <ul>
                        <li><b>AskNetsec</b> - 2021 - Owner and Head-Moderator. Organize and administer events with 170,000+ members. Lead a team of six security professionals in the moderation and organization of events.</li>
                        <li><b>r/Gaming</b> - 2021 - Moderate and contribute to maintaining a community of 35 million users.</li>
                    </ul>


                    </p>
           
            </div>
        </div>
    );
};

export default About;