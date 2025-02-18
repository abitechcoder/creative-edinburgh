import { MeetandGreet } from "../assets";

const Hero = () => {
    return (
        <header className="relative lg:h-screen overflow-x-hidden">
            {/* Yellow Arc */}
            <svg viewBox="0 0 467.23 585.48" preserveAspectRatio="xMinYMin meet" className="fill-primary absolute z-10 top-0 -right-20 lg:-top-30 lg:-right-30 w-48 h-48 lg:w-[500px] lg:h-[500px] rotate-90"><path d="M1160.562,468.741c-48.074,84.29-155.091,113.632-239.217,65.587L853.47,653.7c149.823,85.752,340.52,33.449,426.1-116.868s33.27-341.638-116.538-427.375L1095.141,228.8c84.018,48.207,113.285,155.544,65.421,239.94" transform="translate(-853.47 -109.457)"></path></svg>
            <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                {/* Left Column */}
                <div className="lg:col-span-3 flex flex-col justify-end px-4 lg:px-8">
                    <h1 className="text-4xl mt-[120px] lg:mt-0 py-8 lg:text-8xl font-bold leading-[40px] lg:leading-[85px] lg:mb-16">
                        WELCOME TO
                        CREATIVE
                        EDINBURGH!
                    </h1>
                </div>
                <div className="lg:col-span-2 flex flex-col justify-end relative">
                    <svg viewBox="0 0 137.169 137.76" preserveAspectRatio="xMinYMin meet" className="fill-green-950 z-10 absolute w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] -left-[20px] lg:-left-[50px] top-[20%] lg:top-[50%]"><path d="M1084.917,899.655a68.544,68.544,0,1,0-66.638,70.775,68.863,68.863,0,0,0,66.638-70.775" transform="translate(-947.774 -832.697)"></path></svg>
                    <img
                        src={MeetandGreet}
                        alt="Creative meetup"
                        className="w-full lg:h-4/5 h-[400px] object-cover object-center rounded-lg shadow-lg mb-8"
                    />
                </div>
            </div>
        </header>
    )
}

export default Hero