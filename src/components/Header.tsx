import {
    Link
} from "react-router-dom";
import "./HeaderFooter.sass";

function Header() {
    return(
        <div className="Header">
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <div style={{flexGrow: "1"}} />{/* spacing */}
                <li><a href="https://github.com/ethanarnold256">GitHub</a></li>
            </ul>
        </div>
    );
}

export default Header;