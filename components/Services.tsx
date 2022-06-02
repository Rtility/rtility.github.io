import React, { FC, useEffect, useRef, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';

const Services: FC = () => {

  const services = [{ "title": 'Smart Contract Development', "description": 'Rtility develops secure and optimized contracts based on your needs.', "image": '/images/smartcontractDev.png' },
  { "title": 'Smart Contract Audit', "description": 'Rtility offer code reviews and security analysis for teams preparing to launch their blockchain applications.', "image": '/images/smartcontractAudit.png' },
  { "title": 'UI/UX design', "description": 'Have your ideas designed by UX and UI experts to deliver an excellent experience to your customers.', "image": '/images/UI-UX.png' },
  { "title": 'Front-End Development', "description": 'Rtility offers quality web development solutions to help you grow your business with a great impression.', 'image': '/images/frontend.png' },
  { "title": 'Back-End Development', "description": 'Our back-end development engineers deliver performant and secure solutions customized to the needs of each client.', 'image': '/images/backend.png' }];


  const [expandAccordion, setExpandAccordion] = useState<number | undefined>(0);
  const contentSpace = useRef<HTMLParagraphElement>(null);
  const [AccordionHeight, setAccordionHeight] = useState<string>('0px');
  const [clickedServiceImage, setClickedServiceImage] = useState<string>(services[0]?.image);
  const imageRef = useRef<HTMLImageElement>(null);
  const toggleAccordion = (index: number) => {
    setExpandAccordion(index === expandAccordion ? undefined : index);
  }
  const [clickedServiceImageList, setClickedServiceImageList] = useState<string[]>([])

  useEffect(() => {
    setClickedServiceImageList((prev: any) => ([...prev, clickedServiceImage]))
    if (clickedServiceImageList.at(-1) !== clickedServiceImage) {
      imageRef?.current?.classList.remove('fade');
      setTimeout(() => {
        imageRef?.current?.classList.add('fade');
      }, 5);
    }
  }, [clickedServiceImage])

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className='flex flex-col items-center mt-[11.875rem]'>
      <section className='hidden lg:block bg-[#00D2EF] w-[460px] h-[460px] rounded-full opacity-20 blur-[150px] absolute right-[3.5rem] -mt-10 -z-10' />
      <p className='text-white text-[45px] font-medium'>Our Services</p>
      <section className='flex justify-around items-center w-full mt-[3.75rem] flex-wrap'>
        <div className='flex flex-col space-y-4'>
      
        {services.map((service, index) =>
          <Accordion expanded={expanded === `panel${index}`} key={index} onClick={() => setClickedServiceImage(service.image)} onChange={handleChange(`panel${index}`)} className='accordion'>
            <AccordionSummary
              expandIcon={<img src={expanded === `panel${index}` ? '/images/arrowUpBlue.svg' : '/images/arrowDownWhite.svg'} alt='arrow' />}
              className='accordion-summary'
            >
              <p className='text-[14px] sm:text-[22px] font-normal text-white py-1'>{service.title}</p>
            </AccordionSummary>

            <AccordionDetails className='accordion-detail'>
              <p className='w-full text-[#7981A3]'>{service.description}</p>
            </AccordionDetails>

          </Accordion>)}
            </div>
        <section className='xl:w-[34.375rem] xl:h-[500px] mt-6 lg:mt-0 sm:w-full w-[90%]'>
          <img ref={imageRef} className='mx-auto' src={clickedServiceImage} alt='service' loading='lazy' />
        </section>
      </section>

      <section className='bg-[#8F90FE] w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] rounded-full opacity-20 blur-[150px] absolute md:left-[3.5rem] mt-60 -z-10' />
    </div>
  )
}
export default Services;