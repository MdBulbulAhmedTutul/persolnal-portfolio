import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Joblist from "../Joblist/Joblist";

const Home = () => {
    return (
        <div>
            <div className="my-16">
                <Banner></Banner>
            </div>
            <div className="my-24">
                <Joblist></Joblist>
            </div>
            <div className="my-24">
                <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;