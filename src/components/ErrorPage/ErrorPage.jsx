import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-48">
            <h2 className="text-2xl font-bold mb-3">Opps Sory dont Create Content!!!</h2>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg"><Link to="/">Back to Home</Link></button>
        </div>
    );
};

export default ErrorPage;