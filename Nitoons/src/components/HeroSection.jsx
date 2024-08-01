import HeaderBanner from '../../src/assets/images/headerBanner.svg';
import Fruitimg from '../../src/assets/images/fruitimg.svg';
import ArrowRight from '../../src/assets/images/circlearrowright.png';
import ArrowLeft from '../../src/assets/images/circlearrowleft.png';
import FirstCarouselImg from '../../src/assets/images/FirstCarouselImg.svg';
import SecondCarouselImg from '../../src/assets/images/SecondCarouselImg.svg';
import ThirdCarouselImg from '../../src/assets/images/ThirdCArouselImg.svg';
import HeroBanner from '../../src/assets/images/heroBanner.svg';
import GreenQuote from '../../src/assets/images/quotegreen.svg';
import QuoteImage from '../../src/assets/images/quote.svg';
import ManImage from '../../src/assets/images/manImg.svg';
import YoutubeIcon from '../../src/assets/images/VectorYoutube.svg';
import InstagramIcon from '../../src/assets/images/VectorIgWHiteLogo.svg';
import FBIcon from '../../src/assets/images/VectorFBWhiteLogo.svg';
import YellowVector from '../../src/assets/images/yellowVector.svg';
import GreenVector from '../../src/assets/images/greenVector.svg';
import GreenVectorUp from '../../src/assets/images/greenVeectorUp.svg';
import { useState } from 'react';
// import BigCircle from "../../src/assets/images/BIGHALFCIRCLE.svg";
// import BigSquare from "../../src/assets/images/BIGSQARE/svg";
// import SmallHalfCircle from "../../src/assets/images/SMALLHALFCIRCLE.src";
// import SmallCell from "../../src/assets/images/SMALLCELL.src";
// import FullCircle from "../../src/assets/images/FULLCIRCLE.svg";
// import Green from '../../src/assets/images/Green.png';
// import Hexagon from '../../src/assets/images/HEXAGON.svg';
// import BigCell from '../../src/assets/images/Bigcell.png';
import Props from "../../src/assets/images/props.png";
import Props2 from "../../src/assets/images/prop1.png";


const slides = [
  {
    id: 'img1',
    body: FirstCarouselImg,
    p1: ' A Beginner’s Guide to Screenplay Writing. Focus on crafting your story not your formatting.',
    p2: 'Learn about screenplay writing',
    alt: 'Carousel Image 2',
  },
  {
    id: 'img2',
    body: SecondCarouselImg,
    p1: " How To Write A Movie Script:A Beginners' Guide. Unlock your story's potential by crafting a compelling movie script that captivates and entertains from the first scene to the last",
    p2: 'Learn about screenplay writing',
    alt: 'Carousel Image 2',
  },
  {
    id: 'img3',
    body: ThirdCarouselImg,
    p1: '  Write a professional and compelling screenplay or script for you.',
    p2: ' Learn scripwriting',
    alt: 'Carousel Image 3',
  },
];

function HeroSection() {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative  flex flex-col justify-center   items-center mt-8 ">
      <div className="mb-36">

    
   
      
        <div className="flex flex-row justify-center items-center ">
          <img src={HeaderBanner} alt="BanneerImg" className="w-[91.7vw]" />
        </div>

        <div className="flex flex-col  justify-center items-center">
          <div className=" flex-row justify-center lg:space-x-4  mt-8  ">
            <button className="hover:bg-[#EBEBEB] cursor-pointer hover:rounded-3xl pr-3  font-medium text-lg hover:bg-medium py-2.5 lg:px-5">
              Filmmaking{' '}
            </button>
            <button className="hover:bg-[#EBEBEB] cursor-pointer hover:rounded-3xl pr-3    font-medium text-lg hover:bg-medium py-2.5 lg:px-5">
              Animation{' '}
            </button>
            <button className="hover:bg-[#EBEBEB] cursor-pointer hover:rounded-3xl pr-3    font-medium text-lg hover:bg-medium py-2.5 lg:px-5">
              Scriptwriting
            </button>
          </div>

          <div className="flex justify-center ">
            <p className=" w-[20rem] md:w-[35rem] text-start lg:text-center my-3 text-lg font-normal font-body ">
              Create thrilling and stunning animations with pro-edit tools
            </p>
          </div>

          <p className="flex flex-row justify-center items-center underline underline-offset-2 cursor-pointer ">
            Explore Tools
          </p>
        </div>

        <div
          className="lg:flex-row lg:items-end flex flex-col 
        "
        >
          <div className=" mb-4  flex flex-col ">
            <img src={QuoteImage} alt="Textquote" className="pb-5 w-[5rem]" />
            <p className="font-normal text-3xl md:w-[40rem] lg:text-[44px] lg:w-[55.7rem] leading-[2.3rem]  w-[21rem] tracking-[0.46px] lg:leading-[48px]  font-body    ">
              This has revolutionized the way I edit videos. The intuitive
              timeline and advanced tools make it easy to create
              professional-quality films. I can't imagine working without it!
            </p>
          </div>
          <div className=" flex flex-row gap-2">
            <img src={ManImage} alt="image of a man" className="w-10" />

            <div className=" flex flex-col ">
              <p className="text-lg font-medium">Fred Adam </p>
              <p className="text-lg font-medium">Head of Design</p>
            </div>
          </div>
        </div>

        
      </div>
      <div className="  bg-teal-500 w-[100vw] lg:w-[71.81rem]">
        <div className="lg:ml-4 ">
          <div className="leading-tigh ml-3 my-12 lg:ml-4">
            <p className="font-bold text-4xl lg:text-[44px] leading-[3.12rem] lg:w-[54.25rem] lg:ml-1 ">
              Master the Art of Animation Editing{' '}
              <span className="font-medium text-4xl lg:text-[44px] ">
                Create stunning animations with the right edits
              </span>
            </p>
          </div>

          <div className=" ">
            <div className="lg:flex lg:flex-row lg:justify-between">
              <div className="lg:w-[42.25rem] lg:mr-10 lg:ml-2 ">
                <p className="lg:text-2xl font-medium text-[1.375rem] ml-3 lg:font-bold">
                  Generate cool effects with AI
                </p>
                <p className="font-normal lg:text-2xl ml-3 text-[1.375rem]">
                  Instantly create effects to make your edits cool
                </p>
                <p className=" ml-3 font-normal text-2xl underline underline-offset-2 cursor-pointer mb-8">
                  Learn more
                </p>
                <hr className=" border-t border-black  pb-1" />

                <p className=" ml-3 lg:text-2xl text-lg lg:font-medium mb-6">
                  Enhance your animation with various visual effects and color
                  filters
                </p>
                <hr className=" border-t border-black  mb-6" />

                <p className=" ml-3 lg:text-2xl text-lg   lg:font-medium  h-[72px] font-body mb-6">
                  Apply smooth transitions between scenes, such as fades, wipes,
                </p>
                <hr className=" border-t border-black   mb-6" />

                <p className=" ml-3 lg:text-2xl text-lg lg:font-medium  mb-6">
                  Adjust colors, contrast, brightness, and saturation
                </p>
                <hr className=" border-t border-black  mb-8" />
              </div>
              <div className="">
                <img src={Fruitimg} alt="" className="pl-16 w-[99vw]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400  ">
        <div className="  lg:items-center lg:flex ">
          <p className="  md:w-[40rem] lg:pl-8 pl-2 lg:w-full font-bold  lg:text-5xl w-[23rem] text-3xl my-8 ">
            Unlock the Power of Words.
            <span className="">
              {' '}
              Write easily with generated AI built for scriptwriters{' '}
            </span>
          </p>
        </div>

        <div className=" overflow-hidden relative">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="flex-none w-full">
                <div className="flex flex-col items-center  mx-auto px-2">
                  <img
                    src={slide.body}
                    alt={slide.alt}
                    className="lg:w-[700px]  w-[18.75rem]"
                  />
                  <p className="lg:text-4xl lg:font-bold my-5 leading-7 text-center">
                    {slide.p1}
                  </p>
                  <p className="underline underline-offset-2 cursor-pointer">
                    {slide.p2}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prev}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <img src={ArrowLeft} alt="Previous" className="" />
            </button>
            <button
              onClick={next}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <img src={ArrowRight} alt="Next" className="" />
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-emerald-200  ">
        <div className="lg:mx-10 lg:ml-10 pl-2 ">
          <p className=" font-body font-light lg:font-normal  text-[2.25rem] lg:text-[44px] leading-tight pt-8">
            Create Cinematic Masterpieces:
            <span className=" font-semibold ">
              Make <br /> Filmmaking Magic Here!
            </span>
          </p>
        </div>

        <div className="flex  flex-col justify-center items-center mt-8 ">
          <img src={HeroBanner} alt="" className="w-[91.7vw]" />
        </div>

        <div className="my-10 lg:flex justify-between lg:mx-10 pl-4 pt-8">
          <div className="">
            <p className="font-body lg:text-2xl  text-[1.375rem] font-bold ">
              Visual Effects and Filters.{' '}
              <span className="lg:text-2xl text-[1.375rem] font-medium">
                Enhance your footage with a range of visual effects and color
                filters. These tools help you achieve the desired look and feel
                for your film.
              </span>
            </p>
          </div>

          <div className="">
            <p className="font-body text-2xl font-bold ">
              Export and Share.{' '}
              <span className="lg:text-2xl text-[1.375rem] font-medium">
                Customize export settings for different platforms and
                resolutions. Share your finished project directly to social
                media.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="  flex lg:flex-row lg:items-end flex-col">
        <div className=" mt-6 mb-4  flex flex-col ">
          <img src={GreenQuote} alt="Textquote" className="pb-5 w-[5rem]" />
          <p className=" md:w-[40rem] font-normal text-3xl lg:text-[44px] lg:w-[55.7rem] leading-[2.3rem]  w-[21rem] tracking-[0.46px] lg:leading-[48px]  font-body    ">
            Exporting and sharing my projects is a breeze. The customizable
            export settings and direct sharing options save me so much time.
          </p>
        </div>
        <div className=" flex flex-row gap-2">
          <img src={ManImage} alt="image of a man" className="w-10" />

          <div className=" flex flex-col ">
            <p className="text-lg font-medium">Fred Adam </p>
            <p className="text-lg font-medium">Head of Design</p>
          </div>
        </div>
      </div>
      
      <div className=''>
        <img src={Props2} alt="" className="w-[98.7vw]"/>
      </div>
      
      
      <div className=" flex flex-row justify-center items-center ">
     
        <button className="bg-black lg:text-[64px] text-[2.5rem] text-white py-1 lg:px-[105px] px-2 rounded-xl font-medium hover:bg-zinc-800">
          {' '}
          Get Started{' '}
        </button>
      </div>

      <div className=''>
        <img src={Props} alt="" className="w-[98.7vw]"/>
      </div>

      {/* <div className="absolute left-0 bottom-130"></div>
      <div>
        <img src={Hexagon} alt="" />
      </div>
      <div>
        <img src={Green} alt="" />
      </div> */}

      {/* <div className=''>
        
        
        <img src={Green} alt="" />
        <img src={BigSquare} alt="" />
        <img src={SmallCell} alt="" />
        <img src={FullCircle} alt="" />
        <img src={Hexagon} alt="" />
        <img src={BigCircle} alt="" />
        <img src={SmallHalfCircle} alt="" />
      </div> */}

      {/* footer */}

      <div className="  bg-black w-full ">
        <div className="  mx-10 lg:mb-36 mb-10 mt-10   ">
          <p className="text-white lg:text-[44px] text-3xl mb-2 font-medium text-body">
            Know how to use Timeline
          </p>
          <div className=" lg:flex ">
            <div className="flex ">
              <p className=" text-white lg:font-medium lg:text-3xl  underline-offset-2 underline  mr-2 cursor-pointer">
                Timeline Edit: Beginner tutorial
              </p>
              <img
                src={YellowVector}
                alt=""
                className="w-[1.75rem] lg:w-[2.438rem]"
              />
            </div>
            <div className="flex lg:flex-row ">
              <p className="text-white lg:font-medium lg:text-3xl  underline-offset-2 underline  mr-2 cursor-pointer ">
                Intro to the editing tools
              </p>
              <img
                src={GreenVector}
                alt=""
                className="w-[1.75rem] lg:w-[2.438rem]"
              />
            </div>
          </div>
          <div className=" flex ">
            <p className="text-white lg:font-medium lg:text-3xl underline-offset-2 underline  mr-2 cursor-pointer">
              Basic Guide to Timeline
            </p>
            <img
              src={GreenVectorUp}
              alt=""
              className="w-[1.75rem] lg:w-[2.438rem]"
            />
          </div>
        </div>

        <div className="lg:flex   justify-between lg:mx-10 mx-10 text-white mb-10">
          <div className="mb-6">
            <p className="text-white text-[40px] font-bold font-poppin">
              Timeline
            </p>
            <div className="flex flex-row space-x-4 ml-2">
              <div className=" bg-stone-600 w-9 h-9 rounded-full flex justify-center items-center">
                <img
                  src={InstagramIcon}
                  alt="instagram icon"
                  className="cursor-pointer "
                />
              </div>
              <div className=" bg-stone-600 w-9 h-9 rounded-full flex justify-center items-center">
                <img
                  src={YoutubeIcon}
                  alt=" youtube icon"
                  className="cursor-pointer "
                />
              </div>

              <div className=" bg-stone-600 w-9 h-9 rounded-full flex justify-center items-center">
                <img
                  src={FBIcon}
                  alt="facebook icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="lg:flex gap-8">
            <div className="flex flex-col lg:space-y-4 space-y-2  cursor-pointer">
              <p className="text-lg font-bold font-poppin cursor-pointer">
                Product
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer">
                Film making
              </p>
              <p className="text-sm font-poppin font-normalcursor-pointer ">
                making
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer">
                Scriptwriting
              </p>
            </div>
            <div className="flex flex-col mt-4 lg:space-y-4 space-y-2  cursor-pointer">
              <p className="text-lg font-bold font-poppin cursor-pointer">
                Resources
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer">
                Collaborative editing
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer">
                Auto transcription
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer ">
                Upscalling
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer">
                Translation
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer ">
                Speech to text
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer">
                Image generation
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer">
                Web based
              </p>
            </div>
            <div className="flex flex-col lg:space-y-4 space-y-2  mt-4">
              <p className="text-lg font-bold font-poppin cursor-pointer">
                Use Cases
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer ">
                Visual effects
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer">
                Color enhancement
              </p>
              <p className="text-sm font-poppin font-normal ">
                Screenplay writing
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer ">
                Export
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer">
                Generative AI
              </p>
            </div>
            <div className=" mt-4 flex flex-col lg:space-y-4 space-y-2 pt- ">
              <p className="text-lg font-bold font-poppin cursor-pointer">
                Company
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer ">
                Get Started
              </p>
              <p className="text-sm font-poppin font-normal cursor-pointer ">
                About Us
              </p>
              <p className="text-sm font-poppin font-normal  cursor-pointer">
                Customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
    </div>
  );
}

export default HeroSection;
