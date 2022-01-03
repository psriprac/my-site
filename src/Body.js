//import Tabs from "react-bootstrap/Tabs";
//import Tab from "react-bootstrap/Tab";
import Accordian from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects"
import Proficiencies from "./Proficiencies";
import Contact from "./Contact";

import "./static/css/Body.css";

/*
const Body = () => (
        <div className="Body">
            <Tabs fill variant="pills" defaultActiveKey="about" id="uncontrolled-tab-example" className="jusity-content-center mb-3">
                <Tab eventKey="about" title="About Me">
                    <About />
                </Tab>
                <Tab eventKey="education" title="Education">
                    <Education />
                </Tab>
                <Tab eventKey="experience" title="Experience">
                    <Experience />
                </Tab>
                <Tab eventKey="projects" title="Projects">
                    <Projects />
                </Tab>
                <Tab eventKey="proficiencies" title="Proficiencies">
                    <Proficiencies />
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <Contact />
                </Tab>
            </Tabs>
        </div>
)
*/

const Body = () => (
    <div className="Body">
        <Accordian defaultActiveKey={['1']} alwaysOpen flush>
            <Accordian.Item eventKey="0">
            <Accordian.Header><h4>About Me</h4></Accordian.Header>
                <AccordionBody>
                    <About />
                </AccordionBody>
            </Accordian.Item>

            <Accordian.Item eventKey="1">
                <Accordian.Header><h4>Education</h4></Accordian.Header>
                    <AccordionBody>
                        <Education />
                    </AccordionBody>
            </Accordian.Item>

            <Accordian.Item eventKey="2">
                <Accordian.Header><h4>Experience</h4></Accordian.Header>
                    <AccordionBody>
                        <Experience />
                    </AccordionBody>
            </Accordian.Item>

            <Accordian.Item eventKey="3">
                <Accordian.Header><h4>Projects</h4></Accordian.Header>
                    <AccordionBody>
                        <Projects />
                    </AccordionBody>
            </Accordian.Item>

            <Accordian.Item eventKey="4">
                <Accordian.Header><h4>Proficiencies</h4></Accordian.Header>
                    <AccordionBody>
                        <Proficiencies />
                    </AccordionBody>
            </Accordian.Item>

            <Accordian.Item eventKey="5">
                <Accordian.Header><h4>Contact</h4></Accordian.Header>
                    <AccordionBody>
                        <Contact />
                    </AccordionBody>
            </Accordian.Item>
        </Accordian>
    </div>
);

export default Body;