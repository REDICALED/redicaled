import { motion } from "framer-motion"
import Marquee from "react-fast-marquee";
import {ReactComponent as GitSVG} from "@/assets/GitHub.svg";
import {ReactComponent as MailSVG} from "@/assets/mail.svg";
import {ReactComponent as HouseSVG} from "@/assets/house.svg";
import CVPdf from "/CV.pdf";
import {ReactComponent as HelpSVG} from "@/assets/Help_Wanted.svg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const About = (props: any) => {
    const themes = [
        { bg: "#ede8e4", text: "#000000" },
        { bg: "#040f49", text: "#E06E12" },
        { bg: "#272727", text: "#D3FF25" },
        { bg: "#226246", text: "#FDBCD2" },
        { bg: "#4F4D27", text: "#E8FF26" },
    ];

    const [buttonstyle, Setbuttonstyle] =  useState("hover:text-t0-bg hover:bg-t0-text");
    const [fillsvg, Setfillsvg] =  useState("fill-t0-text group-hover:fill-t0-bg");
    const [, Setcardstyle] =  useState("text-t0-bg bg-t0-text");
    const [, SetColorstyle] =  useState("hover:text-t0-bg from-t0-text to-t0-text");


    useEffect(() => {
        if (props.num === 0) {
            SetColorstyle("hover:text-t0-bg from-t0-text to-t0-text")
            Setbuttonstyle("hover:text-t0-bg hover:bg-t0-text")
            Setfillsvg("fill-t0-text group-hover:fill-t0-bg")
            Setcardstyle("text-t0-bg bg-t0-text")
        }
        else if (props.num === 1) {
            SetColorstyle("hover:text-t1-bg from-t1-text to-t1-text")
            Setbuttonstyle("hover:text-t1-bg hover:bg-t1-text")
            Setfillsvg("fill-t1-text group-hover:fill-t1-bg")
            Setcardstyle("text-t1-bg bg-t1-text")

        }
        else if (props.num === 2) {
            SetColorstyle("hover:text-t2-bg from-t2-text to-t2-text")
            Setbuttonstyle("hover:text-t2-bg hover:bg-t2-text")
            Setfillsvg("fill-t2-text group-hover:fill-t2-bg")
            Setcardstyle("text-t2-bg bg-t2-text")
        }
        else if (props.num === 3) {
            SetColorstyle("hover:text-t3-bg from-t3-text to-t3-text")
            Setbuttonstyle("hover:text-t3-bg hover:bg-t3-text")
            Setfillsvg("fill-t3-text group-hover:fill-t3-bg")
            Setcardstyle("text-t3-bg bg-t3-text")
            
        }
        else if (props.num === 4) {
            SetColorstyle("hover:text-t4-bg from-t4-text to-t4-text")
            Setbuttonstyle("hover:text-t4-bg hover:bg-t4-text")
            Setfillsvg("fill-t4-text group-hover:fill-t4-bg")
            Setcardstyle("text-t4-bg bg-t4-text")
        }
    }, [props.num]);
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }} 
        >
        <div style={{ borderColor: themes[props.num]?.text,  transitionDuration: '500ms' , transitionProperty: 'background-color, border-color'}}  id="about" className={` group pointer-events-none ${buttonstyle} text-center h-[33vh] border-b-[3px]`}>
            <Marquee pauseOnHover={true} speed={100} className=" h-full ">
                <div className=" lg:mx-10 mx-5 lg:text-9xl sm:text-5xl text-3xl row-span-1 h-full ">
                    BCKIM
                </div>

                <div style={{ borderColor: themes[props.num]?.text}}  className=" lg:mx-10 mx-5 lg:text-9xl sm:text-5xl text-3xl row-span-1 h-full ">
                    REDICALED
                </div>
                
                <button onClick={() => window.open('https://www.github.com/redicaled')} className={`group lg:w-[10vh] w-[10vh] ease-in-out lg:mx-10 mx-5 `}>
                    <div className="w-[10vh] mt-[0.15vh] transition-color duration-500 ">
                        <GitSVG className={` transition-colors duration-500 pointer-events-auto ${fillsvg}`}  />
                    </div>
                </button>
                
                <div className=" lg:mx-10 mx-5 lg:text-9xl sm:text-5xl text-3xl row-span-1 h-full ">
                    redicaled@gmail.com
                </div>

                <button className={`group lg:w-[10vh] w-[10vh] ease-in-out lg:mx-10 mx-5 `}>
                    <a target="_blank" href='mailto:redicaled@gmail.com'>
                    <div className="w-[10vh] mt-[0.15vh] transition-color duration-500 ">
                        <MailSVG className={` transition-colors duration-500 pointer-events-auto ${fillsvg}`}  />
                    </div>
                    </a>
                </button>

                
            </Marquee>
        </div>
        <div style={{ borderColor: themes[props.num]?.text, transitionDuration: '500ms' , transitionProperty: 'background-color, border-color'}}  className={` lg:py-0 py-10 lg:grid-cols-2 lg:grid lg:place-items-center group pointer-events-none ${buttonstyle} text-center lg:h-[33vh] border-b-[3px]`}>
                <div>
                <button className={`group lg:w-[10vh] w-[10vh] ease-in-out lg:mx-10 mx-5`}>
                <Link to="https://dev-blog-brown-delta.vercel.app/">
                    <div className="w-[10vh] mt-[0.15vh] transition-color duration-500 ">
                        <HouseSVG className={` transition-colors duration-500 pointer-events-auto ${fillsvg}`}  />
                    </div>
                    </Link>
                </button>
                <div className=" lg:mx-10 mx-5 lg:text-9xl sm:text-5xl text-3xl row-span-1 h-full ">
                    DevBlog
                </div>
                </div>
                <div>
                <button className={`group lg:w-[10vh] w-[10vh] ease-in-out lg:mx-10 mx-5 pt-10 lg:pt-0 `}>
                <Link to={CVPdf} target="_blank">
                    <div className="w-[15vh] mt-[0.15vh] transition-color duration-500 pr-10 ">
                        <HelpSVG className={` transition-colors duration-500 pointer-events-auto ${fillsvg}`}  />
                    </div>
                    </Link>
                </button>
                <div className=" lg:mx-10 mx-5 lg:text-9xl sm:text-5xl text-3xl row-span-1 h-full ">
                    CV
                </div>
                </div>
        </div>
    

        </motion.div>
    )
}