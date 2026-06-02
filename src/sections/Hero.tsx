import { useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXmark, faDownload, faFileLines } from "@fortawesome/free-solid-svg-icons";

function Hero() {
    const [cvOpen, setCvOpen] = useState(false);

    return (
        <section id="hero" className="h-screen flex flex-col items-center justify-center fade-in-section px-4">
            <h1 className="text-center">
                Aristotelis Loucaides
            </h1>
            <div className="text-white font-semibold border border-sky-500/40
            bg-black/40 rounded-xl px-4 sm:px-8 py-4 sm:py-6 mb-4
            shadow-[0_0_20px_rgba(56,189,248,0.4)] text-center text-2xl sm:text-4xl md:text-5xl">
                Software Engineer
            </div>
            <p className='p-base text-center'>Building robust systems and intelligent software that scale.</p>

            <div className="flex flex-row mt-8 sm:mt-12 space-x-4 items-center flex-wrap justify-center gap-y-3">
                <button
                    className='button-primary'
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Let's Connect
                </button>

                <FontAwesomeIcon
                    icon={faFileLines}
                    className="hero-social cursor-pointer"
                    onClick={() => setCvOpen(true)}
                    title="View CV"
                />

                <a
                    href="https://github.com/aristotelisl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} className="hero-social" />
                </a>

                <a
                    href="https://linkedin.com/in/aloucaides"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="hero-social" />
                </a>
            </div>

            {/* CV Modal */}
            {cvOpen && createPortal(
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
                    onClick={() => setCvOpen(false)}
                >
                    <div
                        className="relative w-full max-w-4xl h-[90vh] bg-[#0d0d1a] rounded-2xl border border-sky-500/20 shadow-[0_0_40px_rgba(0,170,255,0.15)] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                            <p className="text-white font-semibold">Aristotelis Loucaides — CV</p>
                            <div className="flex items-center space-x-3">
                                <a
                                    href="/CV_Aristotelis_Loucaides.pdf"
                                    download
                                    className="flex items-center space-x-2 text-sm text-[#00aaff] hover:text-white border border-[#00aaff]/40 hover:border-white/40 rounded-lg px-3 py-1.5 transition-colors duration-200"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FontAwesomeIcon icon={faDownload} />
                                    <span>Download</span>
                                </a>
                                <button
                                    onClick={() => setCvOpen(false)}
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xl"
                                >
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <iframe
                            src="/CV_Aristotelis_Loucaides.pdf#navpanes=0"
                            className="w-full flex-1 rounded-b-2xl"
                            title="CV"
                        />
                    </div>
                </div>
            , document.body)}
        </section>
    );
}

export default Hero;
