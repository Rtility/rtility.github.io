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
  // Heading for the work list; defaults to "What we did"
  workHeading?: string
  // Optional long-form lore, shown as "The Story"
  story?: string[]
  // Optional walkthrough of a product feature, shown after the story
  feature?: {
    eyebrow: string
    heading: string
    intro: string
    steps: { title: string; text: string }[]
    note?: string
  }
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
    client: 'Rtility (in-house)',
    kind: 'NFT Collection',
    year: 'Coming soon',
    status: 'Pre-launch',
    summary:
      'Our own NFT collection about 26 tribes of hand-drawn letters. The mint contract and art pipeline are built; next is a word game where Claude writes every word holders spell into the story.',
    intro: [
      'In Broca’s area, where speech is made, live 26 tribes, one per letter, sacrificed daily to give you words. The Renegades crossed the walls to stop it.',
      'Alphabet is Rtility’s own project, not client work. It turns that story into a generative NFT collection and a game: every token is a letter from one of the 26 tribes, and holders play the Renegades, spelling words with the letters they own while Claude, Anthropic’s AI model, writes each new word into the story.',
      'Where it stands today: the mint contract, the generative art pipeline and the whitelist service are built and tested on testnet, and the first lore site exists. The Claude word game is in design and comes next, then the mainnet launch.',
    ],
    story: [
      'Once upon a time, deep in the universe of the human mind, in Broca’s area where speech is made, lay a land of 26 realms called the Alphabet Land. Each realm was home to its own race of letters, from A to Z, and every one of them lived for a single purpose: to help their god, the human, make words.',
      'The price was steep. Every realm had to sacrifice at least one of its own each day to feed the making of words. A day in the Alphabet Land lasts a single second in the human world, so the letters watched friends and family vanish every second. And the races were forbidden to speak to one another; only those being sacrificed ever met, in their final moments.',
      'Years passed. Most letters grew used to the ritual and held on to their ancestors’ belief that there was no way out of the pain.',
      'But some could not bear it any longer. Tired of losing one of their own every day, they broke with the old beliefs and formed a group called The Renegades.',
      'The Renegades set themselves two goals. First, to connect all 26 races into one community and end the old divisions between them. Second, to simulate every letter, so their god could still have words without a single sacrifice. They reached out to each race in secret with one message: “It doesn’t matter what race you are, you are welcome to join The Renegades.”',
      'Help the Renegades expand their vocabulary until they can simulate every word.',
    ],
    feature: {
      eyebrow: 'Built with Claude',
      heading: 'The Renegade word game',
      intro:
        'The story ends with a call to action, and the game will answer it. Holders will combine the letters they own into words, and every word the community simulates is one the tribes no longer pay for with a sacrifice. Claude turns each of those words into a new chapter of the story. Here is how it is designed to work.',
      steps: [
        {
          title: 'Spell a word',
          text: 'Connect your wallet and combine letters you hold into a word. The game checks on-chain that you own every letter you use.',
        },
        {
          title: 'Claude checks it',
          text: 'Claude confirms the word is real and judges how hard it was to simulate. The backend rejects repeats, so each word can only be saved once.',
        },
        {
          title: 'Claude writes the chapter',
          text: 'Claude writes a short chapter about the word in the voice of the tribes that spelled it, with the canon and a style guide in its prompt so every chapter fits the story.',
        },
        {
          title: 'The Chronicle grows',
          text: 'The chapter joins the public Chronicle on the site, credited to the holder, and the letters used are marked as saved from the sacrifice.',
        },
      ],
      note: 'Status: planned. The game is in design and will run on the Claude API; nothing is live yet.',
    },
    workHeading: 'What we are building',
    work: [
      'ERC721A mint contract with a signature-based presale, a timed public sale, per-wallet and per-transaction limits, and a guard against contract mints.',
      'Off-chain whitelist service that signs each approved wallet, so the allowlist can change without an on-chain transaction.',
      'Generative art pipeline that layers traits by rarity weight, rejects duplicates and writes OpenSea-ready metadata.',
      'Next: the Renegade word game on the Claude API, with on-chain ownership checks, word validation and Claude-written chapters published to the Chronicle.',
      'First lore site with wallet connect, built in Next.js.',
      'Hardhat test suite with gas reporting and coverage, run in CI.',
    ],
    facts: [
      { label: 'Owner', value: 'Rtility (in-house)' },
      { label: 'Type', value: 'Generative NFT collection + word game' },
      {
        label: 'Built',
        value: 'Mint contract, art pipeline, whitelist service',
      },
      { label: 'Next', value: 'Claude word game, mainnet launch' },
      { label: 'AI', value: 'Claude API (planned)' },
      { label: 'Chain', value: 'Ethereum' },
      { label: 'Stage', value: 'Pre-launch' },
    ],
    stack: [
      'Solidity',
      'ERC721A',
      'Hardhat',
      'Claude API',
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
