import { useEffect, useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import {ReactComponent as PirateSVG} from "@/assets/pirate.svg"

export const Nav = (props:any) => {
    const [colorstyle, SetColorstyle] =  useState("hover:text-t0-bg from-t0-text to-t0-text");
    const [buttonstyle, Setbuttonstyle] =  useState("hover:text-t0-bg hover:bg-t0-text");
    const [fillsvg, Setfillsvg] =  useState("fill-t0-text group-hover:fill-t0-bg");
    const themes = [
        { bg: "#ede8e4", text: "#000000" },
        { bg: "#040f49", text: "#E06E12" },
        { bg: "#272727", text: "#D3FF25" },
        { bg: "#226246", text: "#FDBCD2" },
        { bg: "#4F4D27", text: "#E8FF26" },
    ];
    useEffect(() => {
        if (props.num === 0) {
            SetColorstyle("hover:text-t0-bg from-t0-text to-t0-text")
            Setbuttonstyle("hover:text-t0-bg hover:bg-t0-text")
            Setfillsvg("fill-t0-text group-hover:fill-t0-bg")
        }
        else if (props.num === 1) {
            SetColorstyle("hover:text-t1-bg from-t1-text to-t1-text")
            Setbuttonstyle("hover:text-t1-bg hover:bg-t1-text")
            Setfillsvg("fill-t1-text group-hover:fill-t1-bg")
        }
        else if (props.num === 2) {
            SetColorstyle("hover:text-t2-bg from-t2-text to-t2-text")
            Setbuttonstyle("hover:text-t2-bg hover:bg-t2-text")
            Setfillsvg("fill-t2-text group-hover:fill-t2-bg")
        }
        else if (props.num === 3) {
            SetColorstyle("hover:text-t3-bg from-t3-text to-t3-text")
            Setbuttonstyle("hover:text-t3-bg hover:bg-t3-text")
            Setfillsvg("fill-t3-text group-hover:fill-t3-bg")
        }
        else if (props.num === 4) {
            SetColorstyle("hover:text-t4-bg from-t4-text to-t4-text")
            Setbuttonstyle("hover:text-t4-bg hover:bg-t4-text")
            Setfillsvg("fill-t4-text group-hover:fill-t4-bg")
        }
    }, [props.num]);

    return (
        <nav style={{ borderColor: themes[props.num]?.text, backgroundColor: themes[props.num]?.bg}} className=" border-b-2 font-extrabold fixed w-full grid grid-cols-5 text-center lg:h-[8vh] h-[8vh] lg:text-3xl text-xs sm:text-sm z-50 ">
            <AnchorLink className=" group ease-in-out" href="#about">
                <div className={` h-full py-[2.5vh] hover:pr-[10vw] hover:pl-[1vw] bg-left-bottom bg-gradient-to-r ${colorstyle} bg-[length:0%] bg-no-repeat group-hover:bg-[length:100%] transition-all duration-500 ease-out`}>
                    About
                </div>
            </AnchorLink>
            <AnchorLink className="group ease-in-out" href="#projects">
            <div className={`h-full  py-[2.5vh] hover:pr-[10vw] hover:pl-[1vw] bg-left-bottom bg-gradient-to-r ${colorstyle} bg-[length:0%] bg-no-repeat group-hover:bg-[length:100%] transition-all duration-500 ease-out`}>
            Projects
                </div>
            </AnchorLink>

            <div>         
                <button onClick={()=>{props.SetThemenum((props.num+1)%5)}} className={` group`}> 
                    <div className={`${fillsvg} lg:w-[8vh] sm:w-[8vh] w-[6vh] mt-[0.15vh] ${buttonstyle} transition-color duration-500 `}>
                    <PirateSVG  />
                    </div>
                </button>
            </div>

            <AnchorLink className="group ease-in-out" href="#archive">
            <div className={`h-full  py-[2.5vh] hover:pr-[10vw] hover:pl-[1vw] bg-left-bottom bg-gradient-to-r ${colorstyle} bg-[length:0%] bg-no-repeat group-hover:bg-[length:100%] transition-all duration-500 ease-out`}>
            Archive
                </div>
            </AnchorLink>

            <AnchorLink className="group ease-in-out" href="#BcKim">
            <div className={`h-full  py-[2.5vh] hover:pr-[10vw] hover:pl-[1vw] bg-left-bottom bg-gradient-to-r ${colorstyle} bg-[length:0%] bg-no-repeat group-hover:bg-[length:100%] transition-all duration-500 ease-out`}>
            BcKim
                </div>
            </AnchorLink>
    </nav>
    )
}