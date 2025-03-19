import "./Image_Gallery.css";
import { useState } from "react";
import { Data } from "./Image_Data";
import { motion } from "framer-motion"

const Image_Gallery = () => {
    const [data] = useState(Data)
    return (
        <div className="galleryContainer">
            <div className="ImgGallery">
                {data.map(({ id, src, susu }) => {
                    return (
                        <motion.div key={id}
                            initial={{ z: "-2000px", }}
                            animate={{ z: "1500px", }}
                            transition={{
                                delay: id * 1.25,
                                duration: 30,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="test"
                        >
                            <div className={`stick4 ${susu}`}>
                                <img src={src} loading="lazy" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </div>
    )
}

export default Image_Gallery;
