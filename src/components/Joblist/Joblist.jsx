import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import Item from "../Item/Item";

const Joblist = () => {
    const [items, setjob] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setjob(data))
    }, [])
    return (
        <div>
            <div className="mb-10">
                <h2 className="text-3xl font-semibold text-center mb-2">Job Category List</h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    items.map(item => <Item key={item.id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Joblist;