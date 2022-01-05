import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";

import OnlineResume from "./OnlineResume";

const Projects = () => (
    <>
        <div>
            <Container>
                <Tabs defaultActiveKey="online-resume" className="mb-3">
                    <Tab eventKey="online-resume" title="Online Resume">
                        <OnlineResume />
                    </Tab>
                    <Tab eventKey="coming-soon" title="Coming Soon...">
                        <em>More projects to come!</em>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    </>
);

export default Projects;