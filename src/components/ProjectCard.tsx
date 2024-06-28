import { motion } from "framer-motion";
import MotionCard from "@/components/hr/MotionCard.tsx";
import { useEffect, useState } from "react";
export const ProjectCard = ({ title, date, img, description, stack, num }: { title: string, date: string, img:string, description: JSX.Element, stack: Array<string>, num: number}) => {
    
    const [, SetColorstyle] =  useState("hover:text-t0-bg from-t0-text to-t0-text");
    const [buttonstyle, Setbuttonstyle] =  useState("hover:text-t0-bg hover:bg-t0-text");
    const [fillsvg, Setfillsvg] =  useState("fill-t0-text group-hover:fill-t0-bg");
    const [cardstyle, Setcardstyle] =  useState("text-t0-text bg-t0-bg");
    const [descard, SetDesCard] =  useState(false);

    useEffect(() => {
        if (num === 0) {
            SetColorstyle("hover:text-t0-bg from-t0-text to-t0-text")
            Setbuttonstyle("hover:text-t0-bg hover:bg-t0-text")
            Setfillsvg("fill-t0-text group-hover:fill-t0-bg")
            Setcardstyle("text-t0-text bg-t0-bg")
        }
        else if (num === 1) {
            SetColorstyle("hover:text-t1-bg from-t1-text to-t1-text")
            Setbuttonstyle("hover:text-t1-bg hover:bg-t1-text")
            Setfillsvg("fill-t1-text group-hover:fill-t1-bg")
            Setcardstyle("text-t1-text bg-t1-bg")

        }
        else if (num === 2) {
            SetColorstyle("hover:text-t2-bg from-t2-text to-t2-text")
            Setbuttonstyle("hover:text-t2-bg hover:bg-t2-text")
            Setfillsvg("fill-t2-text group-hover:fill-t2-bg")
            Setcardstyle("text-t2-text bg-t2-bg")
        }
        else if (num === 3) {
            SetColorstyle("hover:text-t3-bg from-t3-text to-t3-text")
            Setbuttonstyle("hover:text-t3-bg hover:bg-t3-text")
            Setfillsvg("fill-t3-text group-hover:fill-t3-bg")
            Setcardstyle("text-t3-text bg-t3-bg")
            
        }
        else if (num === 4) {
            SetColorstyle("hover:text-t4-bg from-t4-text to-t4-text")
            Setbuttonstyle("hover:text-t4-bg hover:bg-t4-text")
            Setfillsvg("fill-t4-text group-hover:fill-t4-bg")
            Setcardstyle("text-t4-text bg-t4-bg")
        }
    }, [num]);

    return (
        <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeInOut', duration: 0.5, y: { duration: 0.5 } }}
        >
        <div  className=" border-b-2 space-y-[2px] h-full">
            <MotionCard num={(-1)**1} rowcol={0}>
                <h1 className=" text-2xl font-extrabold "> {title} </h1>
            </MotionCard>            
            <MotionCard num={(-1)**(2)} rowcol={0}>
            <hr className=" mx-auto w-1/2 h-1 my-2 border-1"/>
            </MotionCard>
            
            <MotionCard num={(-1)**(2)} rowcol={1}>
            <h1 className=" text-2xl text-md pb-1 font-semibold "> {date} </h1>
            </MotionCard>

            <div className="grid place-items-center lg:flex "> 
                <img src={img} className=" px-2 lg:h-[40vh] md:h-[30vh] sm:h-[20vh] object-contain"/>
                <div className="flex-1 text-center items-center w-full pl-[10vw]  lg:h-[40vh] md:h-[30vh] sm:h-[20vh] ">
                    {
                        descard && <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type:'spring', stiffness: 200 , duration: 0.5  }}
                        className={` lg:h-[36vh] md:h-[27vh] h-[18vh] ${cardstyle} box-border border-2 p-2 m-1 overflow-y-auto -mr-[20vw] pr-[20vw] `}
                        >
                        <div className=" grid place-items-center">
                        {description}
                        <div className=" lg:text-sm text-xs ">
                        {stack.map((item, ) => (
                        <>
                            <button className={` hover:transition-colors hover:duration-200 font-extrabold mt-3 bg-none border-2 ${buttonstyle} rounded-lg m-1 p-1`}>{item}</button>
                        </>
                        ))}
                        </div>
                        </div>
                        </motion.div>
                    }
                {!descard && <button onClick={()=>{ SetDesCard(!descard)}} className= {`${buttonstyle} ${fillsvg} hover:transition-colors hover:duration-200 group border-2 mx-auto lg:mt-10 lg:w-[20vw] w-[25vw] md:mt-1 sm:mt-10 flex justify-end`}>
                    <svg className={` ${fillsvg} hover:transition-colors hover:duration-200 transition-colors duration-200 lg:w-20 w-10 mr-2 `} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256">
                        <g><g><g><path d="M240.9,61.6c-2.5,1-2.4-1-2.6,44.2c-0.2,40.2-0.3,42.2-1.1,43.5c-1.4,2.3-3.2,4.1-5.3,5.2l-1.9,1l-103.2,0.1c-56.8,0-103.3,0-103.3-0.2c0-0.2,5.7-6.1,12.7-13.1c11.4-11.4,12.7-12.9,12.7-14.3c0-1.1-0.4-1.9-1.3-2.7c-2.7-2.3-2.5-2.5-20.7,15.7C11.1,156.8,10,158,10,159.6c0,1.6,1,2.7,16.7,18.4c15.5,15.5,16.8,16.7,18.3,16.7c3,0,4.6-2.4,3.4-5.1c-0.4-0.9-6.2-7-12.9-13.7l-12.2-12.2l103.7-0.2l103.8-0.2l2.6-1c5.5-2.2,10-7,11.7-12.5c0.8-2.4,0.8-6.1,0.8-44.4c0-40.4,0-41.8-0.9-42.6C244,61.5,242.2,61.1,240.9,61.6z"/></g></g></g>
                    </svg>
                </button>}
                </div>
            </div>
        </div>
        
        </motion.div>
    );
};
