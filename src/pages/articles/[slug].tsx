import { Container } from '@mui/material'
import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import Copyright from '../../components/Copylight'
import { ArticlePage } from '../../components/pages/ArticlePage'
import {
  Article,
  articlesListToMap,
  ArticlesMap,
  extractArticleLink,
  getAllArticles,
  getArticleBySlug,
} from '../../lib/api/article'
import { ConfigJson, getConfigJson } from '../../lib/api/config'
import { ArticlesContext, ExternalMetadataContext } from '../_app'
import { getNow } from '../../lib/datetime'
import {
  ExternalMetadata,
  getExternalMetadataJson,
} from '../../lib/api/externalMetadata'
import { getRelatedJson } from '../../lib/api/relatedArticles'
import { RelatedArticles } from '../../components/RelatedArticles'
import { rootPath } from '../../lib/consts'
import { AppBarWithTitle } from '../../components/AppBar'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Post: NextPage<Props> = ({
  post,
  config,
  postsMap,
  metadata,
  relatedPosts,
}: {
  post: Article
  config: ConfigJson
  postsMap: ArticlesMap
  metadata: ExternalMetadata
  relatedPosts: Article[]
}) => {
  const { setPosts } = useContext(ArticlesContext)
  setPosts(postsMap)

  const { setMetadata } = useContext(ExternalMetadataContext)
  setMetadata(metadata)

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const now = getNow()
  if (post?.posted_at > now) {
    return <ErrorPage statusCode={404} />
  }
  if (post.description === '') {
    post.description = `${config.author_name}の記事です。`
  }
  return (
    <div>
      <Head>
        <title>{`${post.title} | ${config.blog_title}`}</title>
        <meta name="description" content={`${post.description}`} />
        <link rel="icon" href={`${rootPath}/static/images/favicon.ico`} />
        <meta
          property="og:title"
          content={`${post.title} | ${config.blog_title}`}
        />
        <meta property="og:description" content={post.description} />
        <meta
          property="og:image"
          content={`${rootPath}/static/images/thumbnail/${post.slug}.jpg`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={config.blog_title} />
        <meta property="og:url" content={`${rootPath}/article/${post.slug}`} />
        <meta
          name="twitter:image"
          content={`${rootPath}/static/images/thumbnail/${post.slug}.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <AppBarWithTitle config={config} />
        <Container maxWidth="md">
          <ArticlePage config={config} post={post} />
          <RelatedArticles posts={relatedPosts} />
        </Container>
      </main>
      <footer>
        <Copyright config={config} />
      </footer>
    </div>
  )
}

export const getStaticPaths = async () => {
  const posts = getAllArticles(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const post = await getArticleBySlug(params.slug, [
    'slug',
    'title',
    'posted_at',
    'updated_at',
    'content',
    'tags',
    'description',
  ])
  const config = getConfigJson()
  const metadata = getExternalMetadataJson()
  const linkedSlugs: string[] = extractArticleLink(post.content)
  const relatedSlugs = getRelatedJson()[post.slug]
  const postsMap = articlesListToMap(
    getAllArticles(['slug', 'title', 'posted_at', 'tags']).filter(
      (post) =>
        linkedSlugs.includes(post.slug) || relatedSlugs.includes(post.slug),
    ),
  )
  const relatedPosts = relatedSlugs.map((slug) => {
    return postsMap[slug]
  })
  return {
    props: {
      post,
      config,
      postsMap,
      metadata,
      relatedPosts,
    },
  }
}

export default Post
