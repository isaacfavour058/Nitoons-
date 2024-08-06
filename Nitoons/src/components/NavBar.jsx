import React, { useState } from 'react';
import Logo from '../../src/assets/images/logo.png';
import SideBarArrow from '../../src/assets/images/sideBarArrow.svg';
import ArrowDown from '../../src/assets/images/arrowDown.svg';
import Cancel from '../../src/assets/images/cancel.svg';
import ArrowRight from '../../src/assets/images/ArrowRight.svg';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { title: 'Contact Us', img: ArrowDown },
    { title: 'Courses', img: ArrowDown },
    { title: 'Help', img: ArrowDown },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="lg:px-8  px-5">
      <div className="flex flex-row justify-between items-center ">
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="flex flex-row justify-center align-middle items-center">
            <img src={Logo} alt="Logo" className="cursor-pointer" />
          </div>

          <div className="flex-row justify-center items-center hidden lg:flex gap-4">
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                <p className="cursor-pointer font-normal text-lg">
                  {item.title}
                </p>
                <img src={item.img} alt="" />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="py-5 flex flex-row space-x-4">
          <button className="hidden lg:block border border-black hover:bg-gray-100 solid py-3 px-5 rounded-md items-center align-middle content-center max-xs:hidden">
            Login
          </button>

          <button
            className="bg-black max-xs:mr-11 text-white py-3 px-12 rounded-lg hidden lg:block hover:bg-slate-800 max-xs:ml-20 relative"
            onClick={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            SignUp{' '}
            {isHovered ? (
              <img src={ArrowRight} className="inline-block ml-2" />
            ) : null}
          </button>

          <button onClick={toggleMobileMenu} className="lg:hidden">
            <img
              src={isMobileMenuOpen ? Cancel : SideBarArrow}
              alt="Menu toggle"
            />
          </button>
        </div>
      </div>

      {/* mobile view */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg px-4">
          <hr className="text-black pb-5 w-left" />
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <p className="cursor-pointer font-medium text-lg pb-2">
                {item.title}
              </p>
              <hr className="text-black font-medium pb-5 w-left" />
            </React.Fragment>
          ))}
          <button className="w-full bg-black text-white py-3 px-12 rounded-lg hover:bg-slate-800 mb-4">
            SignUp
          </button>
          <button className="w-full border border-black hover:bg-gray-100 solid py-3 px-5 rounded-md mb-4">
            Login
          </button>
        </div>
      )}

      {/* the hero section */}

      {/* the main body */}
    </div>
  );
};

export default NavBar;
