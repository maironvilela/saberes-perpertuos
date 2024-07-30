'use client'

import YouTube, { YouTubeProps } from 'react-youtube'
import { CardVideos } from './card-videos'

export const LatestVideos = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height: '200',
    width: '340',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  const VIDEOS = [
    {
      url: 'CFzmWmhL0iw?si=A2PB0l63Jee-hBD4',
    },
    {
      url: 'pAFdf8RPZ0Y?si=2ro47LjrunFGBhUp',
    },
    {
      url: 'eM6fIuV8lmw?si=8IuXFeWzI55k7nOW',
    },
    {
      url: 'u3qtClZc9bM?si=508iAx_ZPrBCSqKF',
    },
    {
      url: 'C4aHvKVUQmo?si=u4JI9B_G57oDoqS3',
    },
    {
      url: 'pAFdf8RPZ0Y?si=TzbIJ8f9XN7H97uz',
    },
  ]

  return (
    <div className="container flex flex-col gap-3 mt-8">
      <h2 className="font-mono py-5 text-emerald-600 font-bold text-xl ">
        Videos
      </h2>

      {VIDEOS.map(({ url }) => (
        <YouTube videoId={url} opts={opts} onReady={onPlayerReady} key={url} />
      ))}
    </div>
  )
}
