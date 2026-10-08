import React, { FC } from 'react'

type Member = { name: string; role: string; image?: string }

const initials = (name: string) =>
  name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

const Team: FC = () => {
  const team: Member[] = [
    { name: 'Amirhossein Banavi', role: 'Smart Contracts & Back-end' },
    { name: 'M.Mahdi Saeidi', role: 'Full-Stack Developer' },
    { name: 'Alireza', role: 'Infrastructure & Scaling' },
    { name: 'Pouria Pourhashemi', role: 'Security Research' },
  ]

  return (
    <div
      id="team"
      className="mb-40 mt-[151px] flex scroll-mt-10 flex-col items-center px-6"
    >
      <div className="flex h-[2.25rem] items-center justify-center rounded-[5px] bg-[#131938] px-3 text-xs font-normal">
        <p className="text-gradient1">Our Professionals</p>
      </div>
      <section className="absolute right-[3.5rem] -z-10 -mt-16 hidden h-[460px] w-[460px] rounded-full bg-[#8F90FE] opacity-20 blur-[150px] lg:block" />

      <h2 className="mt-[10px] text-[1.75rem] font-medium text-white sm:text-[45px]">
        Our Team
      </h2>
      <div className="mt-16 grid w-full max-w-[72rem] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <section
            key={member.name}
            className="flex items-center gap-5 rounded-[10px] bg-[#121424] p-5 sm:flex-col sm:items-start sm:p-6"
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="h-[88px] w-[88px] shrink-0 rounded-[10px] object-cover sm:h-[120px] sm:w-[120px]"
              />
            ) : (
              <div className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#8F90FE]/25 to-[#62FCDD]/10 ring-1 ring-[#8F90FE]/30 sm:h-[120px] sm:w-[120px]">
                <span className="text-gradient1 text-3xl font-semibold sm:text-4xl">
                  {initials(member.name)}
                </span>
              </div>
            )}
            <div>
              <p className="text-[22px] text-white">{member.name}</p>
              <p className="mt-1 text-[#7981A3]">{member.role}</p>
            </div>
          </section>
        ))}
      </div>
      <section className="absolute left-[3.5rem] -z-10 mt-72 hidden h-[460px] w-[460px] rounded-full bg-[#00D2EF] opacity-20 blur-[150px] lg:block" />
    </div>
  )
}
export default Team
