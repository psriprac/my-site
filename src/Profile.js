import Figure from "react-bootstrap/Figure";

import "./static/css/Profile.css";

import pfp from "./static/pfp.JPG";
import Twitter from "./static/twitter.svg";
import GitHub from "./static/github.svg";
import LinkedIn from "./static/linkedin.svg";
import Email from "./static/envelope-fill.svg";
import Location from "./static/geo-alt-fill.svg";
import DownloadPDF from "./static/file-earmark-pdf-fill.svg";
import DownloadWord from "./static/file-earmark-word-fill.svg";

const Profile = () => (
    <div className="Profile">
        <img src={pfp} alt="128x128" className="img-center"></img> 
        <Figure>
            <Figure.Caption>
                <h6>
                    This is my face. Say hello to my face. Now I'm going to add random text about something else: Lorem ipsum dolor sit 
                    amet consectetur, adipisicing elit. Quibusdam eligendi labore eos aperiam debitis sunt a sint quae cumque soluta! 
                </h6>
            </Figure.Caption>
        </Figure>

        <div className="InfoBlock">
            <div classNAme="Email">
                <h6><a href="mailto:psriprac@gmail.com"><img src={Email} alt="E-Mail: psriprac@gmail.com" className="Icons-sm" />psriprac@gmail.com</a></h6>
            </div>

            <div className="Location">
                <h6><img src={Location} alt="Location" className="Icons-sm" />San Diego, CA</h6>
            </div>
        </div>

        <div className="DownloadResume">
            <h6>Download Resume:</h6>
            <img src={DownloadPDF} alt="Resume PDF" className="Icons" />
            <img src={DownloadWord} alt="Resume Word" className="Icons" />
        </div>

        <div className="Socials">
            <a href="https://twitter.com/patricksteezy" target="blank"><img src={Twitter} alt="Twitter" className="Icons" /></a>
            <a href="https://github.com/psriprac" target="blank"><img src={GitHub} alt="GitHub" className="Icons" /></a>
            <a href="https://www.linkedin.com/in/patrick-sriprachandr/" target="blank"><img src={LinkedIn} alt="LinkedIn" className="Icons" /></a>
        </div>
    </div>
);

export default Profile;