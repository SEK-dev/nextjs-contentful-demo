import JobsCard from '../card/JobsCard'

function JobsList({ jobs }) {
  return (
    <div className=' flex flex-col flex-1 '>
      <div className='w-full text-start font-semibold mb-4'>
        <p>Jobd Found {jobs.length}</p>
      </div>
      {jobs.map((job, i) => {
        return (
          <JobsCard
            key={job.id}
            job={job}
            className={i != jobs.length - 1 && ' mb-2'}
          />
        )
      })}
    </div>
  )
}

export default JobsList
