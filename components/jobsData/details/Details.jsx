import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function JobDetails({ job }) {
  return (
    <div className=''>
      <Link
        className='flex items-center p-2 border shadow-sm w-fit justify-center pr-4 mb-8 '
        href='/'
      >
        <Image src='/images/back-arrow.webp' width={24} height={24} alt='' />
        <p>Back to jobs</p>
      </Link>

      <Header job={job} />
      <div className='my-8 h-[1px] w-full bg-slate-200'></div>
      <Description job={job} />
    </div>
  )
}

export default JobDetails

const Header = ({ job }) => {
  return (
    <div className='flex'>
      <div className='flex flex-1 flex-col '>
        <div>
          {' '}
          <p className='mr-4 text-sm text-slate-500'>
            Posted on {job.date} - Job Category: {job.jobCategory}{' '}
          </p>
        </div>
        <div className='mb-4'>
          {' '}
          <h2 className='text-3xl font-bold text-slate-700'>{job.title}</h2>
        </div>
        <div className='flex gap-2 text-slate-600 mb-1'>
          <p>{job.jobType}</p>
          {' / '}
          <p>{job.experienceLevel}</p>
          {' / '}
          <p>{job.company.city}</p>
          {' / '}
          <p>{job.workFrom}</p>
        </div>
        <div className='flex gap-2'>
          {job.tags.map(tag => {
            return (
              <div className='bg-indigo-100 px-3 py-1 rounded-full' key={tag}>
                <p className=' text-indigo-600 text-xs'>{tag}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex flex-col justify-end  '>
        <p className='mb-1 text-end'>{job.salary} € / year</p>
        <div className='flex items-center justify-end'>
          {job.featuredJob && (
            <p className='text-green-500 bg-green-200 rounded-full px-2 py-1 text-xs'>
              Featured
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

const Description = ({ job }) => {
  return (
    <div className=''>
      <div>
        <h2 className='text-2xl font-bold text-slate-700 mb-4'>The Role</h2>
        <div
          className='max-w-[900px]'
          dangerouslySetInnerHTML={{
            __html: job.jobDescription
              .replace(/\r\n/g, '\n')
              .replace(/\n/g, '<br />\n'),
          }}
        ></div>
      </div>
      <div className='my-8 h-[1px] w-full bg-slate-200'></div>
      <div>
        <h2 className='text-2xl font-bold text-slate-700 mb-4'>Requirements</h2>
        <div
          className='max-w-[900px]'
          dangerouslySetInnerHTML={{
            __html: job.aboutYou
              .replace(/\r\n/g, '\n')
              .replace(/\n/g, '<br />\n'),
          }}
        ></div>
      </div>
      <div className='my-8 h-[1px] w-full bg-slate-200'></div>
      <div>
        <h2 className='text-2xl font-bold text-slate-700 mb-4'>
          Responsibilities
        </h2>
        <div
          className='max-w-[900px]'
          dangerouslySetInnerHTML={{
            __html: job.jobResponsibilities
              .replace(/\r\n/g, '\n')
              .replace(/\n/g, '<br />\n'),
          }}
        ></div>
      </div>
      <div className='my-8 h-[1px] w-full bg-slate-200'></div>
      <div>
        <h2 className='text-2xl font-bold text-slate-700 mb-4'>Benefits</h2>
        <div
          className='max-w-[900px]'
          dangerouslySetInnerHTML={{
            __html: job.remunerationPackage
              .replace(/\r\n/g, '\n')
              .replace(/\n/g, '<br />\n'),
          }}
        ></div>
      </div>
      <div className='my-8 h-[1px] w-full bg-slate-200'></div>
    </div>
  )
}
