import { client } from './client'
import { jobReducer } from './reducers'

export const getJobs = async (remote, featured, jobType) => {
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
