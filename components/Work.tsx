import React, { FC } from 'react'
import Link from 'next/link'
import ProjectArt from './ProjectArt'
import { projects } from '../data/projects'

const Work: FC = () => {
  return (
    <div
      id="work"
      className="mt-[11.875rem] flex scroll-mt-10 flex-col items-center px-6"
    >
      <div className="flex h-[2.25rem] items-center justify-center rounded-[5px] bg-[#131938] px-3 text-xs font-normal">
        <p className="text-gradient1">Selected Work</p>
      </div>
      <h2 className="mt-[10px] text-[1.75rem] font-medium text-white sm:text-[45px]">
        Our Work
      </h2>
      <div className="mt-[3.75rem] grid w-full max-w-[72rem] gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <a className="group flex flex-col rounded-[10px] border border-[#262626] bg-[#121424] p-4 transition hover:border-[#00D2EF]/50">
              <ProjectArt
                project={project}
                className="h-[200px] lg:h-[240px]"
              />
              <div className="mt-6 flex flex-wrap items-center gap-3 px-2 text-xs">
                <span className="rounded-[5px] bg-[#131938] px-3 py-2">
                  <span className="text-gradient1">{project.kind}</span>
                </span>
                <span className="text-[#565F8F]">
                  {project.client === project.title
                    ? project.year
                    : project.client}
                </span>
              </div>
              <h3 className="mt-4 px-2 text-[22px] font-medium text-white lg:text-[28px]">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 px-2 text-[#7981A3]">
                {project.summary}
              </p>
              <span className="mt-6 px-2 pb-2 text-sm font-medium text-[#00D2EF]">
                Read the case study{' '}
                <span className="inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Work
