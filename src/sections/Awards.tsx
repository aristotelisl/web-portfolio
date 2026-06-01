const awards = [
    {
        date: "May\n2026",
        title: "Engineers and Scientists in Business Fellowship (ESBF)",
        event: "University of Bath",
        location: "Bath, England",
        place: "1st Place · £3,000",
        bullets: [
            "Awarded 1st place and £3,000 prize in the ESBF Innovation Competition as part of the Entrepreneurship module",
            "Collaborated with a team to conceive and pitch 99NOW, a next-generation emergency communication platform proposing to modernise the 999 system with live video, digital reporting, and AI-assisted risk assessment",
        ],
    },
    {
        date: "Nov\n2019",
        title: "Robotex International",
        event: "Enhanced Line Following",
        location: "Tallinn, Estonia",
        place: "3rd Place",
        bullets: [
            "Developed and programmed a custom-built robot using C++ on the Arduino platform",
            "Implemented a PID controller with five sensors for precise line-following",
        ],
    },
    {
        date: "Jun\n2018",
        title: "Robotex Cyprus",
        event: "Engino Line Following & Lego Sumo",
        location: "Nicosia, Cyprus",
        place: "1st Place & 2nd Place",
        bullets: [
            "Awarded 1st place in Engino Line Following and 2nd place in Lego Sumo",
            "Designed and programmed robots using the Engino and Lego platforms",
        ],
    },
];

function Awards() {
    return (
        <section id="awards" className="section-margins fade-in-section">
            <div className="section-container">
                <h2>Awards</h2>
                <p className="p-base">Competitions & recognition</p>

                <div className="flex flex-col items-start mt-44 space-y-24">
                    {awards.map((award, index) => (
                        <div key={index} className="flex flex-row space-x-24 text-start">
                            <div className="text-5xl text-gray-400 font-extrabold min-w-[120px] whitespace-pre-line">
                                {award.date}
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xl">{award.title}</p>
                                    <p className="p-base">{award.event} · {award.location}</p>
                                    <span className="inline-block mt-2 text-sm font-semibold text-[#00aaff] border border-[#00aaff]/40 rounded-full px-3 py-0.5">
                                        {award.place}
                                    </span>
                                </div>
                                <ul className="list-disc space-y-1">
                                    {award.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Awards;
