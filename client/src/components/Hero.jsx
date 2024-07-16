import {Typewriter} from 'react-simple-typewriter'

const Hero = () => {
  return (
    <>
    <section className="h-[80vh] w-full bg-[linear-gradient(rgb(4_3_3/60%),rgb(0_0_0/33%)),url(components/assets/pic.webp)] bg-center bg-cover bg-no-repeat relative">
    <div className="hidden absolute cursor-pointer text-[33px] text-[antiquewhite] right-[5%] top-[15px]">&#9776;</div>
    <div className="flex justify-center items-center text-white flex-col w-2/5 h-[60vh] m-auto">
        <p className="text-[#9c8c7a] tracking-[2px] uppercase mb-4">Chocolate Products</p>
        {/* <h1 className="text-5xl font-bold mb-4 text-[#ff6b00] text-[75px] font-Courgette  italic">Dark Chocolate</h1> */}
        <span className="text-5xl font-bold mb-4 text-[#ff6b00] text-[75px] font-Courgette  italic">
                 <Typewriter words={[' Milk Chocolate', ' Dark Chocolate', ' White Chocolate']} loop cursor cursorStyle='' typeSpeed={70}  deleteSpeed={50}  delaySpeed={1000} />
         </span>
        <p className="text-[15px] text-[#9c8c7a] px-4 py-2 mb-6 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quae sint eum repellendus temporibus minus incidunt necessitatibus harum sapiente numquam, natus animi tenetur corrupti recusandae quia veritatis cumque tempore praesentium!</p>
        <button className="bg-[chocolate] text-white text-lg cursor-pointer px-10 py-3 border-none hover:bg-[#9c8c7a] hover:text-black tracking-[1px] mt-2 rounded-[20px] transition duration-300">Details</button>
    </div>
</section>

      
    </>
  )
}

export default Hero
