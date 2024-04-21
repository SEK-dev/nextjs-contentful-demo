import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import date from 'date-and-time'

export const tagReducer = tags => {
  if (!tags) return []
  const tagsArray = tags.map(tag => {
    return tag?.sys?.id.replace('skills', '')
  })

  return tagsArray
}

export const companyReducer = company => {
  console.log(company)
  return {
    id: company?.sys?.id || '',
    name: company?.fields?.name || '',
    logo: imageReducer(company?.fields?.logo) || '',
    slug: company?.fields?.slug || '',
    website: company?.fields?.website || '',
    city: company?.fields?.city || '',
    slogan: company?.fields?.slogan || '',
  }
}

export const tagsReducer = tagsField => {
  let tags = []
  tagsField.map(rawTag => {
    const tag = rawTag.sys.id
    tags.push(tag)
  })
  return tags
}

export const skillsReducer = parsedTags => {
  const skillTags = parsedTags.filter(tag => tag.includes('skills'))
  const skills = skillTags.map(skillTag => skillTag.replace('skills', ''))
  return skills
}

export const imageReducer = imageData => {
  return {
    url: `https:${imageData?.fields?.file?.url}` || '',
    alt: imageData?.fields?.title || '',
    height: imageData?.fields?.file?.details?.image?.height || '',
    width: imageData?.fields?.file?.details?.image?.width || '',
    contentType: imageData?.fields?.file?.contentType || '',
  }
}

export const jobReducer = (jobs, relatedJopParcer = true) => {
  const jobsArray = jobs.map((job, i) => {
    const relatedJobs = relatedJopParcer ? job?.fields?.relatedJobs : []
    return {
      id: job?.sys?.id || i,
      title: job?.fields?.title || 'title',
      applicationLink: job?.fields?.applicationLink || 'link',
      date:
        date
          .parse(job?.fields?.date.split('T')[0], 'YYYY-MM-DD')
          .toDateString() || '',
      experienceLevel: job?.fields?.experienceLevel || '',
      featuredJob: job?.fields?.featuredJob || false,
      jobCategory: job?.fields?.jobCategory || '',
      jobType: job?.fields?.jobType || '',
      salary: job?.fields?.salary || '',
      slug: job?.fields?.slug || '',
      workFrom: job?.fields?.workFrom || '',
      aboutYou:
        documentToHtmlString(job?.fields?.aboutYou).replace(
          '<ul>',
          "<ul style='list-style-type: circle; margin-left: 20px;'>",
        ) || '',
      jobDescription:
        documentToHtmlString(job?.fields?.jobDescription).replace(
          '<ul>',
          "<ul style='list-style-type: circle; margin-left: 20px;'>",
        ) || '',
      jobResponsibilities:
        documentToHtmlString(job?.fields?.jobResponsibilities).replace(
          '<ul>',
          "<ul style='list-style-type: circle; margin-left: 20px;'>",
        ) || '',
      remunerationPackage:
        documentToHtmlString(job?.fields?.remunerationPackage).replace(
          '<ul>',
          "<ul style='list-style-type: circle; margin-left: 20px;'>",
        ) || '',
      tags: tagReducer(job?.metadata?.tags) || [],
      company: companyReducer(job?.fields?.company) || [],
      relatedJobs:
        relatedJopParcer && relatedJobs ? jobReducer(relatedJobs, false) : [],
    }
  })

  return jobsArray
}
