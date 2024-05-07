import AnchorLink from "react-anchor-link-smooth-scroll"

export const Nav = () => {
    return (
        <nav className=" h-[6vh] fixed w-full flex flex-wrap items-center justify-between mx-auto p-4 xl:text-3xl sm:text-md bg-black">
            <AnchorLink className=" group text-white transition-all duration-300 ease-in-out" href="#about">
                <div className=" hover:pr-[10vw] hover:pl-[1vw]   bg-left-bottom bg-gradient-to-r from-red-600 to-red-600 bg-[length:0%] bg-no-repeat group-hover:bg-[length:100%] transition-all duration-300 ease-out">
                    About
                </div>
            </AnchorLink>
            <AnchorLink className="group text-white transition-all duration-300 ease-in-out" href="#projects">
                <div className=" hover:pr-[10vw] hover:pl-[1vw]  bg-left-bottom bg-gradient-to-r from-red-600 to-red-600 bg-[length:0%] bg-no-repeat group-hover:bg-[length:100%] transition-all duration-300 ease-out">
                    Projects
                </div>
            </AnchorLink>
            <AnchorLink className="group text-white transition-all duration-300 ease-in-out" href="#archive">
                <div className=" hover:pr-[10vw] hover:pl-[1vw]  bg-left-bottom bg-gradient-to-r from-red-600 to-red-600 bg-[length:0%] bg-no-repeat group-hover:bg-[length:100%] transition-all duration-300 ease-out">
                    Archive
                </div>
            </AnchorLink>

            <AnchorLink className="group text-white transition-all duration-300 ease-in-out" href="#BcKim">
                <div className=" hover:pr-[10vw] hover:pl-[1vw]  bg-left-bottom bg-gradient-to-r from-red-600 to-red-600 bg-[length:0%] bg-no-repeat group-hover:bg-[length:100%] transition-all duration-300 ease-out">
                    BcKim
                </div>
            </AnchorLink>
    </nav>
    )
}