import { Nav } from "@/components/Nav";
import { About } from "@/components/Sector/About";
import { Projects } from "@/components/Sector/Projects";
import { Archive } from "@/components/Sector/Archive";
import { BcKim } from "@/components/Sector/BcKim";

const MainPage = () => {
    return (
        <div >
        
        <Nav />

        <div className=" pt-[6vh] ">
        
        <About />
  
        <Projects />

        <Archive />

        <BcKim />

        </div>
        
        </div>
    );
}

export default MainPage;