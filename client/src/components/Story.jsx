import img1 from '../components/assets/pic2.jpg'

const Story = () => {
  return (
    <>
      <section className="w-4/5 text-center m-auto px-0 py-[3%]">
        <p className="text-[#9c8c7a] tracking-[2px] uppercase">Since 2021</p>
        <h1 className="text-[#ff6b00] text-[75px] font-bold mb-6">Our Story</h1>
        <div className="flex justify-between mx-0 my-[2%] items-center">
          <div className="w-[35%] text-left">
            <h1 className="text-[28px] font-semibold mb-4">Chocolate with the Story</h1>
            <p className="text-[14px] text-[#9c8c7a] leading-[1.6] mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis nobis quas eveniet iure deleniti nostrum totam? Maiores dolores fugit odit, esse praesentium blanditiis beatae maxime deserunt doloremque adipisci voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi tempora quod provident, facere, repellendus delectus facilis pariatur unde magnam dignissimos error similique, adipisci amet temporibus commodi laborum accusamus repudiandae.</p>
            <button className="bg-[chocolate] text-white text-lg cursor-pointer px-[39px] py-3 border-none hover:bg-[#9c8c7a] hover:text-black tracking-[1px] mt-[2%] rounded-[20px] transition duration-300">History</button>
          </div>
          <div className="w-[60%]">
            <img className='w-full rounded-lg shadow-lg' src={img1} alt='Story Image' />
          </div> 
        </div>
      </section>
    </>
  )
}

export default Story
