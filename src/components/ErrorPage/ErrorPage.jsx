import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-48">
            <h2 className="text-2xl font-bold">Opps Sory dont Create Content!!!</h2>
            <button className="bg-orange-500 text-white font-semibold mt-3 px-4 py-2 rounded-lg"><Link to="/">Back to Home</Link></button>
        </div>
    );
};

export default ErrorPage;