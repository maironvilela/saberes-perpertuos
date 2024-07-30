import Image from 'next/image'

export type CardVideosProps = {
  url: string
  cover: string
  description: string
}

export const CardVideos = ({ url, cover, description }: CardVideosProps) => {
  return (
    <div key={cover}>
      <div>
        <Image
          src={`/images/${cover}`}
          alt={description}
          width={300}
          height={300}
        />
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}
