import uob from '../assets/imgs/uob.png';
import uos from '../assets/imgs/uos.png';

function Education() {
    return (
        <section id="education" className="section-margins fade-in-section">
            <div className="section-container">
                <h2>Education</h2>
                <p className="p-base">Academic background</p>

                <div className='space-y-24 flex flex-col items-start mt-44'>

                    {/* University of Bath */}
                    <div className='flex flex-col items-start space-y-8'>
                        <div className='flex flex-row items-center space-x-4'>
                            <img src={uob} alt="University of Bath" className='w-20 h-auto bg-white rounded-full' />
                            <div>
                                <p className="text-xl">University of Bath</p>
                                <p className="p-base">MSc Computer Science</p>
                                <p className='text-sm text-gray-500'>Oct 2025 – Present</p>
                            </div>
                        </div>
                        <div className="text-start space-y-3">
                            <div>
                                <p className="text-sm text-[#00aaff] font-semibold uppercase tracking-widest mb-1">Dissertation</p>
                                <p>AI-Assisted Generation and Interactive Exploration of Causal Loop Diagrams from Future Scenario Narratives <span className="text-gray-500">(Industry Project with DAS)</span></p>
                            </div>
                            <div>
                                <p className="text-sm text-[#00aaff] font-semibold uppercase tracking-widest mb-1">Relevant Modules</p>
                                <p>Software Engineering · Software Development · AI and Machine Learning</p>
                            </div>
                        </div>
                    </div>

                    {/* University of Southampton */}
                    <div className='flex flex-col items-start space-y-8'>
                        <div className='flex flex-row items-center space-x-4'>
                            <img src={uos} alt="University of Southampton" className='w-20 h-auto' />
                            <div>
                                <p className="text-xl">University of Southampton</p>
                                <p className="p-base">BSc (Hons) Computer Science</p>
                                <p className='text-sm text-gray-500'>Oct 2021 – Jun 2024</p>
                            </div>
                        </div>
                        <div className="text-start space-y-3">
                            <div>
                                <p className="text-sm text-[#00aaff] font-semibold uppercase tracking-widest mb-1">Dissertation</p>
                                <p>Artificial Intelligence Techniques for Inheritance of Lost Arts</p>
                            </div>
                            <div>
                                <p className="text-sm text-[#00aaff] font-semibold uppercase tracking-widest mb-1">Relevant Modules</p>
                                <p>Machine Learning Technologies · Intelligent Systems · Cloud Application Development</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Education;
