import Link from 'next/link'

type NavItemProps = {
  label: string
  href: string
}
export const NavItem = ({ href, label }: NavItemProps) => {
  return (
    <Link href={href} className="space-x-1 text-cool ">
      <span>#</span>
      <span>{label}</span>
    </Link>
  )
}
