import { BsFillBootstrapFill, BsRobot } from "react-icons/bs";
import { RiRemixRunFill } from "react-icons/ri";
import {
    SiAdonisjs,
    SiCloudflare,
    SiCloudflarepages,
    SiCss3,
    SiExpress,
    SiGraphql,
    SiJavascript,
    SiJquery,
    SiLaravel,
    SiMongodb,
    SiMui,
    SiMysql,
    SiNestjs,
    SiNextdotjs,
    SiNginx,
    SiNodedotjs,
    SiOpenai,
    SiPhp,
    SiPostgresql,
    SiReact,
    SiSocketdotio,
    SiStyledcomponents,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiWebpack,
    SiQwik,
    SiPreact,
    SiSolid,
    SiDjango,
    SiPython,
    SiGo,
    SiRuby
} from "react-icons/si";

export type stacksProps = {
    [key: string]: JSX.Element;
};

const iconSize: number = 24;

export const STACKS: stacksProps = {
    JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
    TypeScript: <SiTypescript size={iconSize} className="text-blue-500" />,
    Python: <SiPython size={iconSize} className="text-gray-400" />,
    Ruby:<SiRuby size={iconSize} className="text-red-600" />,
    Go: <SiGo size={iconSize} className="text-blue-400" />,
    "React.js": <SiReact size={iconSize} className="text-sky-500" />,
    "Preact.js": <SiPreact size={iconSize} className="text-purple-500" />,
    Remix: <RiRemixRunFill size={iconSize} />,
    "Next.js": <SiNextdotjs size={iconSize} />,
    Qwibluek: <SiQwik size={iconSize} className="text-blue-500" />,
    Solid: <SiSolid size={iconSize} className="text-blue-500" />,
    Webpack: <SiWebpack size={iconSize} className="text-blue-500" />,
    Express: <SiExpress size={iconSize} />,
    NestJS: <SiNestjs size={iconSize} className="text-red-600" />,
    Django: <SiDjango size={iconSize} className="text-green-800"  />,

    TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
    Bootstrap: (
        <BsFillBootstrapFill size={iconSize} className="text-purple-600" />
    ),
    GraphQL: <SiGraphql size={iconSize} className="text-pink-600" />,
    "Material UI": <SiMui size={iconSize} className="text-sky-400" />,
    Supabase: <SiSupabase size={iconSize} className="text-emerald-400" />,
    MySQL: <SiMysql size={iconSize} className="text-blue-500" />,
    PostgreSQL: <SiPostgresql size={iconSize} className="text-blue-500" />,
    MongoDB: <SiMongodb size={iconSize} className="text-green-500" />,
    "Artificial Intelligence": (
        <BsRobot size={iconSize} className="text-rose-500" />
    ),
    OpenAI: <SiOpenai size={iconSize} className="text-green-500" />,
    "Node.js": <SiNodedotjs size={iconSize} className="text-green-600" />,
    Cloudflare: <SiCloudflare size={iconSize} className="text-orange-500" />,
    "Cloudflare Pages": (
        <SiCloudflarepages size={iconSize} className="text-orange-500" />
    ),
    "Styled Components": (
        <SiStyledcomponents size={iconSize} className="text-pink-500" />
    ),
    Nginx: <SiNginx size={iconSize} className="text-green-500" />,
    CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
    Socket: <SiSocketdotio size={iconSize} />,
};
