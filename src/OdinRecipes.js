import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./static/css/Projects.css";

const OdinRecipes = () => (
    <>
        <Container>
            <h5>Recipes Page</h5>
            <p>
                This is a simple HTML recipe site that was made from following the 
                <a href="https://www.theodinproject.com/" target="blank"> <em>Odin Project's</em> </a>
                HTML foundations module in their (excellent) full stack development curriculum. Pure HTML!
            </p>

            <div classname="mb-2">
                <Button href="https://github.com/psriprac/odin-recipes" target="blank" type="button" class="btn btn-primary b-space">
                    Source Code
                </Button>
                <Button href="https://psriprac.github.io/odin-recipes/" target="blank" type="button" class="btn btn-primary b-space">
                    Live Preview
                </Button>
            </div>
        </Container>
    </>
);

export default OdinRecipes;