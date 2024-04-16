import {
  getCompanySlugs,
  getCompanyBySlug,
  getJobsByCompanyId,
} from '../../datalayer'
import CompanyDetails from '../../components/company/companyDetails/Details'

const CompanyPage = ({ company, companyJobs }) => {
  console.log(company)
  return (
    <div className='py-8'>
      <CompanyDetails company={company} companyJobs={companyJobs} />
    </div>
  )
}

export const getStaticProps = async context => {
  const { params } = context

  const company = await getCompanyBySlug(params.slug)
  const companyJobs = await getJobsByCompanyId(company.id)

  return {
    props: { company, companyJobs },
  }
}

export const getStaticPaths = async () => {
  const res = await getCompanySlugs()

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

export default CompanyPage
