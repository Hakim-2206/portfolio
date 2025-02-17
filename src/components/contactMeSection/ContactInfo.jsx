import {HiOutlineMail} from "react-icons/hi";
import {FiPhone} from "react-icons/fi";
import {IoLocationOutline} from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
    return (
        <div className="flex flex-col gap-4">
            <SingleInfo text="hakim.hakim2206@gmail.com" Image={HiOutlineMail}/>
            <SingleInfo text="+33 6 67 32 90 97" Image={FiPhone}/>
            <SingleInfo text="Nice, FRANCE" Image={IoLocationOutline}/>
        </div>
    );
};

export default ContactInfo;