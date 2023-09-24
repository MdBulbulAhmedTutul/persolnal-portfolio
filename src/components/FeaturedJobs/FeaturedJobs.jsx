import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = () => {
    const [jobs, setjobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setjobs(data))
    },[])
    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;