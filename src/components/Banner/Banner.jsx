const Banner = () => {
    return (
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between">
            <div className="flex-1">
                <h2 className="text-5xl leading-tight font-bold mb-4">One Step <br /> Closer To Your <br /> <span className="text-blue-500">Dream Job</span></h2>
                <p className="mb-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg">Get Started</button>
            </div>
            <div className="flex-1">
                <img className="w-full" src="../../../images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;