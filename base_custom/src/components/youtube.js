import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

export default function Youtube({ value }) {
  const { url } = value
  const id = getYouTubeId(url)
  return <YouTube className="youTube" videoId={id} />
}
