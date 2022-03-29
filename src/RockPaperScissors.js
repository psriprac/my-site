import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./static/css/Projects.css";

const RockPaperScissors = () => (
    <>
        <Container>
            <h5>RockPaperScissors</h5>
            <p>
                Rock, Paper, Scissors game made with simple UI. HTML, CSS and Javascript. 
            </p>

            <div classname="mb-2">
                <Button href="https://github.com/psriprac/rock-paper-scissors" target="blank" type="button" class="btn btn-primary mx-2 mt-2">
                    Source Code
                </Button>
                <Button href="https://psriprac.github.io/rock-paper-scissors/" target="blank" type="button" class="btn btn-primary mx-2 mt-2">
                    Live Preview
                </Button>
            </div>
        </Container>
    </>
);

export default RockPaperScissors;