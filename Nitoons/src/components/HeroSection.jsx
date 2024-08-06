import HeaderBanner from '../../src/assets/images/headerBanner.svg';
import Fruitimg from '../../src/assets/images/fruitimg.svg';
import ArrowRight from '../../src/assets/images/circlearrowright.png';
import ArrowLeft from '../../src/assets/images/circlearrowleft.png';
import FirstCarouselImg from '../../src/assets/images/FirstCarouselImg.svg';
import SecondCarouselImg from '../../src/assets/images/SecondCarouselImg.svg';
import ThirdCarouselImg from '../../src/assets/images/ThirdCArouselImg.svg';
import HeroBanner from '../../src/assets/images/heroBanner.svg';
import ManImage from '../../src/assets/images/manImg.svg';
import YoutubeIcon from '../../src/assets/images/VectorYoutube.svg';
import InstagramIcon from '../../src/assets/images/VectorIgWHiteLogo.svg';
import FBIcon from '../../src/assets/images/VectorFBWhiteLogo.svg';
import YellowVector from '../../src/assets/images/yellowVector.svg';
import GreenVector from '../../src/assets/images/greenVector.svg';
import GreenVectorUp from '../../src/assets/images/greenVeectorUp.svg';
import { useState } from 'react';
import NavyGreenQuote from '../../src/assets/images/navyGreenQuote.svg';
// import BigCircle from "../../src/assets/images/BIGHALFCIRCLE.svg";
// import BigSquare from "../../src/assets/images/BIGSQARE/svg";
// import SmallHalfCircle from "../../src/assets/images/SMALLHALFCIRCLE.src";
// import SmallCell from "../../src/assets/images/SMALLCELL.src";
// import FullCircle from "../../src/assets/images/FULLCIRCLE.svg";
// import Green from '../../src/assets/images/Green.png';
// import Hexagon from '../../src/assets/images/HEXAGON.svg';
// import BigCell from '../../src/assets/images/Bigcell.png';
import Props from '../../src/assets/images/props.png';
import Props2 from '../../src/assets/images/prop1.png';
import LightBlueQuote from '../../src/assets/images/lightBlueQuote.svg';

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
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="flex-col justify-center items-center mt-8 ">
      <div className=" mb-36 ">
        <div className="flex flex-row justify-center items-center lg:px-8 px-5  ">
          <img src={HeaderBanner} alt="BanneerImg" className="w-full" />
        </div>

        <div className="flex flex-col  justify-center items-center">
          <div className=" flex-row  justify-center lg:space-x-4  mt-8  ">
            <button className="hover:bg-[#EBEBEB] font-mori cursor-pointer hover:rounded-3xl pr-3  font-medium text-lg hover:bg-medium py-2.5 lg:px-5">
              Filmmaking{' '}
            </button>
            <button className="hover:bg-[#EBEBEB] font-mori  cursor-pointer hover:rounded-3xl pr-3 font-medium text-lg hover:bg-medium py-2.5 lg:px-5">
              Animation{' '}
            </button>
            <button className="hover:bg-[#EBEBEB] font-mori cursor-pointer hover:rounded-3xl pr-3 font-medium text-lg hover:bg-medium py-2.5 lg:px-5">
              Scriptwriting
            </button>
          </div>

          <div className="flex justify-center  ">
            <p className=" font-mori w-[20rem] md:w-[35rem] text-start lg:text-center my-3 text-lg font-normal  ">
              Create thrilling and stunning animations with pro-edit tools
            </p>
          </div>

          <p className=" font-mori flex flex-row justify-center items-center underline underline-offset-2 cursor-pointer ">
            Explore Tools
          </p>
        </div>

        <div
          className="lg:flex-row lg:items-end flex flex-col lg:px-8 px-5
        "
        >
          <div className=" mb-4  flex flex-col ">
            <img
              src={LightBlueQuote}
              alt="Textquote"
              className="pb-5 w-[5rem]"
            />
            <p className=" font-mori font-normal text-3xl md:w-[40rem] lg:text-[44px] lg:w-[55.7rem] leading-[2.3rem]  w-[21rem] tracking-[0.46px] lg:leading-[48px]  ">
              This has revolutionized the way I edit videos. The intuitive
              timeline and advanced tools make it easy to create
              professional-quality films. I can't imagine working without it!
            </p>
          </div>
          <div className=" flex flex-row gap-2">
            <img src={ManImage} alt="image of a man" className="w-10" />

            <div className=" flex flex-col ">
              <p className=" font-mori text-lg font-medium">Fred Adam </p>
              <p className=" font-mori text-lg font-medium">Head of Design</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-teal-500 w-full  ">
        <div className="leading-tigh py-10 lg:px-8 px-5  ">
          <p className="font-mori font-bold text-4xl lg:text-[44px] leading-10 pb-10 lg:w-[54.25rem] lg:ml-1 ">
            Master the Art of Animation Editing
            <span className="font-mori font-medium text-4xl lg:text-[44px] ">
              Create stunning animations with the right edits
            </span>
          </p>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-between">
          <div className="lg:w-[42.25rem] lg:mr-10 lg:ml-2 lg:px-8 px-5    ">
            <p className="font-mori lg:text-2xl font-medium text-[1.375rem] lg:font-bold">
              Generate cool effects with AI
            </p>
            <p className="font-mori font-normal lg:text-xl  text-[1.375rem]">
              Instantly create effects to make your edits cool
            </p>
            <p className="font-mori font-normal text-xl underline underline-offset-2 cursor-pointer mb-8">
              Learn more
            </p>
            <hr className=" border-t border-black  pb-1" />

            <p className=" font-mori lg:text-xl text-lg lg:font-medium mb-6">
              Enhance your animation with various visual effects and color
              filters
            </p>
            <hr className=" border-t border-black  mb-6" />

            <p className=" font-mori lg:text-xl text-lg   lg:font-medium  h-[72px]  mb-6">
              Apply smooth transitions between scenes, such as fades, wipes,
            </p>
            <hr className=" border-t border-black   mb-6" />

            <p className="font-mori lg:text-xl text-lg lg:font-medium  mb-6">
              Adjust colors, contrast, brightness, and saturation
            </p>
            <hr className=" border-t border-black  mb-8" />
          </div>
          <div className="">
            <img src={Fruitimg} alt="" className="pl-16 w-[99vw]" />
          </div>
        </div>
      </div>

      <div className="bg-[#28A0B5] w-full lg:px-8 px-5 pb-6">
        <div className="">
          <p className="  font-mori lg:w-[42rem] lg:font-semibold font-bold  py-8  lg:text-5xl w-[23rem] text-3xl">
            Unlock the Power of Words.
            <span className="font-mori font-normal">
              {' '}
              Write easily with generated AI built for scriptwriters{' '}
            </span>
          </p>
        </div>

        {/* Carousel controls and counter */}

        <div className="flex items-center justify-between gap-2 py-6">
          <div className="text-black font-normal">
            {curr + 1} / {slides.length}
          </div>
          <div className="space-x-1">
            <button onClick={prev} className=" rounded-full bg-white shadow">
              <img src={ArrowLeft} alt="Previous" className="w-6 h-6" />
            </button>
            <button onClick={next} className=" rounded-full bg-white shadow">
              <img src={ArrowRight} alt="Next" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel content */}
        <div className="overflow-hidden relative w-full mx-auto">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {slides.map((_,index) => (
              <div key={index} className="flex-none w-full">
                <div className="flex overflow-x-auto snap-x snap-mandatory">
                  {slides.slice(index, index + 3).map((s) => (
                    <div
                      key={s.id}
                      className="w-[80vw] sm:w-[350px] flex-shrink-0 snap-center px-2"
                    >
                      <img
                        src={s.body}
                        alt={s.alt}
                        className="w-full h-[200px] sm:h-[250px] object-cover"
                      />
                      <p className="text-start font-mori text-base sm:text-lg font-semibold my-2 sm:my-3 leading-tight overflow-hidden line-clamp-2">
                        {s.p1}
                      </p>
                      <p className="font-mori text-sm underline underline-offset-2 cursor-pointer truncate">
                        {s.p2}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" bg-emerald-200 w-full  lg:px-8 px-5 ">
        <div className=" ">
          <p className=" font-mori font-light lg:font-normal  text-[2.25rem] lg:text-[44px] leading-tight pt-8">
            Create Cinematic Masterpieces:
            <span className="font-mori font-semibold ">
              Make <br /> Filmmaking Magic Here!
            </span>
          </p>
        </div>

        <div className="flex  flex-col justify-center items-center mt-8 ">
          <img src={HeroBanner} alt="" className="w-full" />
        </div>

        <div className="w-full my-5 gap-7 lg:flex justify-between pb-6 pt-8 font-mori">
          <p className="font-mori lg:text-2xl  text-[1.375rem] font-semibold ">
            Visual Effects and Filters.{' '}
            <span className="lg:text-2xl text-[1.375rem] font-normal">
              Enhance your footage with a range of visual effects and color
              filters. These tools help you achieve the desired look and feel
              for your film.
            </span>
          </p>

          <p className="lg:text-2xl font-mori text-[1.375rem] font-semibold">
            Export and Share.{' '}
            <span className="lg:text-2xl text-[1.375rem] font-normal">
              Customize export settings for different platforms and resolutions.
              Share your finished project directly to social media.
            </span>
          </p>
        </div>
      </div>
      {/* 
      <div
          className="lg:flex-row lg:items-end flex flex-col 
        "
        >
          <div className=" mb-4  flex flex-col ">
            <img src={LightBlueQuote} alt="Textquote" className="pb-5 w-[5rem]" />
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
        </div> */}

      <div className="lg:flex-row lg:items-end  flex flex-col lg:px-8 px-5 ">
        <div className=" mb-4  flex flex-col ">
          <img
            src={NavyGreenQuote}
            alt="Textquote"
            className="pb-5 w-[5rem] "
          />
          <p className="font-mori font-normal text-3xl md:w-[40rem] lg:text-[44px] lg:w-[55.7rem] leading-[2.3rem]  w-[21rem] tracking-[0.46px] lg:leading-[48px]  ">
            Exporting and sharing my projects is a breeze. The customizable
            export settings and direct sharing options save me so much time.
          </p>
        </div>
        <div className=" flex flex-row gap-2">
          <img src={ManImage} alt="image of a man" className="w-10" />

          <div className=" flex flex-col ">
            <p className="text-lg font-medium font-mori">Fred Adam </p>
            <p className="text-lg font-medium font-mori">Head of Design</p>
          </div>
        </div>
      </div>

      <div className="">
        <img src={Props2} alt="" className="w-[98.7vw]" />
      </div>

      <div className=" flex flex-row justify-center items-center ">
        <button className="font-mori  hover:rounded-0 bg-black lg:text-[64px]  text-[2.5rem] text-white px-16  rounded-2xl font-medium hover:bg-zinc-800">
          Get Started
        </button>
      </div>

      <div className="">
        <img src={Props} alt="" className="w-[98.7vw]" />
      </div>

      <div className=" bg-black lg:h-[42rem] h-[65rem] font-mori  ">
        <div className="  mx-5 lg:mb-36  mt-10 pt-10 ">
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

        <div className="lg:flex  pb-10 justify-between lg:mx-10 mx-5 text-white mb-10">
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
                Making
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
            <div className=" mt-4 flex flex-col lg:space-y-4 space-y-2  ">
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
