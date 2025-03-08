import {motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variants";
import {PiHexagonThin} from "react-icons/pi";
import img_hakim from "/images/photo_hakim.jpeg";

const HeroPic = () => {
    return (
        <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0}}
            className=" h-full flex items-center justify-center "
        >
            <img
                src={img_hakim}
                alt="Hakim Zaabi"
                className="max-h-[200px] w-auto rounded-full aspect-square object-cover"
            />

            <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
                <PiHexagonThin
                    className=" md:h-[90%] sm:h-[120%] min-h-[400px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] "/>
            </div>
        </motion.div>
    );
};

export default HeroPic;