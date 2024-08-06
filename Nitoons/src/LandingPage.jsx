import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

const LandingPage = () => {
  return (
    <>
      <div className="max-w-[75rem] w-full   ">

      <NavBar />
      <Header />
      <HeroSection />
      </div>
    </>
  );
};

export default LandingPage;
