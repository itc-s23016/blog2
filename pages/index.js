import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getPlaiceholder } from 'plaiceholder'
import { getImageBuffer } from 'lib/getImageBuffer'

import { eyecatchLocal } from 'lib/constants'

const Home = ({ posts }) => {
  return (
    <Container>
      <Meta />
      <Hero title='CUBE' subtitle='アウトプットしていくサイト' imageOn />
      <Posts posts={posts} />
      <Pagination nextUrl='/blog' nextText='More Posts' />
    </Container>
  )
}

const getStaticProps = async () => {
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!Object.prototype.hasOwnProperty.call(post, 'eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const imageBuffer = await getImageBuffer(post.eyecatch.url)
    const { base64 } = await getPlaiceholder(imageBuffer)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      posts: posts
    }
  }
}
export { getStaticProps }
export default Home
