import styles from "../style";

const StepsToSuccess = () => {
    return (
        <section className="bg-secondary">
            <div className="px-4 container mx-auto lg:px-8 py-15 lg:py-20">
                <h2 className={`${styles.heading1} lg:max-w-[70%] lg:mx-auto text-white text-center mb-4`}>
                    How It Works
                </h2>
                <p className="text-xl lg:text-2xl font-bold text-white text-center">Three Steps to Success</p>
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 lg:mt-16">
                    <div className="min-h-[300px] rounded-lg grid place-content-center gap-3 text-center bg-white p-4">
                        <h2 className="font-bold text-xl">Step 1</h2>
                        <h3 className="font-bold text-3xl text-secondary">Join the Platform</h3>
                        <p className="text-xl">Create a free profile as a business, investor, or entrepreneurs</p>
                    </div>
                    <div className="min-h-[300px] rounded-lg grid place-content-center gap-3 text-center bg-white p-4">
                        <h2 className="font-bold text-xl">Step 2</h2>
                        <h3 className="font-bold text-3xl text-secondary">Connect & Explore</h3>
                        <p className="text-xl">Search the directory, attend virtual workshops, or pitch projects.</p>
                    </div>
                    <div className="min-h-[300px] rounded-lg grid place-content-center gap-3 text-center bg-white p-4">
                        <h2 className="font-bold text-xl">Step 3</h2>
                        <h3 className="font-bold text-3xl text-secondary">Grow Together</h3>
                        <p className="text-xl">Leverage tools and insights to scale your impact.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StepsToSuccess