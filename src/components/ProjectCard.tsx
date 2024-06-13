import { motion } from "framer-motion";

export const ProjectCard = ({ title, date, img, description, stack,lastline }: { title: string, date: string, img:string, description: JSX.Element, stack: Array<string>, lastline: boolean }) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeInOut', duration: 0.5, y: { duration: 0.5 } }}
        >
        <div className=" mt-5 space-y-[2px]">
            <h1 className=" text-2xl font-semibold "> {title} </h1>
            <h1 className=" text-md pb-1 font-semibold "> {date} </h1>
            <div className=" lg:flex "> 
                <img src={img} className=" flex-1 my-5 lg:my-1 pr-2 max-h-[40vh] object-contain" />
                <div className="flex-1 ">
                    {description}
                    {stack.map((item, ) => (
                    <>
                        <button className=" mt-3 transition-all duration-400 hover:bg-red-600 hover:text-white  rounded-lg text-black bg-gray-300 m-1 p-1">{item}</button>
                    </>
                    ))}
                </div>
                
            </div>
            
        </div>
        {lastline && <hr className=" h-px bg-black border-0 mt-10 mx-[30vw]" />}
        </motion.div>
    );
};
