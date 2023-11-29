import Link from 'next/link'
import Image from 'next/image'
import Logo from './NekruzAshrapov.png'
export default function Navbar() {
  return (
    <nav>
    <Image 
        src = {Logo}
        alt = 'Nekruz Ashrapov Logo'
        width={70}
        quality = {100}
        placeholder='blur'
    />

    <Link href = "/">Dashboard</Link>
    <Link href = "/projects">Projects</Link>

    </nav>
  )
}
