import React, { FC, useState } from 'react'

const Services: FC = () => {
  const services = [
    {
      title: 'Smart Contract Development',
      description:
        'Secure, gas-optimized contracts built around your needs, from ERC721A mints and allowlists to staking and payment splitting, shipped with full test suites.',
      image: '/images/smartcontractDev.png',
    },
    {
      title: 'Smart Contract Audit',
      description:
        'Line-by-line review and static analysis for teams preparing to launch, delivered as a written report with a fix for every finding.',
      image: '/images/smartcontractAudit.png',
    },
    {
      title: 'UI/UX Design',
      description:
        'Have your ideas designed by UX and UI experts to deliver an excellent experience to your customers.',
      image: '/images/UI-UX.png',
    },
    {
      title: 'Front-End Development',
      description:
        'Fast, responsive web apps and NFT sites with wallet connect, built with React and Next.js to make a great first impression.',
      image: '/images/frontend.png',
    },
    {
      title: 'Back-End Development',
      description:
        'Performant, secure back ends customized to each client: signing services, event listeners, APIs and the infrastructure to run them.',
      image: '/images/backend.png',
    },
  ]

  const [expandAccordion, setExpandAccordion] = useState<number | undefined>(0)
  const [clickedServiceImage, setClickedServiceImage] = useState<string>(
    services[0].image
  )

  const toggleAccordion = (index: number) => {
    setExpandAccordion(index === expandAccordion ? undefined : index)
    setClickedServiceImage(services[index].image)
  }

  return (
    <div
      id="services"
      className="mt-[11.875rem] flex scroll-mt-10 flex-col items-center"
    >
      <section className="absolute right-[3.5rem] -z-10 -mt-10 hidden h-[460px] w-[460px] rounded-full bg-[#00D2EF] opacity-20 blur-[150px] lg:block" />
      <h2 className="text-[1.75rem] font-medium text-white sm:text-[45px]">
        Our Services
      </h2>
      <section className="mt-[3.75rem] flex w-full flex-wrap items-center justify-around">
        <div className="flex w-full flex-col space-y-4 sm:w-auto">
          {services.map((item, index) => {
            const open = expandAccordion === index
            return (
              <section
                key={item.title}
                className="mx-auto w-[90%] rounded-[10px] border border-[#262626] bg-[#121424] sm:w-[34.5rem]"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => toggleAccordion(index)}
                  className="flex min-h-[64px] w-full items-center justify-between px-4 text-left"
                >
                  <span className="text-[14px] font-normal text-white sm:text-[22px]">
                    {item.title}
                  </span>
                  <img
                    src={
                      open
                        ? '/images/arrowUpBlue.svg'
                        : '/images/arrowDownWhite.svg'
                    }
                    alt=""
                  />
                </button>
                <div
                  className="grid"
                  style={{
                    gridTemplateRows: open ? '1fr' : '0fr',
                    transition: 'grid-template-rows 300ms ease',
                  }}
                >
                  <p className="overflow-hidden px-4 text-[#7981A3]">
                    <span className="block pb-5">{item.description}</span>
                  </p>
                </div>
              </section>
            )
          })}
        </div>
        <section className="mt-6 w-[90%] sm:w-full lg:mt-0 xl:h-[500px] xl:w-[34.375rem]">
          <img
            className="mx-auto"
            src={clickedServiceImage}
            alt=""
            loading="lazy"
          />
        </section>
      </section>
      <section className="absolute -z-10 mt-60 h-[300px] w-[300px] rounded-full bg-[#8F90FE] opacity-20 blur-[150px] sm:h-[460px] sm:w-[460px] md:left-[3.5rem]" />
    </div>
  )
}
export default Services
