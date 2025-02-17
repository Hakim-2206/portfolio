const ProjectsText = () => {
    return (
        <div className="flex flex-col items-center mt-[100px]">
            <h2 className="text-6xl text-cyan mb-10">Projects</h2>
            <p className="text-xl text-center">
                I have worked on a variety of web development <span
                className="text-cyan hover:text-orange transition-all duration-500"><a
                href="https://github.com/Hakim-2206/"
                target="_blank"
                rel="noopener noreferrer">Projects</a></span>.
                Responsive Websites, Front-End and Full-Stack Web Applications.
            </p>
        </div>
    );
};

export default ProjectsText;