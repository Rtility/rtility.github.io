import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import FilledButton from '../components/FilledButton'
import OutlineButton from '../components/OutlineButton'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found · Rtility</title>
        <meta name="robots" content="noindex" />
      </Head>
      <header className="container mx-auto">
        <Nav />
      </header>
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#8F90FE] opacity-20 blur-[150px]" />
        <div className="container mx-auto flex flex-col items-center px-6 py-24 text-center lg:py-36">
          <h1 className="text-gradient1 text-[96px] font-semibold leading-none lg:text-[180px]">
            404
          </h1>
          <p className="mt-6 text-xl text-[#7981A3] lg:text-2xl">
            This page wandered off the chain.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <FilledButton text="Back home" href="/" />
            <OutlineButton text="See our work" href="/#work" />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
