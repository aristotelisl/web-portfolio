import aseto from '../assets/imgs/aseto.jpg'
import azul from '../assets/imgs/azul.jpg'
import AsetoDesigner from '../assets/imgs/AsetoDesigner.png'
import { useState } from 'react';

function WorkExperience() {
      const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='section-margins'>
            <h2>Work Experience</h2>
            <p className="p-base">Professional Experience</p>

            <div className="flex flex-col items-start mt-44 space-y-24">
                {/* Aseto */}
                <div className="flex flex-row space-x-24 text-start">
                    <div className="text-5xl text-gray-400 font-extrabold ">
                        Nov 2024 -<br/>Aug 2025
                    </div>

                    <div>
                        <div className='space-y-4'>
                            <div className='flex flex-row items-center space-x-4'>
                                <img src={aseto} alt="" className='w-10 h-10 rounded-lg' />
                                <div>
                                    <p className="text-xl">Junior Software Developer</p>
                                    <p className="p-base">Aseto • Larnaca, Cyprus</p>
                                </div>
                            </div>

                            <p className='p-base'>Something something something</p>

                            <ul className='list-disc'>
                                <li>
                                    Engineered backend logic for Aseto’s AI Voice Agent, automating inbound and outbound communication with
                                    Python ML frameworks such as LangChain and LlamaIndex
                                </li>
                                <li>
                                    Designed and maintained modular Python microservices, including a production-grade Text-to-Speech service
                                </li>
                                <li>
                                    Built and launched the company’s{" "}
                                    <a
                                        href="https://www.aseto.ai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#00aaff] hover:underline"
                                    >
                                        marketing and operations platform
                                    </a>{" "}
                                    using Next.js, ensuring scalability, responsiveness, and high performance across devices.
                                </li>
                                <li>
                                    Developed and integrated robust APIs in ASP.NET, enabling seamless communication across services and
                                    supporting key features of the AI assistant
                                </li>
                            </ul>

                            <div className='flex flex-row items-center space-x-12'>
                                <p className='p-base max-w-[400px]'>
                                    This is the Workflow Designer dashboard I developed, a visual interface that enables clients to easily
                                    build and customize their own AI agents. Using an intuitive drag-and-drop editor, users can create and 
                                    connect conversation and tool nodes to design unique workflows tailored to their needs. The platform also 
                                    supports both built-in tools and custom tools, giving clients complete flexibility in how they build their agents.
                                </p>

                                <img
                                    src={AsetoDesigner}
                                    alt="Aseto WorkFlow Designer"
                                    className="rounded-2xl cursor-pointer transition-transform duration-300 w-[50%] hover:scale-105"
                                    onClick={() => setIsOpen(true)}
                                />

                                {/* Modal (only visible when clicked) */}
                                {isOpen && (
                                    <div
                                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                                    onClick={() => setIsOpen(false)}
                                    >
                                    <img
                                        src={AsetoDesigner}
                                        alt="Aseto WorkFlow Designer"
                                        className="rounded-2xl max-h-[90vh] object-contain"
                                    />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Azul */}
                <div className="flex flex-row space-x-24 text-start">
                    <div className="text-5xl text-gray-400 font-extrabold ">
                        Jul 2023 -<br/>Sep 2023
                    </div>

                    <div>
                        <div className='space-y-4'>
                            <div className='flex flex-row items-center space-x-4'>
                                <img src={azul} alt="" className='w-10 h-10 rounded-lg' />
                                <div>
                                    <p className="text-xl">Junior Software Engineer, Intern</p>
                                    <p className="p-base">Azul Systems • Limassol, Cyprus</p>
                                </div>
                            </div>

                            <p className='p-base'>Something something something</p>

                            <ul className='list-disc'>
                                <li>
                                    Worked with a team to create a Java grammar visualizer web application to be used internally within the company
                                </li>
                                <li>
                                    Implemented features such as syntax highlighting, search functionality, and directed acyclic graphs to visually
                                    represent complex relationships between hundreds of grammar files
                                </li>
                                <li>
                                    Utilised Node.js with Express framework and React with Ant Design UI Kit
                                </li>
                            </ul>                
                        </div>
                    </div>
                </div>

                {/* Deloitte */}
                <div className="flex flex-row space-x-24 text-start">
                    <div className="text-5xl text-gray-400 font-extrabold ">
                        Sep <br/>2022 
                    </div>

                    <div>
                        <div className='space-y-4'>
                            <div className='flex flex-row items-center space-x-4'>
                                <img src={azul} alt="" className='w-10 h-10 rounded-lg' />
                                <div>
                                    <p className="text-xl">Cyber Risk, Intern</p>
                                    <p className="p-base">Deloitte • Limassol, Cyprus</p>
                                </div>
                            </div>

                            <p className='p-base'>Something something something</p>

                            <ul className='list-disc'>
                                <li>
                                    Trained in cyber threat identification, vulnerability assessment, and penetration testing techniques
                                </li>
                                <li>
                                    Practiced identifying exposed or vulnerable network ports and services using professional recon tools
                                </li>
                                <li>
                                    Learned foundational principles of cyber risk management, including attack surface evaluation and mitigation planning
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