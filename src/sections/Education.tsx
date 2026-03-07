import uob from '../assets/imgs/uob.png'
import uos from '../assets/imgs/uos.png'

function Education() {

    return (
        <section className="section-margins">
            <h2>Education</h2>
            <p className="p-base">My education</p>

            <div className='space-y-24 flex flex-col items-start mt-44'>
                {/* University of Bath */}
                <div className='flex flex-col items-center space-y-12'>
                    <div className='flex flex-row items-center space-x-4 text-start w-[1100px] p-2'>
                        <img src={uob} alt="" className='w-20 h-auto bg-white rounded-full' />
                        <div>
                            <p className="text-xl">University of Bath</p>
                            <p className="p-base">MSc Computer Science</p>
                            <p className='text-sm text-gray-500'>Oct 2025 - Present</p>
                        </div>
                    </div>

                    <div>
                        <ul className='list-disc text-start'>
                            <li>
                                Thesis: Artificial Intelligence Techniques for Inheritance of Lost Arts
                            </li>
                            <li>
                                Relevant Modules: Machine Learning Technologies, Intelligent Systems, Cloud Application Development
                            </li>
                        </ul>
                    </div>

                </div>

                {/* University of Southampton */}
                <div className='flex flex-col items-start space-y-12'>
                    <div className='flex flex-row items-center space-x-4 text-start w-[1100px] p-2'>
                        <img src={uos} alt="" className='w-20 h-auto ' />
                        <div className=''>
                            <p className="text-xl">University of Southampton</p>
                            <p className="p-base">BSc Computer Science (Hons)</p>
                            <p className='text-sm text-gray-500'>Oct 2021 - Jun 2024</p>
                        </div>
                    </div>

                    <div>
                        <ul className='list-disc text-start'>
                            <li>
                                Thesis: Artificial Intelligence Techniques for Inheritance of Lost Arts
                            </li>
                            <li>
                                Relevant Modules: Machine Learning Technologies, Intelligent Systems, Cloud Application Development
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Education;