import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
    return (
        <section className="bg-cover bg-no-repeat">
            <div className="space-y-3">
                <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
                    <h1>Hi, I&apos;m Zehan</h1>{" "}
                    <div className="ml-1 animate-waving-hand">👋</div>
                </div>
                <div className="space-y-4">
                    <ul className="flex flex-col lg:flex-row align-center items-center gap-1 lg:gap-3 ml-5 text-neutral-700 dark:text-neutral-400">
                        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                        <li>
                            <span>Working remotely</span>
                        </li>
                    </ul>
                </div>
            </div>

            <p className="leading-[1.8] md:leading-loose mt-6 text-neutral-800 dark:text-neutral-300">
            Hello, I have been working as a Software Engineer I have 3 years of professional
                experience.
            </p>
        </section>
    );
};

export default Introduction;
