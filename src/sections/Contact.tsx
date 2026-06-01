import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <section id="contact" className="section-margins fade-in-section pb-32">
            <div className="section-container">
                <h2>Get In Touch</h2>
                <p className="p-base">Have an opportunity or just want to chat? My inbox is always open.</p>

                <div className="flex flex-col items-start mt-16 space-y-6">
                    <a
                        href="mailto:aristotelisl002@gmail.com"
                        className="flex items-center space-x-4 text-xl text-gray-300 hover:text-[#00aaff] transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                        <span>aristotelisl002@gmail.com</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/aloucaides"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 text-xl text-gray-300 hover:text-[#00aaff] transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                        <span>linkedin.com/in/aloucaides</span>
                    </a>

                    <a
                        href="https://github.com/aristotelisl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 text-xl text-gray-300 hover:text-[#00aaff] transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                        <span>github.com/aristotelisl</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
