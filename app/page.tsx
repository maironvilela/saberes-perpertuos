import Image from 'next/image'
import { Banner } from './components/banner'
import { About } from './components/about'

export default function Home() {
  return (
    <>
      <Banner />
      <About />
    </>
  )
}
