import client from '../client'

const eventFields = `
  title,
  'portfoliosSlug': slug.current,
  ingress,
  portfolioimage,
  'category': category->title,
  hovedinnhold,
  kategoriSet,
  reddit,
  live,


`
export const getPortfolios = async () => {
  const data = await client.fetch(`*[_type == "portfolio"]{${eventFields}}`)
  return data
}
