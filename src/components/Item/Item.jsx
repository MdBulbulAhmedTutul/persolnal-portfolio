/* eslint-disable react/prop-types */
const Item = ({ item }) => {
    // eslint-disable-next-line no-unused-vars
    const { id, logo, category_name, availability } = item;
    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <img src={logo} alt="" />
            <h2 className="text-xl font-medium mb-1 mt-2">{category_name}</h2>
            <p className="font-medium">{availability}</p>
        </div>
    );
};

export default Item;