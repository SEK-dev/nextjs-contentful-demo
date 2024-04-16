import { client } from './client'
import { companyReducer } from './reducers'

export const getCompany = async () => {
  try {
    // Get all companies
    let companies = await client.getEntries({ content_type: 'company' })
    return companies.items
  } catch (error) {
    console.log(error)
  }
}

export const getCompanySlugs = async () => {
  try {
    const rowSlugs = await client.getEntries({
      content_type: 'company',
      select: 'fields.slug',
    })
    const slugs = rowSlugs.items.map(item => item.fields.slug)
    return slugs
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getCompanyBySlug = async slug => {
  try {
    const found = await client.getEntries({
      content_type: 'company',
      'fields.slug': slug,
      include: 2,
    })

    if (found.items.length == 0) return null
    let company = [found.items[0]]

    return companyReducer(company[0])
  } catch (error) {
    console.log(error)
    return {}
  }
}
