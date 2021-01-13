import PostList from './post-list'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <main>
      <Helmet>
        <title>Blog React avec optimisations SEO</title>
        <link rel="canonical" href="https://hack3-blog-react-sans-seo.netlify.app/" />
        <meta name="description" content="Voir les bonnes pratiques SEO, notamment avec React" />
      </Helmet>
      <h1>Blog React avec optimisations SEO</h1>
      <PostList />
    </main>
  )
}

export default Home;
