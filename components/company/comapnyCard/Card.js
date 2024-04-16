import React from 'react'
import Image from 'next/image'

function CompanyCard({ company }) {
  return (
    <div className='p-8 bg-white h-fit mt-8 min-w-[300px] flex flex-col justify-center items-center shadow-xl rounded-sm border'>
      <div className='flex flex-col justify-center items-center gap-2 w-full'>
        <Image
          src={company.logo.url}
          width={64}
          height={64}
          className='card-img-top'
          alt='...'
        />
        <h5 className=' font-semibold text-lg'>{company.name}</h5>
        <p className=' text-slate-400 text-sm'>{company.city}</p>
        <div className='flex flex-col justify-center items-center gap-2 w-full mt-4'>
          <a
            href={company.website}
            className=' bg-indigo-500 w-full text-center p-2 text-white rounded-md'
          >
            Apply now
          </a>
          <a
            href={`/company/${company.slug}`}
            className='bg-slate-200 w-full text-center p-2  text-slate-600 rounded-md'
          >
            All company jobs
          </a>
        </div>
      </div>
    </div>
  )
}

export default CompanyCard
