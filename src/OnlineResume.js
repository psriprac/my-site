import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./static/css/Projects.css";

const OnlineResume = () => (
    <>
        <div>
            <Container>
                <h5>Single Page Web Resume</h5>
                <p>
                    This webpage is actually an online resume
                    that I created using 
                    <a href="https://create-react-app.dev/" target="blank"><em> create-react-app </em></a>
                    with 
                    <a href="https://react-bootstrap.github.io/" target="blank"><em> react-bootstrap</em></a>.
                </p>
                <p>
                    After creating the build for the site,
                    it was then manually deployed with
                    <a href="https://www.netlify.com/" target="blank"><em> netlify </em></a>
                    with a custom domain I own.
                </p>
                <p>
                    <em>(Short tutorial coming soon!)</em>
                </p>
                <div classname="mb-2">
                    <Button href="https://github.com/psriprac/my-site" target="blank" type="button" class="btn btn-primary b-space">
                        Source Code
                    </Button>
                </div>
            </Container>
        </div>
    </>
);

export default OnlineResume;