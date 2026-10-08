import React, { FC } from 'react'
import type { Project } from '../data/projects'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

// Generated artwork for a project card, drawn per slug in the project's accent colors
const ProjectArt: FC<{ project: Project; className?: string }> = ({
  project,
  className = '',
}) => {
  const [from, to] = project.accent
  const gradientId = `art-${project.slug}`

  return (
    <div
      className={`relative overflow-hidden rounded-[10px] bg-[#131938] ${className}`}
    >
      <div
        className="absolute -right-10 -top-10 h-[220px] w-[220px] rounded-full opacity-30 blur-[80px]"
        style={{ background: from }}
      />
      <div
        className="absolute -bottom-12 -left-12 h-[200px] w-[200px] rounded-full opacity-25 blur-[80px]"
        style={{ background: to }}
      />
      {project.slug === 'alphabet' ? (
        <div className="relative grid h-full grid-cols-7 place-content-center gap-x-3 gap-y-1 p-6 text-center font-semibold">
          {LETTERS.map((letter, index) => (
            <span
              key={letter}
              className={
                index % 5 === 0
                  ? 'text-gradient1 text-2xl'
                  : 'text-2xl text-[#2b2f55]'
              }
            >
              {letter}
            </span>
          ))}
        </div>
      ) : (
        <svg
          viewBox="0 0 320 200"
          className="relative h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          </defs>
          {project.slug === 'ethernal-gates' && (
            <g fill="none" stroke={`url(#${gradientId})`} strokeWidth="2">
              <path d="M110 170V95a50 50 0 0 1 100 0v75" />
              <path d="M126 170V97a34 34 0 0 1 68 0v73" opacity="0.6" />
              <path d="M142 170V99a18 18 0 0 1 36 0v71" opacity="0.35" />
              <path d="M80 170h160" />
            </g>
          )}
          {project.slug === 'erc721a-staker' && (
            <g fill="none" stroke={`url(#${gradientId})`} strokeWidth="2">
              {[0, 1, 2, 3].map((i) => (
                <rect
                  key={i}
                  x={118 + i * 8}
                  y={52 + i * 14}
                  width="70"
                  height="70"
                  rx="10"
                  opacity={0.3 + i * 0.22}
                />
              ))}
              <path
                d="M222 70v60M212 80l10-10 10 10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          )}
          {project.slug === 'payment-splitter' && (
            <g
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="80" cy="100" r="18" />
              <path d="M98 100h50c30 0 40-40 70-40h12M148 100c30 0 40 40 70 40h12" />
              <circle cx="250" cy="60" r="12" />
              <circle cx="250" cy="140" r="12" />
            </g>
          )}
        </svg>
      )}
      {project.slug === 'ethernal-gates' && (
        <img
          src="/images/arts-dao.svg"
          alt="Arts DAO"
          loading="lazy"
          className="absolute bottom-4 right-4 w-[56px] opacity-80"
        />
      )}
    </div>
  )
}

export default ProjectArt
