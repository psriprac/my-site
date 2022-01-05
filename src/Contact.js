import Twitter from "./static/twitter.svg";
import GitHub from "./static/github.svg";
import LinkedIn from "./static/linkedin.svg";

const Contact = () => (
    <>
        I check my email every day, so if you would like to get in touch with me, please send me a message at <a href="mailto:psrirpac@gmail.com"><strong>psriprac@gmail.com</strong></a>.<br /><br /> 
        Reach out to me on other social platforms as well!<br />
        <div className="Socials">
            <a href="https://twitter.com/patricksteezy" target="blank"><img src={Twitter} alt="Twitter" className="Icons" /></a>
            <a href="https://github.com/psriprac" target="blank"><img src={GitHub} alt="GitHub" className="Icons" /></a>
            <a href="https://www.linkedin.com/in/patrick-sriprachandr/" target="blank"><img src={LinkedIn} alt="LinkedIn" className="Icons" /></a>
        </div>
    </>
);

export default Contact;