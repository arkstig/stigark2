import { getImageDimensions } from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url'

export default function Image({ value, isInline }) {
  const { width, height } = getImageDimensions(value)
  return (
    <img
      src={urlBuilder({
        projectId: 'ejioh35f',
        dataset: 'production',
      })
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}
