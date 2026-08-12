/* eslint-disable @next/next/no-img-element */
import { constant } from '@/helpers/constants'
import React from 'react'

const iconFor = (name: string) =>
  constant.technologiesAndLanguages.find((tech) => tech.name === name)?.icon;

/** Grouped by concern — how you'd describe a stack, not an alphabet soup of logos. */
const TechStack = () => {
  return (
    <div className='space-y-7'>
      {constant.stackGroups.map((group) => (
        <div key={group.title} className='flex flex-col gap-2 sm:flex-row sm:gap-6'>
          <p className='w-24 shrink-0 pt-1.5 font-mono text-xs text-gray-600'>
            {group.title}
          </p>
          <div className='flex flex-wrap gap-2'>
            {group.items.map((name) => {
              const icon = iconFor(name);
              return (
                <span
                  key={name}
                  className='group flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.05]'
                >
                  {icon && (
                    <img
                      src={icon}
                      alt=''
                      className='w-3.5 opacity-60 transition-opacity duration-300 group-hover:opacity-100'
                    />
                  )}
                  <span className='font-mono text-xs text-gray-400 transition-colors duration-300 group-hover:text-gray-100'>
                    {name}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TechStack
