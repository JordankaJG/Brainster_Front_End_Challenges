import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const eventInfoArr = [
    "Enter Now",

    "Event info",

    "Course Maps",

    "Race Pack",

    "Results",

    "FAQs",

    "Am I Registered?",
  ];
  const registrationArr = [
    "Volunteers",

    "Gallery",

    "Press",

    "Results",

    "Privacy Policy",

    "Service Plus",

    "Contacts",
  ];
  const sheduleArr = [
    "  Gallery",

    "About",

    "Videos",

    "Results",

    "FAQs",

    "Results",

    "Volunteers",
  ];
  return (
    <div className="footer">
      <div className="soical_media">
        <h3>Social Share</h3>
        <div className="socialIcons">
          <span className="smIcon">
            <FaFacebookF />
          </span>
          <span className="smIcon">
            <FaInstagram />
          </span>
          <span className="smIcon">
            <FaTwitter />
          </span>
          <span className="smIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div className="textRow">
        <h3>Event Info</h3>
        {eventInfoArr.map((item, index) => (
          <span key={index} className="text">
            {item}
          </span>
        ))}
      </div>
      <div className="textRow">
        <h3>Registration</h3>
        {registrationArr.map((item,index) => (
          <span key={index} className="text">
            {item}
          </span>
        ))}
      </div>
      <div className="textRow">
        <h3>Shedule</h3>
        {sheduleArr.map((item,index) => (
          <span key={index} className="text">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Footer;
