import { getSlugs, getJobBySlug } from '../../datalayer'
import JobDetails from '../../components/jobsData/details/Details'
import CompanyCard from '../../components/company/comapnyCard/Card'

const JobPage = ({ job }) => {
  return (
    <div className='py-8 flex gap-16 justify-center'>
      <JobDetails job={job} />
      <CompanyCard company={job.company} />
    </div>
  )
}

export const getStaticProps = async context => {
  const { params } = context

  const job = await getJobBySlug(params.job)

  return {
    props: { job },
  }
}

export const getStaticPaths = async () => {
  const res = await getSlugs()

  const paths = res.map(slug => {
    return {
      params: { slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export default JobPage
