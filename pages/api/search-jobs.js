import { searchJobs, searchCompaniesButReturnJobs } from '../../datalayer'

export default async function handler(req, res) {
  const { searchFormState, sideBarFormState } = req.body

  const minBaseSalary =
    sideBarFormState.baseSalaryEuro.length > 0
      ? Math.min(...sideBarFormState.baseSalaryEuro)
      : 0

  const maxBaseSalary =
    sideBarFormState.baseSalaryEuro.length > 0
      ? Math.max(...sideBarFormState.baseSalaryEuro)
      : 1000000

  const query = {
    ...sideBarFormState,
    searchBarText: searchFormState,
    minBaseSalary,
    maxBaseSalary,
  }

  console.log(query)

  // search in the jobs entities
  const jobs1 = await searchJobs(query)

  // seatch in the job entities by company name
  let jobs2 = []
  if (query.searchBarText) {
    jobs2 = await searchCompaniesButReturnJobs(query.searchBarText)
  }

  // merge the two results
  let jobs1Ids = jobs1.map(job => job.id)
  jobs2.map(job2 => {
    if (!jobs1Ids.includes(job2.id)) {
      jobs1.push(job2)
    }
  })

  res.status(200).json(jobs1)
}
