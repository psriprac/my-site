import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Figure from "react-bootstrap/Figure";

const Experience = () => (
    <>
        <Container>
            <Row>
                <Stack direction="horizontal" gap={3}>
                    <div><h5>ICW Group</h5></div>
                    <div className="ms-auto"><h6>May 2020</h6></div>
                    <div className="vr" />
                    <div><h6>Present</h6></div>
                </Stack>
                <Figure.Caption><h6>Deskop Technician I</h6></Figure.Caption>
            </Row>
            <Row>
                <ul>
                    <li>
                        Provide support to users with electronic 
                        hardware and software tools in an office 
                        environment.
                    </li>
                    <li>
                        Configure, maintain, and support virtual 
                        machines with VMware’s vSphere and Horizon 
                        solutions. 
                    </li>
                    <li>
                        Collaborate with multiple IT teams to 
                        employ software standards and optimize 
                        virtual machine environments.
                    </li>
                    <li>
                        Assist in IT Service Management using ServiceNow.
                    </li>
                    <li>
                        Support and maintain corporate Active 
                        Directory containing over 1000 members.
                    </li>
                    <li>
                        Deploy multi-user software solutions using HCL BigFix.
                    </li>
                </ul>
            </Row>
        </Container>
        <Container>
            <Row>
                <Stack direction="horizontal" gap={3}>
                    <div><h5>Geek Squad, Best Buy Co., Inc.</h5></div>
                    <div className="ms-auto"><h6>Jan 2018</h6></div>
                    <div className="vr" />
                    <div><h6>May 2021</h6></div>
                </Stack>
                <Figure.Caption><h6>Advanced Repair Agent</h6></Figure.Caption>
            </Row>
            <Row>
                <ul>
                    <li>
                        Performed diagnoses, troubleshooting, 
                        and repair of consumer electronics.
                    </li>
                    <li>
                        Apple Certified iOS Technician under 
                        Apple’s Authorized Service Program.
                    </li>
                    <li>
                        Completed camera, battery, and screen 
                        repairs of Apple devices from iPhone 6 to 
                        iPhone 12.
                    </li>
                    <li>
                        Translated high level technical terminology 
                        to end users that have little to no 
                        technical experience.
                    </li>
                    <li>
                        Handled private client data through 
                        backup and recovery.
                    </li>
                </ul>
            </Row>
        </Container>
        <Container>
            <Row>
                <Stack direction="horizontal" gap={3}>
                    <div><h5>SeaWorld Parks and Entertainment, Inc.</h5></div>
                    <div className="ms-auto"><h6>Apr 2013</h6></div>
                    <div className="vr" />
                    <div><h6>Dec 2017</h6></div>
                </Stack>
                <Figure.Caption><h6>Park Operations Assistant Supervisor</h6></Figure.Caption>
            </Row>
            <Row>
                <ul>
                    <li>
                        Lead front gate ticket sales, 
                        guest service, parking, and 
                        tollbooth operations.
                    </li>
                    <li>
                        Completed fast-paced and short-term 
                        daily objectives.
                    </li>
                    <li>
                        Managed a team of up to 200 to 
                        create excellent guest arrival experiences.
                    </li>
                    <li>
                        Resolved ticket admission and 
                        guest experience conflicts.
                    </li>
                </ul>
            </Row>
        </Container>
    </>
);

export default Experience;