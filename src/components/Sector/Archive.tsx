import { motion } from "framer-motion"
import logo from "@/assets/42_logo.png";
import front from "@/assets/front.png";


export const Archive = () => {
    return (
        
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeInOut', duration: 0.5, y: { duration: 0.5 } }} 
        >
        <h1 id="archive" className=" my-10 text-center text-4xl">Archive</h1>
        <hr className=" h-0.5 mx-[10vw] bg-black" />
        <div className="mx-[10vw] transform-none  ">
            <div className="py-3 ">
                    <a target="_blank" className=" hover:bg-slate-200  justify-between items-center border border-black border-spacing-10 p-4 mt-10 mb-3 flex font-semibold text-2xl " href="https://crystalline-dinner-293.notion.site/bb095a18b4a44d7d889711f78e6d1f73?v=4704f2eddda94a27aca2d932b32097b1&pvs=4">
                        <div> 42 과정 학습 노션 </div>
                        <img src={logo} className=" ml-[10vw] h-[6vh]"></img>
                    </a>
                    <a target="_blank" className=" hover:bg-slate-200  justify-between items-center border border-black border-spacing-10 p-4 mt-10 mb-3 flex font-semibold text-2xl " href="https://crystalline-dinner-293.notion.site/2ee2c89a642b495eafac875dd2dd85ef?v=9859d4c44e724bc583dc0dd89ebe118d&pvs=4">
                        <div>프론트엔드 학습 노션 </div>
                        <img src={front} className=" ml-[10vw] h-[5vh]"></img>
                    </a>

            </div>
        </div>
        </motion.div>
    )
}
