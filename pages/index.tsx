import type { NextPage } from 'next'
import Head from 'next/head'
import Partners from '../components/Partners';
import Services from '../components/Services';
import Nav from './../components/Nav';
import FilledButton from './../components/FilledButton';
import Technologies from './../components/Technologies';
import Team from './../components/Team';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rtility</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <header className='container mx-auto'>
        <Nav />
        <div className='flex justify-around items-center mt-8 lg:mt-[7.31rem] flex-wrap-reverse'>
          <section className='mt-[94px] lg:mt-0 flex flex-col items-center lg:block'>
            <section className='flex items-center justify-center w-[15.5rem] h-[2.5rem] bg-[#131938] rounded-[5px] text-sm'>
              <p className='text-[#565F8F] pr-[10px]'>Maybe Some News Here!</p>
              <p className='text-[#00D2EF] pr-[6px]'>See It</p>
              <img src='/images/ArrowRight.svg' alt='Arrow Right' className='w-[4.73px]' loading='lazy' />
            </section>
            <p className='text-white text-center lg:text-left text-[36px] lg:text-[57px] font-semibold mt-[1.69rem]'>Wellcome To RTILITY<br/><span className='text-gradient1'>a Bridge To Web3</span></p>

            <section className='mt-[1.68rem] lg:mt-[4.56rem]'>
              <FilledButton text="Contact us" />
            </section>

          </section>
          <img src='/images/headerImg.svg' alt='header' loading='lazy' className='header-image' />
        </div>
      </header>
      <main className='container mx-auto'>
        <Partners />
        <Services />
        <Technologies />
        <Team />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
