import github from '../assets/social/github.png'
import linkedin from '../assets/social/linkedin.png'

function Hero() {

    return (
        <section className="h-screen flex flex-col items-center justify-center">
            <h1>
                Aristotelis Loucaides
            </h1>
            <div className="text-[#00aaff] font-semibold border border-sky-500/40 
            bg-black/40 rounded-xl px-8 py-6 mb-4 
            shadow-[0_0_20px_rgba(56,189,248,0.4)] text-center text-5xl">
                Web Developer & Software Engineer
            </div>
            <p className='p-base'>Building scalable infrastructure aligned with company requirements.</p>
            <div className="flex flex-row mt-12 space-x-4 items-center">
                <button className='button-primary'>Let's Connect</button>
                <img src={github} alt="github" className='hero-social' />
                <img src={linkedin} alt="github" className='hero-social'/>
            </div>
        </section>
    )
}

export default Hero