import { Navbar } from '../../components/index'
import { heroImg } from '../../assets/index';

function Hero() {
  return (
    <div className='hero__info text-left md:bg-cover py-5' style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="container flex flex-col gap-12 md:gap-28">
        <Navbar />
        <div className='md:w-3/4 space-y-4'>
          <h1 className=' md: md:mb-12'>Get The Highest Annuity Rates in July, 2023</h1>
          <div className='md:w-3/5 space-y-4'>
            <h2 className=''>
              Earn the highest returns{" "}
              <span className="underline">without market risk, starting today!</span>
            </h2>
            <p className='md:mr-12'>See why annuities are one of the most secure investment vehicles available. Get guaranteed downside protection against market losses offered by top-rated insurance companies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;