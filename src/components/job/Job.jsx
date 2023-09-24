/* eslint-disable react/prop-types */
const Job = ({ job }) => {
    // eslint-disable-next-line no-unused-vars
    const { logo, job_title, company_name, location, job_type, salary, remote_or_onsite } = job;
    return (
        <div className="bg-white shadow-lg rounded-xl p-3">
            <img className="w-40" src={logo} alt="" />
            <h2 className="text-xl font-semibold mb-2 mt-2">{job_title}</h2>
            <h3 className="font-medium mb-2">{company_name}</h3>
            <div className="flex items-center mb-3">
                <div>
                    <button className="bg-orange-200 px-4 py-1 rounded-sm text-black">{remote_or_onsite}</button>
                </div>
                <div className="ml-5">
                    <button className="bg-orange-200 px-4 py-1 rounded-sm text-black">{remote_or_onsite}</button>
                </div>
            </div>
            <div className="flex items-center mb-3">
                <p>{location}</p>
                <p className="ml-5">Salary : {salary}</p>
            </div>
            <div>
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg">Vew Details</button>
            </div>
        </div>
    );
};

export default Job;