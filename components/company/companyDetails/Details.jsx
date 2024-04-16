import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import JobsCard from '../../jobsData/card/JobsCard'

function CompanyDetails({ company, companyJobs }) {
  return (
    <div className=''>
      <Link
        className='flex items-center p-2 border shadow-sm w-fit justify-center pr-4 mb-8 '
        href='/'
      >
        <Image src='/images/back-arrow.webp' width={24} height={24} alt='' />
        <p>Back to companys</p>
      </Link>

      <Header company={company} />
      <div className='my-8 h-[1px] w-full bg-slate-200'></div>
      <Description companyJobs={companyJobs} />
    </div>
  )
}

export default CompanyDetails

const Header = ({ company }) => {
  return (
    <div className='flex'>
      <div className='flex flex-1 flex-col '></div>
    </div>
  )
}

const Description = ({ companyJobs }) => {
  return (
    <div className=''>
      {companyJobs.map(job => {
        return <JobsCard key={job.id} job={job} />
      })}

      <div className='my-8 h-[1px] w-full bg-slate-200'></div>
    </div>
  )
}
