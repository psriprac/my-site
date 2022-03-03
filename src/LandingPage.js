import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./static/css/Projects.css";

const LandingPage = () => (
    <>
        <Container>
            <h5>Landing Page</h5>
            <p>
                This is a simple landing page for a website built in pure HTML and CSS using the
                <a href="https://www.theodinproject.com/" target="blank"> <em>Odin Project's</em> </a>
                CSS foundations module in their full stack development curriculum. This page is only optimized for viewports greater than 800 pixels.
            </p>

            <div classname="mb-2">
                <Button href="https://github.com/psriprac/odin-landing-page" target="blank" type="button" class="btn btn-primary b-space">
                    Source Code
                </Button>
                <Button href="https://psriprac.github.io/odin-landing-page/" target="blank" type="button" class="btn btn-primary b-space">
                    Live Preview
                </Button>
            </div>
        </Container>
    </>
);

export default LandingPage;