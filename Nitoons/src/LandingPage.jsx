import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

const LandingPage = () => {
  return (
    <>
      <div className="min:w-[75rem]  ">

      <NavBar />
      <Header />
      <HeroSection />
      </div>
    </>
  );
};

export default LandingPage;
