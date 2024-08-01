import Logo from '../../src/assets/images/logo.png';
import SideBarArrow from '../../src/assets/images/sideBarArrow.svg';
import ArrowDown from '../../src/assets/images/arrowDown.svg';

const NavBar = () => {
  return (
    <div className=" ">
      <div className=" flex flex-row justify-between items-center lg:px-8 px-5 ">
        <div className="flex flex-row justify-between  items-center space-x-2 ">
          <div className="flex flex-row justify-center align-middle items-center">
            <img src={Logo} alt="" className=" cursor-pointer" />
          </div>

          <div className="flex-row justify-center items-center hidden lg:flex space-x-4">
            <p className=" cursor-pointer font-normal text-lg">Contact</p>
            <img src={ArrowDown} alt="" />
            <p className="cursor-pointer font-normal text-lg">Courses</p>
            <img src={ArrowDown} alt="" />
            <p className=" cursor-pointer font-normal text-lg">Contact</p>
            <img src={ArrowDown} alt="" />
          </div>
        </div>

        <div className="  py-5 flex flex-row  space-x-4 ">
          <button className="hidden lg:block  border border-black hover:bg-gray-100 solid py-3 px-5 rounded-md items-center align-middle content-center max-xs:hidden ">
            {' '}
            Login{' '}
          </button>

          <button className="bg-black max-xs:mr-11 text-white py-3 px-12 rounded-lg hidden lg:block hover:bg-slate-800 max-xs:ml-20">
            {' '} 
            SignUp{' '}
          </button>

          <img src={SideBarArrow} alt="" className="" />
        </div>
      </div>

      {/* the hero section */}

      {/* the main body */}
    </div>
  );
};

export default NavBar;
