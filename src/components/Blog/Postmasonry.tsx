
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const Postmasonry = () => {

    return (
        <div  className="">
        <ResponsiveMasonry
                  columnsCountBreakPoints={{350: 2 , 900: 3}}
              >
                  <Masonry>
                      a
                  </Masonry>
              </ResponsiveMasonry>

        </div>
        
    );
}

export default Postmasonry;