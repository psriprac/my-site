import Body from "./Body";
import Profile from "./Profile";
import Footer from "./Footer";

import "./static/css/Home.css";

const Home = () => (
        <div>
            <div className="Home">
                <Profile />
                <Body />
            </div>
            <div>
                <Footer />
            </div>
        </div>
);

export default Home;