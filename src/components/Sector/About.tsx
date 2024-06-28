import { motion } from "framer-motion"

export const About = (props: any) => {
    const themes = [
        { bg: "#ede8e4", text: "#000000" },
        { bg: "#040f49", text: "#E06E12" },
        { bg: "#272727", text: "#D3FF25" },
        { bg: "#226246", text: "#FDBCD2" },
        { bg: "#4F4D27", text: "#E8FF26" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }} 
        >
        <div style={{ borderColor: themes[props.num]?.text}} id="about" className=" text-center grid grid-rows-2 gap-4 h-[33vh]">
            <div style={{ borderColor: themes[props.num]?.text}}  className="  grid place-items-center lg:text-9xl sm:text-5xl text-3xl row-span-1 h-full border-t-2">
                REDICALED
            </div>
            <div className="  grid place-items-center lg:text-9xl sm:text-5xl text-3xl row-span-1 h-full border-b-2">
                BCKIM
            </div>
        </div>
        {/* <div className="h-[62vh] lg:text-7xl sm:text-3xl mx-[1vw] ">
            
        </div> */}
        </motion.div>
    )
}