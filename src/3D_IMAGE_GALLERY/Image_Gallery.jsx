import "./Image_Gallery.css";
import { useState } from "react";
import { Data } from "./Image_Data";
import { motion } from "framer-motion";

const Image_Gallery = () => {
    const [data] = useState(Data);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const moveFactor = 400; // Parallax intensity
        const offsetX = (mouseX / rect.width - 0.5) * moveFactor;
        const offsetY = (mouseY / rect.height - 0.5) * moveFactor;

        const elements = e.currentTarget.querySelectorAll(".animatable");
        elements.forEach((el, index) => {
            const depth = index % 3 === 0 ? 2 : 1; // You can fine-tune layers
            el.style.transform = `translateX(${offsetX * depth}px) translateY(${offsetY * depth}px)`;
        });
    };

    const handleMouseLeave = (e) => {
        const elements = e.currentTarget.querySelectorAll(".animatable");
        elements.forEach((el) => {
            el.style.transform = "translateX(0px) translateY(0px)";
        });
    };

    return (
        <div className="galleryContainer">
            <div
                className="ImgGallery"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {data.map(({ id, src, susu }) => (
                    <motion.div
                        key={id}
                        className="test"
                        initial={{ z: -1000, scale: 0 }}
                        animate={{ z: 300, scale: 1 }}
                        transition={{
                            delay: id * 0.2,
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    >
                        <div className={`stick4 ${susu} animatable`}>
                            <img src={src} loading="lazy" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Image_Gallery;
