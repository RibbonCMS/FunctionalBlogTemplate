import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { NextRouter } from "next/router";
import { Article } from "../../lib/api/article";
import { ConfigJson } from "../../lib/api/config";
import { Pagination } from "../Pagenation";
import { PostCards } from "../PostCard";
import { YearSelector } from "../YearSelector";

export const getPage = ( router: NextRouter ) => {
    if (typeof router.query.page === 'string'){
        return router.query.page
    } else {
        return undefined
    }
}

export const getYear = ( router: NextRouter ) => {
    if (typeof router.query.year === 'string'){
        return router.query.year
    } else {
        return undefined
    }
}

export const ArticlesList = ({ config, years, router, posts }: { config: ConfigJson, years: string[], router: NextRouter, posts: Article[] }) => {
    const postNumPerPage: number = 14
    const postNum: number = posts.length
    const pageNum: number = Math.floor((postNum - 1) / postNumPerPage) + 1

    const year: string | undefined = getYear(router)
    const page: string | undefined = getPage(router)

    const handleChangeSelect = (event: SelectChangeEvent) => {
        let query: {[key: string]: string} = {}
        query.year = event.target.value
        if (typeof page === 'string') {
            query.page = page
        }
        router.push({
            pathname:"/articles",
            query: query
          });
    }
    const handleChangePagination = (event: React.ChangeEvent<unknown>, page: number) => {
        let query: {[key: string]: string} = {}
        query.page = `${page}`
        if (typeof year === 'string') {
            query.year = year
        }
        router.push({
            pathname:"/articles",
            query: query
          });
    }
    
    return (
        <div id="paginationAnchor">
            <Typography variant='h1' align='center'>
                Articles List
            </Typography>
            <Box sx={{m: '3rem'}} />
            <YearSelector year={year} years={years} handleChange={handleChangeSelect}/>
            <Box sx={{m: '2rem'}} />
            <Pagination pageNum={pageNum} page={page} handleChange={handleChangePagination} />
            <PostCards
                  posts={posts}
                  page={page}
                  postNumPerPage={postNumPerPage}
                />
            <Pagination pageNum={pageNum} page={page} handleChange={handleChangePagination} />

        </div>
    )
}