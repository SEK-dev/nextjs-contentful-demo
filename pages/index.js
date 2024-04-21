import { getJobs, getJobsSkills } from '../datalayer'

import JobsPage from '../components/ui/JobsPage'

export default function Index({ jobSkills, jobs }) {
  return <JobsPage jobs={jobs} jobSkills={jobSkills} />
}

export const getStaticProps = async ctx => {
  const jobSkills = await getJobsSkills()
  let jobs = await getJobs()

  return {
    props: {
      jobSkills,
      jobs,
    },
  }
}
