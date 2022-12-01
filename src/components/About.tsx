function About() {
    return(
        <div className="page">
            <div className="sectionLeft">
                <div id="title">Greetings.</div>
                <div className="content">
                    <p>
                        Thank you for visiting my site. My name is <span id="name">Ethan Arnold.</span>
                    </p>
                    <p>
                        I am currently a Junior in the process of obtaining my Bachelor of Science in Computer Science at Clarkson University.
                    </p>
                </div>
            </div>
            <div className="sectionLeft">
                <h1>Interests</h1>
                <div className="content">
                    <p>
                        I like to use both halves of my brain.
                    </p>
                    <p>
                        This implies that I find interest in topics that span both techincal & artistic spheres.
                    </p>
                    <p>
                        Linguistics is my foremost extra-cirricular passion.
                        I have studied numerous languages and their respective grammars, which has given me great insight into English; My own mother language.
                    </p>
                    <p>
                        I have extensively studied French & Standard Chinese for several years, and have started to acquire an understanding in Indonesian, Spanish & German.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;