import Toggler from "./HomeElements/Toggler";
import IntroImage from "./HomeElements/IntroImage";
import Skills from "./HomeElements/Skills";
import Certificates from "./HomeElements/Certificates_data/Certificates";
import CertificateDetails from "./HomeElements/Certificates_data/CertificateDetails";
import AboutMe from "./HomeElements/Additional_content/AboutMe";
import { Helmet } from "react-helmet";

const Home = () => {
    return(
        
        <div className="home page" data-page="home">
            <Helmet>
                <title>Gaurav Heera · Home</title>
                <meta name="description" content="Explore the developer portfolio of Gaurav Heera—React.js enthusiast and full-stack learner with a front-end focus. Skilled in HTML5, CSS3, JavaScript, Angular.js, jQuery, Bootstrap, Tailwind CSS, PHP, Python/Flask, Node.js, Express.js, Shopify, WordPress, and SQL. Discover hosted projects, certifications, and his BCA journey at Chandigarh University."></meta>
            </Helmet>

            <Toggler/>


            <div className="intro-wrap homeObj">

                <div className="name-wrap">

                    <h1 className="intro">
                        Gaurav Heera
                    </h1>

                    <IntroImage/>
                </div>

                <p className="description">I’m a full-stack web developer with a front-end obsession. I build interfaces that aren’t just usable—they’re alive. Intuitive. Responsive. Emotionally aware. While I can architect back-end systems, I specialize in crafting experiences users don’t forget. My tools evolve constantly because I do—learning fast, building faster, and coding like clarity is non-negotiable in the ever-shifting web landscape.</p>
                

                <div className="social_icon_wrap">
                    <div className="social-icon linkedin" id="linkedin" onClick={() => {
                        const LinkedIn = "https://www.linkedin.com/in/gauravheer001";
                        window.open(LinkedIn, "_blank")
                    }}>
                        <i class="bi bi-linkedin"></i> LinkedIn</div>

                    <div className="social-icon github" id="github" onClick={() => {
                        const GitHub = "https://github.com/GauravHeera";
                        window.open(GitHub, "_blank");
                    }}>
                        <i class="bi bi-github"></i> GitHub</div>

                    <div className="social-icon CV" id="cv" onClick={() => {
                        const CV = "https://www.canva.com/design/DAGZETS3MTI/XQsYqfQZv2ayyphKYBuL2Q/edit?utm_content=DAGZETS3MTI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
                        window.open(CV, "_blank");
                    }}>
                        <i class="bi bi-file-earmark-person-fill"></i> View CV</div>
                        
                </div>
            </div>

            <Skills/>

            <div className="certificates_container homeObj">
                <h1>Certificates</h1>
                    {CertificateDetails.map((certificate) => (
                        <Certificates key={certificate.id} certificate={certificate}/>
                    ))}
            </div>

            <div className="about_info homeObj">
                <h1>About Me</h1>
                <AboutMe/>
            </div>

        </div>
    );
}

export default Home;