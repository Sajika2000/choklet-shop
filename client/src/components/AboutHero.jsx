const AboutHero = () => {
    return (
      <section className="relative h-[45vh] mb-10 bg-cover bg-center bg-[linear-gradient(rgb(4_3_3/60%),rgb(0_0_0/33%)),url(components/assets/pic2.jpg)] bg-opacity-30">
        <div className="absolute flex items-center justify-center w-full h-full">
          <div className="z-20 w-10/12 p-6 text-center bg-white rounded-lg shadow-lg mt-72 bg-opacity-80 md:w-1/2 hover:opacity-80">
            <h1 className="text-[#ff6b00] text-[75px] font-bold mb-4 italic">About</h1>
            <p className="mb-4 text-sm  md:text-base text-[14px] text-[#9c8c7a] leading-[1.6] z-20 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae ullam dolorum officiis mollitia laboriosam distinctio ratione dolor. Facere at laborum libero dolorum excepturi, quidem nulla enim amet cupiditate voluptatem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo praesentium cupiditate! Culpa perspiciatis ex iste deleniti inventore! Placeat adipisci quis cumque magnam vel omnis quia tempore quasi possimus maiores.
            </p>
            <button className="px-8 py-2 mt-4 text-lg tracking-wide text-white transition-colors duration-300 bg-orange-600 rounded-full hover:bg-orange-400">
              More Info
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutHero;
  