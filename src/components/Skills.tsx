import UB_Logo from "../img/ub_logo.png";
import CU_Logo from "../img/cu_logo.png";

function Skills() {
    return(
        <div className="page">
            <div className="sectionLeft">
                <h1>Knowledge</h1>
                <div className="content">
                    <p>
                        My knowledge of Computer Science topics is vast.
                        I have used computers for anything from creating graphics to software development.
                    </p>
                    <h2>Programming Languages</h2>
                    <ul style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}}>
                        <li>C</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Sass</li>
                        <li>Java</li>
                        <li>Scala</li>
                        <li>Haskell</li>
                        <li>Bash</li>
                        <li>Batch</li>
                        <li>PowerShell</li>
                        <li>X86_64</li>
                    </ul>
                    <h2>Software</h2>
                    <ul style={{display: "grid", gridTemplateColumns: "repeat(6, 1fr)"}}>
                        <li>Linux</li>
                        <li>BSD</li>
                        <li>MacOS</li>
                        <li>Unix</li>
                        <li>Windows</li>
                        <li>Git</li>
                        <li>Github</li>
                        <li>VS Code</li>
                        <li>IntelliJ IDEA</li>
                        <li>Vim</li>
                        <li>GDB</li>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>Blender</li>
                        <li>GIMP</li>
                        <li>Inkscape</li>
                        <li>Photoshop</li>
                        <li>Adobe XD</li>
                    </ul>
                </div>
            </div>
            <div className="sectionLeft">
                <h1>Education</h1>
                <div className="schoolGrid">
                    <div className="school">
                        <img src={UB_Logo} />
                        <h2>2020 — 2021</h2>
                        <div className="content">
                            <div>
                                <h3>B.S. in Computer Engineering</h3>
                                <ul>
                                    <li><b>CSE 115</b> - Intro to Computer Science I</li>
                                    <li><b>CSE 116</b> - Intro to Computer Science II</li>
                                    <li><b>CSE 191</b> - Discrete Structures</li>
                                    <li><b>MTH 141</b> - College Calculus I</li>
                                    <li><b>MTH 142</b> - College Calculus II</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   <div className="school">
                        <img src={CU_Logo} />
                        <h2>2021 — 2024</h2>
                        <div className="content">
                            <div>
                                <h3>B.S. in Computer Science</h3>
                                <ul>
                                    <li><b>CS 241</b> -  Computer Organization</li>
                                    <li><b>CS 242</b> - Adv. Prog. Concepts in Java</li>
                                    <li><b>CS 341</b> - Programming Languages</li>
                                    <li><b>CS 344</b> - Algorithms & Data Structures</li>
                                    <li><b>CS 345</b> -  Automata Theory & Form. Lang.</li>
                                    <li><b>CS 350</b> -  Software Design & Dev.</li>
                                    <li><b>COMM 229</b> -  Princ. of User Exp. Design</li>
                                    <li><b>COMM 329</b> - Front end Development</li>
                                    <li><b>MA 339</b> -  Applied Linear Algebra</li>
                                    <li><b>STAT 383</b> -  Probability & Statistics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;