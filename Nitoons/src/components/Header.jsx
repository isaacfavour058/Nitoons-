const Header = () => {
  return (
    <div className=" lg:px-8 px-5">
      <div className="  mt-14 ">
        <h1  className=" lg:w-[43.75rem] font-bold lg:text-6xl text-4xl h-auto ">
          The Future Is Here. Work Smarter.
        </h1>

        <p className="lg:w-[31.25rem] h-[116px] text-xl  font-medium  mb-4 font-poppin">
          Timeline helps in editing and development of filmmaking, animation
          production and scriptwriting with the use of AI
        </p>

        <button className="bg-black text-lg text-white py-2 px-10 rounded-lg font-medium hover:bg-zinc-800">
          {' '}
          Get Started{' '}
        </button>
      </div>
    </div>
  );
};

export default Header;
