import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./static/css/Projects.css";

const Calculator = () => (
    <>
        <Container>
            <h5>Calculator App</h5>
            <p>
                A simple calculator. Made with old fashioned HTML, CSS, and Javascript.
            </p>

            <div classname="mb-2">
                <Button href="https://github.com/psriprac/calculator-app" target="blank" type="button" class="btn btn-primary mx-2 mt-2">
                    Source Code
                </Button>
                <Button href="https://psriprac.github.io/calculator-app/" target="blank" type="button" class="btn btn-primary mx-2 mt-2">
                    Live Preview
                </Button>
            </div>
        </Container>
    </>
);

export default Calculator;