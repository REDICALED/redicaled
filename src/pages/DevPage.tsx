import Krustykrab from "@/components/Blog/Krustykrab";
import Help_Wanted from "/Help_Wanted.webp";

const DevPage = () => {
    
    return (
        <div className=" grid place-items-center text-center  " >
            <div className=" w-[33vw] h-[33vh] ">
            <Krustykrab/>
            </div>
            공 사 중
            <div className=" w-[33vw] h-[33vh] ">
                <img src={Help_Wanted} alt="Help Wanted" />
            </div>
        </div>
    );
}

export default DevPage;