import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import {motion} from "framer-motion";
import {fadeIn} from "../../framerMotion/variants";

const projects = [
    {
        name: "Food Delivery",
        year: "MERN Stack",
        align: "right",
        image: "../../public/images/fooddel.png",
        link: "https://food-del-frontend-w7pl.onrender.com/",
    },
    {
        name: "Netflix Clone",
        year: "React | Firebase",
        align: "left",
        image: "../../public/images/41.png",
        link: "https://netflix-clone-hh1ugkilh-hakims-projects-43f355a6.vercel.app/",
    },
    {
        name: "Real Estate",
        year: "React | Tailwindcss",
        align: "right",
        image: "../../public/images/website-img-3.jpg",
        link: "https://hakim-2206.github.io/real-estate/",
    },
    {
        name: "Spotify Clone",
        year: "React | Tailwindcss",
        align: "left",
        image: "../../public/images/spotify.png",
        link: "https://hakim-2206.github.io/spotify-clone/",
    },
];

const ProjectsMain = () => {
    return (
        <div id="projects" className="max-w-[1200px] mx-auto px-4">
            <motion.div
                variants={fadeIn("top", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.7}}
            >
                <ProjectsText/>
            </motion.div>
            <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
                {projects.map((project, index) => {
                    return (
                        <SingleProject
                            key={index}
                            name={project.name}
                            year={project.year}
                            align={project.align}
                            image={project.image}
                            link={project.link}

                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectsMain;