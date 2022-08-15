import sanityClient from '@sanity/client'

// Nøkler sanity trenger for å fungere
// Disse nøklene må legges i .env filen
const options = {
  projectId: 'ejioh35f',
  dataset: 'production',
}

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
})

export default client
