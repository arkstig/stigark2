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
  'id': _id,
  colorcode


`
export const getPortfolios = async () => {
  try {
    const data = await client.fetch(`*[_type == "portfolio"]{${eventFields}}`)
    return data
  } catch (error) {
    // Sender feilmelding tilbake om noe går galt
    throw new Error(error)
  }
}

export const getPortfolio = async (slug) => {
  try {
    const data = await client.fetch(
      `*[_type == "portfolio" && slug.current == $slug]{${eventFields}}`,
      { slug }
    )
    // Returnerer kun første element hvis data finnes
    // Dette for å unngå å håndtere en liste i Event siden
    return data?.[0]
  } catch (error) {
    // Sender feilmelding tilbake om noe går galt
    throw new Error(error)
  }
}

export const getPortfoliosMain = async () => {
  try {
    const data = await client.fetch(
      `*[_type == "portfolioMain"]{${eventFields}}`
    )
    return data
  } catch (error) {
    // Sender feilmelding tilbake om noe går galt
    throw new Error(error)
  }
}

export const getPortfolioMain = async (slug) => {
  try {
    const data = await client.fetch(
      `*[_type == "portfolioMain" && slug.current == $slug]{${eventFields}}`,
      { slug }
    )
    // Returnerer kun første element hvis data finnes
    // Dette for å unngå å håndtere en liste i Event siden
    return data?.[0]
  } catch (error) {
    // Sender feilmelding tilbake om noe går galt
    throw new Error(error)
  }
}
