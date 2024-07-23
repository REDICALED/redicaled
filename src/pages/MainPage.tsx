import { Nav } from "@/components/Nav";
import { About } from "@/components/Sector/About";
import { Projects } from "@/components/Sector/Projects";
import { Archive } from "@/components/Sector/Archive";
import { BcKim } from "@/components/Sector/BcKim";
import { useState } from "react";

const MainPage = () => {
    const [themenum,SetThemenum] = useState(0);
    const themes = [
        { bg: "#ede8e4", text: "#000000" },
        { bg: "#040f49", text: "#E06E12" },
        { bg: "#272727", text: "#D3FF25" },
        { bg: "#226246", text: "#FDBCD2" },
        { bg: "#4F4D27", text: "#E8FF26" },
    ];
    return (
        <div style={{ borderColor: themes[themenum]?.text, backgroundColor: themes[themenum]?.bg,  color: themes[themenum]?.text }} className=" overflow-x-hidden  transition-all duration-500">
        <Nav num={themenum} SetThemenum={SetThemenum} />

        <div className=" pt-[8vh] ">
        <About num={themenum} />
        <Projects num={themenum} />

        <Archive num={themenum} />

        <BcKim />

        </div>
        
        </div>
    );
}

export default MainPage;