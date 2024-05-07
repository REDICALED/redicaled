import { motion } from "framer-motion"
import Bckim from "@/assets/Bckim.jpg";

export const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }} 
        >
        <h1 id="about" className=" my-5 text-center text-4xl">About</h1>
        <hr className=" h-0.5 mx-[10vw] bg-black" />
        <div className="mx-[10vw] transform-none  ">
            <div className="py-3">
                <div className="flex">
                    <img src={Bckim} className=" h-[30vh] object-cover" />
                </div>  
                <div className=" my-3">
                <h1 className=" text-2xl font-semibold">김병찬 Kim ByeongChan</h1>
                    <p className=" mb-2 text-md"> 1999.01.06</p>
                    <p className="text-base ">평생 재밌게 개발하며 살고 싶습니다.</p>
                    <p className=" text-base ">새롭고 재밌는 일이면 뭐든 해보고 싶습니다.</p>
                    <p className="text-base">오버헤드와 트레이드오프가 가장 중요하다고 생각합니다.</p>
                </div>
                <div className=" my-3">
                </div>
            </div>
        </div>
        </motion.div>
    )
}