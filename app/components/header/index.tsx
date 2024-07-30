import Image from 'next/image'
import Link from 'next/link'
import { homedir } from 'os'
import { NavItem } from './nav-item'

export const Header = () => {
  const NAV_ITEMS = [
    {
      label: 'home',
      href: '/',
    },
  ]
  return (
    <>
      <header className="container flex justify-between items-center py-4 bg-transparent">
        <div className="flex items-center gap-2">
          <Link href="/">
            <figure>
              <Image
                src="/images/logo-saberes-perpertuo.jpg"
                width={50}
                height={50}
                alt={''}
              />
            </figure>
          </Link>
          <strong className="text-emerald-400 font-mono ">
            Saberes Perpertuo
          </strong>
        </div>

        <div>
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </div>
      </header>
    </>
  )
}
