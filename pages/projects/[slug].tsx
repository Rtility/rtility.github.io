import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import FilledButton from '../../components/FilledButton'
import ProjectArt from '../../components/ProjectArt'
import { projects, Project } from '../../data/projects'
import { site } from '../../data/site'

const filledLink =
  'inline-flex h-[56px] items-center justify-center rounded-[5px] border border-[#00D2EF] bg-[#00D2EF] px-6 text-sm font-medium text-white transition hover:bg-[#00b8d1]'
const outlineLink =
  'inline-flex h-[56px] items-center justify-center rounded-[5px] border border-[#00D2EF] px-6 text-sm font-medium text-[#00D2EF] transition hover:bg-[#00D2EF]/10'

const ProjectPage: NextPage<{ slug: string }> = ({ slug }) => {
  const project = projects.find((p) => p.slug === slug) as Project
  const others = projects.filter((p) => p.slug !== slug)
  const url = `${site.url}/projects/${project.slug}`
  const title = `${project.title} · ${site.name}`
  const subline =
    project.client === project.title
      ? project.status
      : `${project.client} · ${project.status}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={project.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={project.summary} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href={url} />
      </Head>

      <header className="container mx-auto">
        <Nav />
      </header>

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#8F90FE] opacity-20 blur-[150px]" />
        <div className="pointer-events-none absolute top-[900px] left-0 -z-10 h-[360px] w-[360px] rounded-full bg-[#00D2EF] opacity-20 blur-[150px]" />

        <div className="container mx-auto px-6 pt-8 lg:pt-12">
          <Link href="/#work">
            <a className="text-sm text-[#7981A3] transition hover:text-[#00D2EF]">
              ← All work
            </a>
          </Link>

          <div className="mt-8 flex h-[2.25rem] w-fit items-center rounded-[5px] bg-[#131938] px-3 text-xs">
            <span className="text-gradient1">{project.kind}</span>
          </div>
          <h1 className="mt-5 text-[36px] font-semibold leading-tight text-white lg:text-[57px]">
            {project.title}
          </h1>
          <p className="mt-3 text-base text-[#7981A3] lg:text-lg">{subline}</p>

          <ProjectArt
            project={project}
            className="mt-10 h-[260px] lg:h-[340px]"
          />

          <div className="mt-10 max-w-3xl space-y-5 text-lg text-[#7981A3] lg:text-xl">
            {project.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-16">
            <section>
              <h2 className="text-2xl font-semibold text-white">What we did</h2>
              <ul className="mt-6 space-y-4">
                {project.work.map((item, i) => (
                  <li key={i} className="flex gap-4 text-[#7981A3]">
                    <span className="mt-[0.6rem] h-2 w-2 shrink-0 rounded-full bg-[#00D2EF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <aside className="space-y-6">
              <div className="rounded-[10px] border border-[#262626] bg-[#131938] p-6">
                <dl className="divide-y divide-[#262626]">
                  {project.facts.map((f) => (
                    <div
                      key={f.label}
                      className="flex justify-between gap-6 py-3 first:pt-0 last:pb-0"
                    >
                      <dt className="text-sm text-[#565F8F]">{f.label}</dt>
                      <dd className="text-right text-sm text-white">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              {project.stack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-[5px] bg-[#131938] px-3 py-2 text-xs text-[#7981A3]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
              {project.links.length > 0 && (
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  {project.links.map((l, i) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={i === 0 ? filledLink : outlineLink}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </aside>
          </div>

          <section className="mt-20">
            <h2 className="text-2xl font-semibold text-white">More work</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`}>
                  <a className="group block rounded-[10px] border border-[#262626] bg-[#121424] p-3 transition hover:border-[#00D2EF]">
                    <ProjectArt project={p} className="h-[140px]" />
                    <div className="px-1 pb-1 pt-4">
                      <div className="font-medium text-white">{p.title}</div>
                      <div className="mt-1 text-xs text-[#7981A3]">
                        {p.kind}
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-20 mt-20 flex flex-col items-start justify-between gap-8 rounded-[10px] border border-[#262626] bg-[#131938] p-8 lg:flex-row lg:items-center lg:p-12">
            <div>
              <h2 className="text-3xl font-semibold text-white lg:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mt-3 text-[#7981A3]">{site.tagline}</p>
            </div>
            <FilledButton text="Contact us" href={`mailto:${site.email}`} />
          </section>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<{ slug: string }> = async ({
  params,
}) => ({
  props: { slug: params?.slug as string },
})

export default ProjectPage
