import client from '../client'

const eventFields = `
  title,
  'slug': slug.current,
  preAmble,
  'category': category->title,
`
export const getEvents = async () => {
  const data = await client.fetch(`*[_type == "portfolio"]{${eventFields}}`)
  return data
}
