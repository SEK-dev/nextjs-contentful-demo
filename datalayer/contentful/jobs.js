import { client } from './client'
import { jobReducer, tagsReducer, skillsReducer } from './reducers'

export const getJobs = async () => {
  try {
    // Get all jobs
    let jobs = await client.getEntries({ content_type: 'post' })
    const jobsData = jobReducer(jobs.items)
    return jobsData
  } catch (error) {
    console.log(error)
  }
}

export const getSlugs = async () => {
  try {
    const rowSlugs = await client.getEntries({
      content_type: 'post',
      select: 'fields.slug',
    })
    const slugs = rowSlugs.items.map(item => item.fields.slug)
    return slugs
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getJobBySlug = async slug => {
  try {
    const found = await client.getEntries({
      content_type: 'post',
      'fields.slug': slug,
      include: 2,
    })

    if (found.items.length == 0) return null
    let job = [found.items[0]]

    return jobReducer(job)[0]
  } catch (error) {
    console.log(error)
    return {}
  }
}

export const getJobsSkills = async () => {
  const res = await client.getTags()
  const rawTags = res.items

  const tags = tagsReducer(rawTags)
  const skills = skillsReducer(tags)
  return skills
}

export const getJobsByCompanyId = async id => {
  try {
    const found = await client.getEntries({
      content_type: 'post',
      'fields.company.sys.id': id,
      include: 2,
    })

    if (found.items.length == 0) return null
    let jobs = found.items

    return jobReducer(jobs)
  } catch (error) {}
}

export const searchJobs = async query => {
  let contentFullQuery = {
    content_type: 'post',
    include: 2,
  }

  console.log(query)
  // Add Equality Query Filters
  if (query.workFrom) contentFullQuery['fields.workFrom'] = query.workFrom
  if (query.featuredJob)
    contentFullQuery['fields.featuredJob'] = query.featuredJob

  // Add Range Query Filters
  contentFullQuery['fields.salary[gte]'] = query.minBaseSalary
  contentFullQuery['fields.salary[lte]'] = query.maxBaseSalary

  // Add Tags Query Filters
  // we first parse the skills tags back to their contentful-specific version with the "skill." prefix
  const selectedTags = query.selectedTags.map(tag => `skills${tag}`)
  if (selectedTags.length)
    contentFullQuery['metadata.tags.sys.id[in]'] = selectedTags.join(',')

  // Add Full Text Search Query
  if (query.searchBarText) {
    contentFullQuery['query'] = query.searchBarText
  }

  console.log(contentFullQuery)

  // Add Inclusion Query Filters
  // [DOES NOT WORK]
  // contentful api does NOT have an OR operator: https://www.contentfulcommunity.com/t/delivery-api-or-in-search-query/763
  // contentFullQuery['fields.jobType[in]'] = query.jobTypes;
  // contentFullQuery['fields.experienceLevel[in]'] = query.experienceLevels;

  const res = await client.getEntries(contentFullQuery)
  const foundJobs = res.items

  const jobs = jobReducer(foundJobs)

  console.log(jobs)

  // Now because contentful doesn't have an OR operator we have to filter at the application level which is not efficient
  let filteredJobs = jobs.filter(job => {
    if (query.experienceLevels.length == 0) return true
    if (query.experienceLevels.includes(job.experienceLevel)) return true
    return false
  })

  console.log(filteredJobs)

  filteredJobs = filteredJobs.filter(job => {
    if (query.jobTypes.length == 0) return true
    if (query.jobTypes.includes(job.jobType)) return true
    return false
  })

  return filteredJobs
}

export const searchCompaniesButReturnJobs = async searchBarText => {
  let contentFullQuery = {
    content_type: 'post',
    'fields.company.sys.contentType.sys.id': 'company',
    'fields.company.fields.name[match]': searchBarText,

    // multiple matches are NOT supported by Contentful so we prioritise the company name
    // 'fields.company.fields.city[match]': searchBarText,
    // 'fields.company.fields.slogan[match]': searchBarText,
    // 'fields.company.fields.website[match]': searchBarText,
    include: 2,
  }
  const res = await client.getEntries(contentFullQuery)
  const foundJobs = res.items

  const jobs = foundJobs.map(rawJob => {
    return jobReducer(rawJob)
  })

  return jobs
}
