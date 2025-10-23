import linkedin from '../assets/social/linkedin.png'

function WorkExperience() {

    return (
        <section>
            <h2>Work Experience</h2>
            <p className="p-base">My work experience and skills I got bruv</p>

            <div className="flex flex-col items-start">
                {/* Aseto */}
                <div className="flex flex-row space-x-24 text-start">
                    <div className="text-5xl text-gray-400 font-extrabold ">
                        Nov 2024 -<br/>Aug 2025
                    </div>

                    <div>
                        <div>
                            <div className='flex flex-row items-center space-x-4'>
                                <img src={linkedin} alt="" className='w-10 h-10' />
                                <div>
                                    <p className="text-xl">Junior Software Developer</p>
                                    <p className="p-base">Aseto • Larnaca, Cyprus</p>
                                </div>
                            </div>

                            <ul className='list-disc'>
                                <li>
                                    Engineered backend logic for Aseto’s AI Voice Agent, automating inbound and outbound communication with
                                    Python ML frameworks such as LangChain and LlamaIndex
                                </li>
                                <li>
                                    Designed and maintained modular Python microservices, including a production-grade Text-to-Speech service
                                    critical to the conversational AI pipeline
                                </li>
                                <li>
                                    Built and launched the company’s marketing and operations platform using Next.js, ensuring scalability, re
                                    sponsiveness, and high performance across devices
                                </li>
                                <li>
                                    Developed and integrated robust APIs in ASP.NET, enabling seamless communication across services and
                                    supporting key features of the AI assistant
                                </li>
                                <li>
                                    Enhancedmobile and desktop app interfaces with .NET MAUI while leveraging PostgreSQL for data cleanup,
                                    optimization, and performance improvements
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WorkExperience;