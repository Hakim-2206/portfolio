import SingleContactSocial from "./SingleContactSocial";
import {FaLinkedinIn} from "react-icons/fa";
import {FiGithub} from "react-icons/fi";
import {FaFileDownload} from "react-icons/fa";

const ContactSocial = () => {
    return (
        <div className="flex gap-4">
            <SingleContactSocial link="https://www.linkedin.com/in/hakimzaabi/" Icon={FaLinkedinIn} target="_blank"/>
            <SingleContactSocial link="https://github.com/Hakim-2206" target="_blank" Icon={FiGithub}/>
            <SingleContactSocial link="/images/2025_CV_HAKIM_ZAABI.pdf" Icon={FaFileDownload}
                                 download="2025_CV_HAKIM_ZAABI.pdf"/>
        </div>
    );
};

export default ContactSocial;