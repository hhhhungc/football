import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

// 需要為 id 回傳一個可能的值的清單
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    // 包含由 getAllPostIds() 回傳的已知的路徑陣列，陣列中包含了由 pages/posts/[id].js 定義的 params
    paths,
    fallback: false
  }
}

// 使用 id 來抓取資料，並渲染文章內容
// 此文章頁目前在 getStaticProps 當中使用 getPostData 取得文章資料並以 props 形式回傳。
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
