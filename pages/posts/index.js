import Image from 'next/image'
import Layout from '../../components/layout'

export default function Blog() {
  return (
    <>
      <Layout>
        <h1>Blog</h1>
        <Image src="/images/profile.jpg" height={144} width={144} alt="test" />
      </Layout>
    </>
  )
}
