import { getCompany, getJobs } from '../datalayer'
import JobsList from '../components/jobsData/list/JobsList'
import FilterComponent from '../components/Forms/filters'
export default function Index({ companies, jobs }) {
  return (
    <div className=' flex relative  w-full  p-12 text-center  focus:outline-none focus:ring-2 focus:ring-offset-2 gap-8 '>
      <FilterComponent />
      <JobsList jobs={jobs} />
    </div>
  )
}

export const getStaticProps = async ctx => {
  let companies = await getCompany()
  let jobs = await getJobs()

  return {
    props: {
      companies,
      jobs,
    },
  }
}
