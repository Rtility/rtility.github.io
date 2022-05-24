import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from './../components/Nav';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Rtility</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Nav />
        <div className='flex justify-evenly items-center mt-[7.31rem]'>
          <section>
            <section className='flex items-center justify-center w-[15.5rem] h-[2.5rem] bg-[#131938] rounded-[5px] text-sm'>
              <p className='text-[#565F8F] pr-[10px]'>Maybe Some News Here!</p>
              <p className='text-[#00D2EF] pr-[6px]'>See It</p>
              <img src='/images/ArrowRight.svg' alt='Arrow Right' className='w-[4.73px]' />
            </section>
            <p className='text-white text-[57px] font-semibold mt-[1.69rem]'>Wellcome To RTILITY<p className='header-text-gradient'>a Bridge To Web3</p></p>
          </section>
          <img src='/images/headerImg.svg' alt='header' />
        </div>
      </header>

    </div>
  )
}

export default Home
