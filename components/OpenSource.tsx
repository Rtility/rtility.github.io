import React, { FC } from 'react'
import Link from 'next/link'
import { site } from '../data/site'

export const openSourceRepos = [
  {
    repo: 'ERC721AStaker',
    description:
      'Soft staking for ERC721A collections. Holders earn ERC-20 rewards every second while the NFT stays in their wallet.',
    language: 'Solidity',
    caseStudy: '/projects/erc721a-staker',
  },
  {
    repo: 'payment-splitter',
    description:
      'Gas-efficient two-wallet splitter for ETH and any ERC-20, with 100% line coverage and a Dockerized payment listener.',
    language: 'Solidity',
    caseStudy: '/projects/payment-splitter',
  },
  {
    repo: 'artsdao_ethernalgates',
    description:
      'The Ethernal Gates mint contract for Arts DAO, together with our published security audit report.',
    language: 'Solidity',
    caseStudy: '/projects/ethernal-gates',
  },
  {
    repo: 'hardhat-ts-template',
    description:
      'Our Hardhat + TypeScript starter with TypeChain, gas reporting, coverage, Solhint and Etherscan verification wired up.',
    language: 'TypeScript',
  },
]

const languageColors: Record<string, string> = {
  Solidity: '#8F90FE',
  TypeScript: '#00D2EF',
}

const OpenSource: FC<{ stars: Record<string, number> }> = ({ stars }) => {
  return (
    <div
      id="open-source"
      className="mt-[11.875rem] flex scroll-mt-10 flex-col items-center px-6"
    >
      <div className="flex h-[2.25rem] items-center justify-center rounded-[5px] bg-[#131938] px-3 text-xs font-normal">
        <p className="text-gradient1">Open Source</p>
      </div>
      <h2 className="mt-[10px] text-center text-[1.75rem] font-medium text-white sm:text-[45px]">
        Built in the Open
      </h2>
      <p className="mt-4 max-w-[36rem] text-center text-lg text-[#7981A3]">
        Contracts, tooling and audits we have published on GitHub. Read the
        code, fork it, or use it in your own project.
      </p>
      <div className="mt-[3.75rem] grid w-full max-w-[72rem] gap-6 md:grid-cols-2">
        {openSourceRepos.map((item) => {
          const url = `${site.github}/${item.repo}`
          return (
            <section
              key={item.repo}
              className="flex flex-col rounded-[10px] border border-[#262626] bg-[#121424] p-6 transition hover:border-[#00D2EF]/50"
            >
              <div className="flex items-center justify-between gap-4">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 items-center gap-3 text-white hover:text-[#00D2EF]"
                >
                  <img
                    src="/images/github.svg"
                    alt=""
                    loading="lazy"
                    className="h-6 w-6 shrink-0"
                  />
                  <span className="truncate font-mono text-lg">
                    <span className="text-[#565F8F]">Rtility/</span>
                    {item.repo}
                  </span>
                </a>
                {stars[item.repo] > 0 && (
                  <span
                    className="shrink-0 text-sm text-[#7981A3]"
                    aria-label={`${stars[item.repo]} stars`}
                  >
                    ★ {stars[item.repo]}
                  </span>
                )}
              </div>
              <p className="mt-4 flex-1 text-[#7981A3]">{item.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <span className="flex items-center gap-2 text-[#565F8F]">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ background: languageColors[item.language] }}
                  />
                  {item.language}
                </span>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#00D2EF] hover:underline"
                >
                  View repository →
                </a>
                {item.caseStudy && (
                  <Link href={item.caseStudy}>
                    <a className="text-[#7981A3] transition hover:text-white">
                      Case study
                    </a>
                  </Link>
                )}
              </div>
            </section>
          )
        })}
      </div>
      <a
        href={site.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex h-[56px] items-center justify-center gap-3 rounded-[5px] border border-[#00D2EF] px-8 text-sm font-medium text-[#00D2EF] transition hover:bg-[#00D2EF]/10"
      >
        <img src="/images/github.svg" alt="" className="h-5 w-5" />
        Follow Rtility on GitHub
      </a>
    </div>
  )
}

export default OpenSource
