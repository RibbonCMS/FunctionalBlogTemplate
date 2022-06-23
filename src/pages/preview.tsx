import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { Dispatch, SetStateAction, useContext, useState } from 'react'
import { ArticlePage } from '../components/pages/ArticlePage'
import { IndexPage } from '../components/pages/IndexPage'
import {
  Article,
  articlesListToMap,
  ArticlesMap,
  getAllArticles,
} from '../lib/api/article'
import { ConfigJson, getConfigJson } from '../lib/api/config'
import { IndexJson } from '../lib/api/fixed'
import { ArticlesContext } from './_app'
import YAML from 'yaml'
import { rootPath } from '../lib/consts'
import { AppBarWithTitle } from '../components/AppBar'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const SelectPageType = ({
  pageType,
  setPageType,
  setValue,
}: {
  pageType: string
  setPageType: Dispatch<SetStateAction<string>>
  setValue: Dispatch<SetStateAction<string>>
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setPageType(event.target.value as string)
    resetDefaultValue(event.target.value as string, setValue)
  }
  return (
    <FormControl>
      <InputLabel id="page-type-select-label">PageType</InputLabel>
      <Select
        labelId="page-type-select-label"
        id="page-type-select"
        value={pageType}
        label="PageType"
        onChange={handleChange}
      >
        <MenuItem value="article">article</MenuItem>
        <MenuItem value="index">index page</MenuItem>
      </Select>
    </FormControl>
  )
}

const valueToObject = (pageType: string, value: string) => {
  if (pageType === 'article') {
    const post: Article = {
      slug: 'preview',
      content: value,
      title: 'preview',
      posted_at: '',
      updated_at: '',
      tags: [{ name: 'preview', color: '656565', description: '' }],
      description: '',
    }
    return post
  } else if (pageType === 'index') {
    try {
      return YAML.parse(value) as IndexJson
    } catch (err) {
      return { site_description: '' } as IndexJson
    }
  }
  return undefined
}

const resetDefaultValue = (
  pageType: string,
  setValue: Dispatch<SetStateAction<string>>,
) => {
  if (pageType === 'article') {
    setValue('## preview article\nedit here!')
  } else if (pageType === 'index') {
    setValue('site_description: ')
  } else {
    setValue('')
  }
}

const Previewed = ({
  pageType,
  config,
  object,
}: {
  pageType: string
  config: ConfigJson
  object: any
}) => {
  if (object !== undefined) {
    if (pageType === 'article') {
      return <ArticlePage config={config} post={object} />
    } else if (pageType === 'index') {
      return <IndexPage config={config} index={object} />
    } else {
      return <div />
    }
  } else {
    return <div />
  }
}

const Preview: NextPage<Props> = ({
  config,
  postsMap,
}: {
  config: ConfigJson
  postsMap: ArticlesMap
}) => {
  const { setPosts } = useContext(ArticlesContext)
  setPosts(postsMap)
  const [pageType, setPageType] = useState('article')
  const [value, setValue] = useState('## preview article\nedit here!')
  const object = valueToObject(pageType, value)
  return (
    <div>
      <Head>
        <title>{`preview | ${config.blog_title}`}</title>
        <meta name="description" content={`${config.site_introduction}`} />
        <link rel="icon" href={`${rootPath}/static/images/favicon.ico`} />
      </Head>
      <main>
        <AppBarWithTitle config={config} />
        <Box sx={{ ml: '1rem', mt: '2rem' }}>
          <SelectPageType
            pageType={pageType}
            setPageType={setPageType}
            setValue={setValue}
          />
        </Box>
        <Grid container sx={{ mt: '2rem', ml: '1rem' }}>
          <Grid item sm={4} xs={12}>
            <TextField
              multiline
              fullWidth
              rows={20}
              id="editor"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </Grid>
          <Grid item sm={0.2} xs={0} />
          <Grid item sm={7.6} xs={12}>
            <Previewed pageType={pageType} config={config} object={object} />
          </Grid>
          <Grid item sm={0.2} xs={0} />
        </Grid>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const config: ConfigJson = getConfigJson()
  const postsMap = articlesListToMap(
    getAllArticles(['slug', 'title', 'posted_at', 'tags']),
  )

  return {
    props: { config, postsMap },
  }
}

export default Preview
