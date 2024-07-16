import  { useRef } from 'react';
import ProductCart from "../layout/ProductCart";
import img1 from '../components/assets/png1.png';
import img2 from '../components/assets/png2.png';
import img3 from '../components/assets/png3.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductMenu = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= 300; // Adjust this value based on the width of the items
    } else {
      scrollRef.current.scrollLeft += 300; // Adjust this value based on the width of the items
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#42332f] p-3">
      <p className="text-center text-[#9c8c7a] tracking-[2px] uppercase">100+ PRODUCTS</p>
      <h1 className="text-[#ff6b00] text-[75px] font-bold mb-6 text-center">Our Best Product</h1>
      <div className="relative flex items-center justify-center">
        <FaArrowLeft 
          className="absolute left-2 text-white cursor-pointer z-10" 
          onClick={() => scroll('left')} 
          size={30} 
        />
        <div 
          className="flex overflow-x-scroll scrollbar-hide gap-8" 
          ref={scrollRef}
          style={{ maxWidth: '900px' }} 
        >
          <div className="flex space-x-8">
            <ProductCart img={img1} title="Dark Chocolate" price="10$" />
            <ProductCart img={img2} title="Milk Chocolate" price="15$" />
            <ProductCart img={img3} title="Dark Chocolate" price="13$" />
            <ProductCart img={img2} title="Milk Chocolate" price="15$" />
            <ProductCart img={img3} title="Dark Chocolate" price="13$" />
            
            
           
          </div>
        </div>
        <FaArrowRight 
          className="absolute right-2 text-white cursor-pointer z-10" 
          onClick={() => scroll('right')} 
          size={30} 
        />
      </div>
    </div>
  );
};

export default ProductMenu;
