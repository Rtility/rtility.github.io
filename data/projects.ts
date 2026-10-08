export type ProjectLink = { label: string; href: string }

export type Project = {
  slug: string
  title: string
  client: string
  kind: string
  year: string
  status: string
  summary: string
  // Longer intro shown at the top of the project page
  intro: string[]
  // What Rtility did, one bullet per point
  work: string[]
  facts: { label: string; value: string }[]
  stack: string[]
  links: ProjectLink[]
  // Accent gradient used by the card artwork
  accent: [string, string]
}

export const projects: Project[] = [
  {
    slug: 'ethernal-gates',
    title: 'Ethernal Gates',
    client: 'Arts DAO',
    kind: 'Smart Contract Audit',
    year: '2022',
    status: 'Audited April 2022',
    summary:
      "Security audit of the mint contract behind Arts DAO's debut collection, a generative series that doubles as the DAO's membership pass.",
    intro: [
      'Arts DAO is a Dubai-based DAO whose members co-own blue-chip NFTs through a shared treasury. Ethernal Gates, its debut collection made with artist Kristel Bechara, is the membership pass: holding one gives token-gated access and a vote on the treasury.',
      'Before the June 2022 launch on Ethereum, Arts DAO asked us to audit the mint contract. We reviewed it line by line, ran it through static analysis, and delivered a written report with a fix for every finding.',
      'The mint went live on June 6, 2022 and ran smoothly. Thanks to ERC721A, minting 40 tokens in one presale transaction used about 188k gas, only 2.3 times the 81k of a single-token mint, and a public-sale mint used about 65k. Deploying the contract cost 0.079 ETH.',
    ],
    work: [
      'Line-by-line manual review of the ERC721A mint contract, plus automated analysis with Slither.',
      'Checked the known attack classes: reentrancy, overflow and underflow, access control, and contract-initiated mints.',
      'Verified every feature on the team’s checklist: owner mints and airdrops, phased supply increases up to 6,000, ETH withdrawal and five sale phases (Investor, VIP, Whitelist, Public, Off).',
      'Reviewed the Merkle-proof allowlist and compared it with signature-based alternatives.',
      'Reported 25 findings, none critical: 1 high, 4 medium and 20 informational or gas notes, each with a suggested fix and the gas it saves.',
    ],
    facts: [
      { label: 'Client', value: 'Arts DAO' },
      { label: 'Service', value: 'Smart contract audit' },
      { label: 'Chain', value: 'Ethereum' },
      { label: 'Findings', value: '0 critical · 1 high · 4 medium · 20 info' },
      { label: 'Mint day', value: 'June 6, 2022' },
      { label: '40-token mint', value: '≈188k gas in one transaction' },
    ],
    stack: [
      'Solidity 0.8',
      'ERC721A',
      'OpenZeppelin',
      'Merkle proofs',
      'Slither',
      'Hardhat',
    ],
    links: [
      {
        label: 'Read the audit report',
        href: 'https://github.com/Rtility/artsdao_ethernalgates/blob/main/audit/Ethernal_Gates_Audit_Report_V1.0.pdf',
      },
      {
        label: 'Mint-day recap on X',
        href: 'https://x.com/Rtility_io/status/1533881615214075907',
      },
      {
        label: 'Audited source',
        href: 'https://github.com/Rtility/artsdao_ethernalgates',
      },
      {
        label: 'Collection on OpenSea',
        href: 'https://opensea.io/collection/ethernal-gates',
      },
      { label: 'Arts DAO website', href: 'https://www.artsdao.io/' },
      { label: 'Arts DAO on X', href: 'https://x.com/arts_dao' },
    ],
    accent: ['#9784FE', '#DE5CDB'],
  },
  {
    slug: 'alphabet',
    title: 'Alphabet',
    client: 'Alphabet',
    kind: 'NFT Collection',
    year: 'Coming soon',
    status: 'In development',
    summary:
      'A story-driven generative collection about the 26 tribes of letters. We built the contract, the art pipeline, the whitelist service and the site.',
    intro: [
      'In Broca’s area, where speech is made, live 26 tribes, one per letter, sacrificed daily to give you words. The Renegades crossed the walls to stop it.',
      'Alphabet turns that story into a generative NFT collection. Rtility handles the whole stack: the lore site, the art generator, the mint contract and the off-chain service that signs whitelist mints.',
    ],
    work: [
      'ERC721A mint contract with a signature-based presale, a timed public sale, per-wallet and per-transaction limits, and a guard against contract mints.',
      'Off-chain whitelist service that signs each approved wallet, so the allowlist can change without an on-chain transaction.',
      'Generative art pipeline that layers traits by rarity weight, rejects duplicates and writes OpenSea-ready metadata.',
      'Lore-first landing page with wallet connect, built in Next.js.',
      'Hardhat test suite with gas reporting and coverage, run in CI.',
    ],
    facts: [
      { label: 'Type', value: 'Generative NFT collection' },
      { label: 'Scope', value: 'Contract, art pipeline, backend, site' },
      { label: 'Chain', value: 'Ethereum' },
      { label: 'Status', value: 'In development' },
    ],
    stack: [
      'Solidity',
      'ERC721A',
      'Hardhat',
      'TypeScript',
      'Python',
      'Next.js',
      'ethers.js',
    ],
    links: [
      { label: 'Follow @0xalphabetNFT', href: 'https://x.com/0xalphabetNFT' },
    ],
    accent: ['#8F90FE', '#62FCDD'],
  },
  {
    slug: 'erc721a-staker',
    title: 'ERC721A Staker',
    client: 'Open source',
    kind: 'Staking Contract',
    year: '2022',
    status: 'Open-source prototype',
    summary:
      'Soft staking for ERC721A collections: holders earn an ERC-20 reward every second while the NFT never leaves their wallet.',
    intro: [
      'Most NFT staking contracts lock the token in escrow, which means an approval, a transfer and gas on the way in and out. ERC721A Staker takes a different route: the NFT stays in the holder’s wallet and keeps earning until it moves.',
      'The trick is ERC721A’s ownership data. Each token records when its current owner received it, so the staker compares that timestamp with the moment staking began. A transfer changes the timestamp and ends the stake on its own, with no lock-up and no approval.',
    ],
    work: [
      'Stake detection based on ERC721A ownership timestamps, so transfers end a stake automatically.',
      'Rewards in any ERC-20 token, accrued per second.',
      'Batch stake and harvest, plus view helpers for front ends (staked tokens per owner, stake status).',
      'Gas-conscious storage: packed uint48 structs, immutable parameters and custom errors.',
      '48 test cases with time-travel helpers.',
    ],
    facts: [
      { label: 'Type', value: 'Open-source contract' },
      { label: 'Standard', value: 'ERC721A + ERC-20 rewards' },
      { label: 'Tests', value: '48 cases' },
      { label: 'Status', value: 'Prototype, not audited' },
    ],
    stack: ['Solidity 0.8', 'ERC721A', 'OpenZeppelin', 'Hardhat', 'TypeChain'],
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/Rtility/ERC721AStaker',
      },
    ],
    accent: ['#00D2EF', '#8F90FE'],
  },
  {
    slug: 'payment-splitter',
    title: 'Payment Splitter',
    client: 'Open source',
    kind: 'Payments Contract',
    year: '2022',
    status: 'Open source',
    summary:
      'A gas-efficient contract that splits ETH and any ERC-20 between two wallets by fixed shares, with a live listener for incoming payments.',
    intro: [
      'Teams that share revenue, such as an artist and a studio, need every payment split the same way, every time, without trusting one side to forward the other’s cut.',
      'Payment Splitter fixes the shares at deploy time. Anyone can trigger a withdrawal, and each wallet receives its percentage of the ETH or ERC-20 balance in the same transaction.',
    ],
    work: [
      'Immutable, packed shares so a split costs as little gas as possible.',
      'ETH and ERC-20 withdrawals, with Solmate’s reentrancy guard and OpenZeppelin SafeERC20.',
      'Either payee can move its share to a new address without touching the other’s.',
      'Full test suite: 100% statement, function and line coverage and 95% branch coverage across 26 tests.',
      'Dockerized event listener that reports payments as they arrive, plus deploy, verify and withdraw scripts.',
    ],
    facts: [
      { label: 'Type', value: 'Open-source contract' },
      { label: 'Assets', value: 'ETH and any ERC-20' },
      { label: 'Coverage', value: '100% lines · 95% branches' },
      { label: 'Tooling', value: 'Hardhat, Docker' },
    ],
    stack: [
      'Solidity 0.8',
      'Solmate',
      'OpenZeppelin',
      'Hardhat',
      'TypeScript',
      'Docker',
    ],
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/Rtility/payment-splitter',
      },
    ],
    accent: ['#62FCDD', '#00D2EF'],
  },
]
