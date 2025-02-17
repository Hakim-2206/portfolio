import {Link} from "react-scroll";

const AboutMeText = () => {
    return (
        <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
            <h2 className="text-6xl text-cyan mb-10">About Me</h2>
            <p className="text-lg">
                I’m Hakim, a Junior Web Developer based
                in France ,
                passionate about coding and currently
                pursuing a
                Bac+2 in <span
                className="text-orange hover:text-cyan cursor-crosshair">Full Stack </span>Development. I specialize
                in <span
                className="text-cyan hover:text-yellow-400 cursor-crosshair">React </span>
                and <span className="text-yellow-400 hover:text-cyan cursor-crosshair">Node.js</span> and love tackling
                challenges with
                creative solutions. Outside of coding, I enjoy reading📚, exploring all genres of Music🎶,
                Movies/Theater🎭, Team
                Sports⚽, Sim racing🚗 and more... I’m ready to bring my Skills and Enthusiasm, and diverse interests to
                the
                World
                of
                Web Development! 🚀
            </p>
            <button
                className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
                <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-120}
                    to="projects"
                    className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
                >
                    My Projects
                </Link>
            </button>
        </div>
    );
};

export default AboutMeText;