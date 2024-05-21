import Breakline from "@/components/elements/Breakline";

import Introduction from "./introduction";
import Services from "./services";
import Skills from "@/modules/about/islands/skills";

const Home = () => {
    return (
        <>
            <Introduction />
            <Breakline className="mt-8 mb-7" />
            <Skills />
            <Breakline className="mt-8 mb-7" />
            <Services />
        </>
    );
};

export default Home;
