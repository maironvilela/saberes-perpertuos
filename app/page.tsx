import Image from 'next/image'
import { Banner } from './components/banner'
import { About } from './components/about'
import { LatestVideos } from './components/latest-videos'

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <LatestVideos />
    </>
  )
}
