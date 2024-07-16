
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCart = ({ img, title, price }) => {
  return (
    <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg shadow-lg hover:opacity-40">
      <div className="overflow-hidden rounded-lg">
        <img className="w-full object-cover h-48 rounded-lg" src={img} alt={title} />
      </div>
      <div className="flex flex-col items-center mt-5 gap-3">
        <h2 className="font-semibold text-xl text-gray-800">{title}</h2>
        <h3 className="font-semibold text-lg text-gray-700">{price}</h3>
        <div className="flex justify-center items-center mt-3">
            <span className='flex items-center ] px-6 py-2 rounded cursor-pointer bg-[chocolate] hover:bg-[#9c8c7a]'>
            <FaShoppingCart size={20} className="  text-white  hover:text-black w-full " />
            </span>
        </div>
      </div>
    </div>
  );
};

ProductCart.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCart;
