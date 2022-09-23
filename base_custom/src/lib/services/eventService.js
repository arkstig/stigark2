import client from '../client'

const eventFields = `
  title,
  'portfoliosSlug': slug.current,
  ingress,
  "imageUrl": portfolioimage.asset->url,
  'category': category->title,
  hovedinnhold,
  kategoriSet,
  reddit,
  live,
  'id': _id


`
export const getPortfolios = async () => {
  const data = await client.fetch(`*[_type == "portfolio"]{${eventFields}}`)
  return data
}
export const getPortfolio = async (slug) => {
  const data = await client.fetch(
    `*[_type == "portfolio" && slug.current == $slug]{${eventFields}}`,
    { slug }
  )
  // Returnerer kun første element hvis data finnes
  // Dette for å unngå å håndtere en liste i Event siden
  return data?.[0]
}

export const getPortfoliosMain = async () => {
  const data = await client.fetch(`*[_type == "portfolioMain"]{${eventFields}}`)
  return data
}
export const getPortfolioMain = async (slug) => {
  const data = await client.fetch(
    `*[_type == "portfolioMain" && slug.current == $slug]{${eventFields}}`,
    { slug }
  )
  // Returnerer kun første element hvis data finnes
  // Dette for å unngå å håndtere en liste i Event siden
  return data?.[0]
}
