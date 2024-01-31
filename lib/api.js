import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: process.env.SERVECE_DOMAIN,
  apiKey: process.env.API_KEY
})
export { client }
