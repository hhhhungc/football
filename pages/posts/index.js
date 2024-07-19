import Link from 'next/link'
import Image from 'next/image'

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>

      <Link href="/">Back to home</Link>
      <Image src="/images/profile.jpg" height={144} width={144} alt="test" />
    </>
  )
}
