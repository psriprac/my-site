import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./static/css/Projects.css";

const EtchAndSketch = () => (
    <>
        <Container>
            <h5>Etch-A-Sketch</h5>
            <p>
                A low res sketchboard that resembles a childhood toy.
            </p>

            <div classname="mb-2">
                <Button href="https://github.com/psriprac/etch-a-sketch" target="blank" type="button" class="btn btn-primary mx-2 mt-2">
                    Source Code
                </Button>
                <Button href="https://psriprac.github.io/etch-a-sketch/" target="blank" type="button" class="btn btn-primary mx-2 mt-2">
                    Live Preview
                </Button>
            </div>
        </Container>
    </>
);

export default EtchAndSketch;