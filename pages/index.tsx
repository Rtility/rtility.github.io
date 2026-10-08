import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Partners from '../components/Partners'
import Alphabet from '../components/Alphabet'
import Services from '../components/Services'
import Nav from '../components/Nav'
import FilledButton from '../components/FilledButton'
import OutlineButton from '../components/OutlineButton'
import Work from '../components/Work'
import OpenSource, { openSourceRepos } from '../components/OpenSource'
import Technologies from '../components/Technologies'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { site } from '../data/site'

type Props = { stars: Record<string, number> }

const Home: NextPage<Props> = ({ stars }) => {
  const title = 'Rtility · Smart contracts, NFTs and Web3 apps'

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content={site.description} />
        <link rel="canonical" href={`${site.url}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:url" content={`${site.url}/`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={site.twitterHandle} />
      </Head>
      <header className="container mx-auto">
        <Nav />
        <div className="mt-8 flex flex-wrap-reverse items-center justify-around lg:mt-[7.31rem]">
          <section className="mt-[94px] flex flex-col items-center px-6 lg:mt-0 lg:block lg:px-0">
            <Link href="/#alphabet">
              <a className="inline-flex h-[2.5rem] items-center justify-center rounded-[5px] bg-[#131938] px-4 text-sm transition hover:bg-[#1a2150]">
                <span className="pr-[10px] text-[#565F8F]">
                  Alphabet is coming
                </span>
                <span className="pr-[6px] text-[#00D2EF]">See it</span>
                <img
                  src="/images/ArrowRight.svg"
                  alt=""
                  className="w-[4.73px]"
                />
              </a>
            </Link>
            <h1 className="mt-[1.69rem] text-center text-[36px] font-semibold text-white lg:text-left lg:text-[57px]">
              Welcome to RTILITY
              <span className="text-gradient1 block">a Bridge to Web3</span>
            </h1>
            <p className="mt-6 max-w-[30rem] text-center text-lg text-[#7981A3] lg:text-left lg:text-xl">
              Art + Utility. We design, build and audit smart contracts, NFT
              collections and web apps for NFT projects, DAOs and Web3 teams,
              and we build our own, starting with Alphabet.
            </p>
            <section className="mt-[1.68rem] flex flex-wrap justify-center gap-4 lg:mt-[3.5rem] lg:justify-start">
              <FilledButton text="Contact us" href="#contact" />
              <OutlineButton text="See our work" href="#work" />
            </section>
            <p className="mt-8 flex items-center gap-3 text-sm text-[#7981A3]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#62FCDD] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#62FCDD]" />
              </span>
              Active since {site.activeSince}
            </p>
          </section>
          <img
            src="/images/headerImg.svg"
            alt="Two hands reaching through a portal"
            className="header-image lg:w-[440px] xl:w-auto"
          />
        </div>
      </header>
      <main className="container mx-auto">
        <Alphabet />
        <Partners />
        <Services />
        <Work />
        <OpenSource stars={stars} />
        <Technologies />
        <Team />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

// Star counts are read once at build time; if GitHub is unreachable the cards just hide them
export const getStaticProps: GetStaticProps<Props> = async () => {
  const stars: Record<string, number> = {}
  try {
    const res = await fetch(
      'https://api.github.com/orgs/Rtility/repos?type=public&per_page=100'
    )
    if (res.ok) {
      const repos: { name: string; stargazers_count: number }[] =
        await res.json()
      for (const repo of repos) {
        if (openSourceRepos.some((item) => item.repo === repo.name))
          stars[repo.name] = repo.stargazers_count
      }
    }
  } catch (err) {
    console.warn('Could not fetch GitHub star counts', err)
  }
  return { props: { stars } }
}

export default Home
