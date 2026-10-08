import React, { FC } from 'react'
import FilledButton from './FilledButton'
import OutlineButton from './OutlineButton'

// Where Claude sits in the Renegade word game: what goes in, what it does, what comes back
const claudeFlow = [
  {
    label: 'In',
    text: 'A word a holder spells from letters they own, plus the Alphabet canon and style guide.',
  },
  {
    label: 'Claude',
    text: 'Checks that the word is real, judges how hard it was to simulate, and writes a short chapter in the voice of the tribes that spelled it.',
  },
  {
    label: 'Out',
    text: 'A new chapter in the public Chronicle, credited to the holder, with those letters marked as saved from the sacrifice.',
  },
]

const Alphabet: FC = () => {
  return (
    <div id="alphabet" className="mt-[9.375rem] scroll-mt-10 px-6 md:mt-[9rem]">
      <div className="mx-auto max-w-[72rem] overflow-hidden rounded-[10px] border border-[#262626] bg-[#121424]">
        <img
          src="/images/alphabet/renegades-banner.jpg"
          alt="The Renegades: hand-drawn letter characters spelling the word Renegades"
          className="w-full bg-[#fbe9d8]"
        />
        <div className="grid gap-10 p-6 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:p-12">
          <div>
            <div className="flex h-[2.25rem] w-fit items-center rounded-[5px] bg-[#131938] px-3 text-xs">
              <span className="text-gradient1">Our In-House Product</span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <img
                src="/images/alphabet/letter-a.jpg"
                alt=""
                className="h-14 w-14 rounded-full"
              />
              <h2 className="text-[1.75rem] font-medium text-white sm:text-[45px]">
                Alphabet
              </h2>
            </div>
            <p className="mt-6 text-lg italic text-[#7981A3]">
              In Broca’s area, where speech is made, live 26 tribes, one per
              letter, sacrificed daily to give you words. The Renegades crossed
              the walls to stop it.
            </p>
            <p className="mt-4 text-lg text-[#7981A3]">
              Alphabet is Rtility’s own NFT collection: 26 tribes of hand-drawn
              letter characters on Ethereum, and a word game where holders spell
              words with the letters they own. Claude, Anthropic’s AI model,
              turns every word into a new chapter of the story.
            </p>
            <p className="mt-6 flex items-start gap-3 text-sm text-[#7981A3]">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#F5B83D]" />
              <span>
                Pre-launch. The mint contract, art generator and whitelist
                service are built; the Claude word game is in design. Nothing is
                live yet.
              </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <FilledButton text="Explore Alphabet" href="/projects/alphabet" />
              <OutlineButton
                text="Follow @0xalphabetNFT"
                href="https://x.com/0xalphabetNFT"
              />
            </div>
          </div>
          <div className="self-start rounded-[10px] border border-[#262626] bg-[#131938] p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-[#565F8F]">
              Where Claude fits
            </p>
            <ol className="mt-6 space-y-6">
              {claudeFlow.map((step) => (
                <li key={step.label} className="flex gap-4">
                  <span className="text-gradient1 w-16 shrink-0 font-semibold">
                    {step.label}
                  </span>
                  <span className="text-[#7981A3]">{step.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alphabet
