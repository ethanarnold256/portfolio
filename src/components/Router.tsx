import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Header from "./Header";
import Footer from "./Footer";

function Router() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;