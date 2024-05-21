import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { STACKS } from "@/constants/icons";
import { ReactNode } from "react";

const Skills = () => {
    const skillsArray = Object.entries(STACKS);

    return (
        <div className="mt-10 space-y-10">
            <div className="space-y-2">
                <SectionHeading
                    title="Skills"
                    // icon={<SkillsIcon size={22} className="mr-1" />}
                />
                <SectionSubHeading>
                    <p>My professional skills.</p>
                </SectionSubHeading>
            </div>
            <div className="flex flex-wrap gap-5">
                {skillsArray.map(([title, icon], index) => (
                    <Tag key={index} icon={icon} title={title} />
                ))}
            </div>
        </div>
    );
};

const Tag = ({ icon, title }: { icon: ReactNode; title: string }) => (
    <div className="flex items-center gap-2 mr-3 rounded-full py-2 px-5 w-max shadow-sm border border-neutral-300 dark:border-neutral-700 hover:animate-pulse">
        {icon}
        <span>{title}</span>
    </div>
);

export default Skills;
