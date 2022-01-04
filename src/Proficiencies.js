import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./static/css/Proficiencies.css";

const Proficiencies = () => (
    <>
        <div className="Skills-List">
            <h6>Programming Languages</h6>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>Python</li>
            </ul>
            <br />
            <h6>IT Solutions</h6>
            <ul>
                <li>Active Directory</li>
                <li>VMware vSphere</li>
                <li>VMware Horizon</li>
                <li>VMware App Volumes</li>
                <li>HCL BigFix</li>
                <li>PowerShell</li>
                <li>ServiceNow IT Service Management</li>
                <li>ServiceNow Hardware Asset Management</li>
            </ul>
            <br />
                <h6>Administrative</h6>
                <ul>
                <li>Leadership</li>
                <li>Interpersonal Communication</li>
                <li>Teamwork</li>
                <li>Organization</li>
            </ul>
        </div>
        <div className="Skills-Table">
            <Container>
                <Row>
                    <Col><h6>Programming Languages</h6></Col>
                    <Col><h6>IT Solutions</h6></Col>
                    <Col><h6>Administrative</h6></Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>C++</li>
                            <li>Python</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Active Directory</li>
                            <li>VMware vSphere</li>
                            <li>VMware Horizon</li>
                            <li>VMware App Volumes</li>
                            <li>HCL BigFix</li>
                            <li>PowerShell</li>
                            <li>ServiceNow IT Service Management</li>
                            <li>ServiceNow Hardware Asset Management</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Leadership</li>
                            <li>Interpersonal Communication</li>
                            <li>Teamwork</li>
                            <li>Organization</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
)

export default Proficiencies;