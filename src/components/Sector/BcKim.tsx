import { motion } from "framer-motion"

export const BcKim = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeInOut', duration: 0.5, y: { duration: 0.5 } }}
        >
        <h1 id="BcKim" className=" my-5 text-center text-4xl">BcKim</h1>
        <hr className=" h-0.5 mx-[10vw] bg-black" />
        <div className="mx-[10vw] transform-none  ">
            <div className="py-3">
            <p className=" font-semibold text-2xl mb-2"> 학력 </p>
            <p> 강원대학교 컴퓨터공학과 졸업 (2017. 03 ~ 2024. 02) </p>

            <p className=" mt-5 font-semibold text-2xl mb-2"> 교육 </p>
            <p> 42서울 공통과정 수료 (2022. 03 ~ 2024. 02) </p>
            <p className=" mt-5 mb-10">
                
            <div className="flex  ">
                <a target="_blank" className=" pr-5 group font-semibold text-2xl" href='mailto:redicaled@gmail.com'>
                    Email
                    <span className="text-base font-normal"> redicaled@gmail.com </span>
                    <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </a>
                <a target="_blank" className=" pr-5 group font-semibold text-2xl" href='https://github.com/redicaled'>
                    Github
                    <span className=" text-base font-normal"> redicaled </span>
                    <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </a>
            </div>

            </p>


            </div>
        </div>
        </motion.div>
    )
}