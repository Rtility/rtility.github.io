import type { NextPage } from 'next'
import Head from 'next/head'
import Partners from '../components/Partners';
import Services from '../components/Services';
import Nav from './../components/Nav';
import FilledButton from './../components/FilledButton';
import Technologies from './../components/Technologies';
import Team from './../components/Team';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Rtility</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Nav />
        <div className='flex justify-around items-center mt-[7.31rem]'>
          <section>
            <section className='flex items-center justify-center w-[15.5rem] h-[2.5rem] bg-[#131938] rounded-[5px] text-sm'>
              <p className='text-[#565F8F] pr-[10px]'>Maybe Some News Here!</p>
              <p className='text-[#00D2EF] pr-[6px]'>See It</p>
              <img src='/images/ArrowRight.svg' alt='Arrow Right' className='w-[4.73px]' loading='lazy'/>
            </section>
            <p className='text-white text-[57px] font-semibold mt-[1.69rem]'>Wellcome To RTILITY<p className='text-gradient1'>a Bridge To Web3</p></p>

            <section className='mt-[4.56rem]'>
              <FilledButton text="Contact us" />
            </section>

          </section>
          <img src='/images/headerImg.svg' alt='header' loading='lazy'/>
        </div>
      </header>
      <main>
        <Partners />
        <Services />
        <Technologies />
        <Team />
      </main>
    </div>
  )
}

export default Home
