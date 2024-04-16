import Image from 'next/image'
import Link from 'next/link'

function JobsCard({ job, className }) {
  return (
    <Link
      href={`/job/${job.slug}`}
      className={`flex gap-4 border px-5 py-4 items-center shadow-md min-h-20 bg-white ${className} cursor-pointer`}
    >
      <div className='flex items-center  rounded-xl p-2  max-w-[64px]'>
        <Image
          src={job.company.logo.url}
          alt={job.company.logo.alt}
          height={job.company.logo.height}
          width={job.company.logo.width}
        />
      </div>
      <div className='flex flex-col flex-1 gap-1 items-start  mt-2'>
        <h2 className=' text-xl font-bold '>{job.title}</h2>
        <div className='flex gap-2 text-slate-600'>
          <p>{job.jobType}</p>
          {' / '}
          <p>{job.experienceLevel}</p>
          {' / '}
          <p>{job.company.city}</p>
          {' / '}
          <p>{job.workFrom}</p>
        </div>
      </div>
      <div className='flex flex-col justify-end  '>
        <p className='mb-1 text-end'>{job.salary} € / year</p>
        <div className='flex items-center'>
          <span className='mr-4 text-sm text-slate-500'>{job.date}</span>
          {job.featuredJob && (
            <p className='text-green-500 bg-green-200 rounded-full px-2 py-1 text-xs'>
              Featured Job
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default JobsCard
