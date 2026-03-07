import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Hero() {

    return (
        <section className="h-screen flex flex-col items-center justify-center">
            <h1>
                Aristotelis Loucaides
            </h1>
            <div className="text-white font-semibold border border-sky-500/40 
            bg-black/40 rounded-xl px-8 py-6 mb-4 
            shadow-[0_0_20px_rgba(56,189,248,0.4)] text-center text-5xl">
                Web Developer & Software Engineer
            </div>
            <p className='p-base'>Building scalable infrastructure aligned with company requirements.</p>
            <div className="flex flex-row mt-12 space-x-4 items-center">
                <button className='button-primary'>Let's Connect</button>
                {/* GitHub */}
                <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon
                    icon={faGithub}
                    className="hero-social"
                />
                </a>

                {/* LinkedIn */}
                <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon
                    icon={faLinkedin}
                    className="hero-social"
                />
                </a>
            </div>
        </section>
    )
}

export default Hero