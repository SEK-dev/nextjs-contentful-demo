import { createClient } from 'contentful'

function isServer() {
  return !(typeof window != 'undefined' && window.document)
}
const serverOnlyCreateClient = () => {
  if (!isServer()) return
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.ENVIROMENT,
  })
  return client
}
export const client = serverOnlyCreateClient()
