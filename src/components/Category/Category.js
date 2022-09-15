import React from "react"
import MovieCard from "../moviecard/MovieCard"
import classes from './Category.module.css'
import { original } from "../../config/config"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import ColumnStack from "../ui/ColumnStack"
import Pagination from "../ui/Pagination"
import { Typography, Box, Skeleton, Stack, CircularProgress, useMediaQuery } from "@mui/material"

const Category = React.forwardRef((props, ref) => {

    const dispatch = useDispatch();
    const mediaMatchesMaxWidth550 = useMediaQuery('(max-width: 550px)')

    const handlePageChange = useCallback((event, newPage) => {
        dispatch(props.setPage(newPage))
        window.scrollTo(
            { 
             top: ref.current.offsetTop,
             left: ref.current.offsetLeft
            }
        )
    })

    return ( 
        <ColumnStack sx={{alignItems: 'flex-start', marginBottom: '4rem', padding: mediaMatchesMaxWidth550 ? '1rem' : '2rem', gap: '3rem', width: '100%'}} className={classes['category']} ref={ref}>
            <Typography variant="h2" sx={{color: 'white'}} className={classes['category-heading']}>{props.categoryHeading}</Typography>
            <Box className={classes.movies}>
            {props.categoryMovies.map(movie => 
                <MovieCard 
                    mediaType={movie['media_type']}
                    key={movie['id']}
                    id={movie['id']}
                    imgSrc={`${original}${movie['poster_path']}`}
                    voteAverage={movie['vote_average']}
                    voteCount={movie['vote_count']}
                    genres={movie['genre_ids']}
                    title={movie['title']}
                    date={movie['release_date']}
                />
            )}
            </Box>
            <Pagination 
                pageCount={props.pageCount}
                handlePageChange={handlePageChange} 
                currentPage={props.currentPage}
            />
        </ColumnStack>
     );
})

export const CategorySkeleton = () => {

    return (
        <ColumnStack sx={{alignItems: 'flex-start', marginBottom: '4rem', padding: '2rem', gap: '3rem', width: '100%'}} className={classes['category-skeleton']}>
            <Typography
                variant="h2"
                width="60%"
            >
                <Skeleton
                    variant="rectangular"
                />
            </Typography>
            <Stack alignItems="center" justifyContent="center" sx={{
                width: '100%',
                height: '272px'
            }}>
                <CircularProgress />
            </Stack>
            <Typography
                variant="h3"
                width="25%"
            >
                <Skeleton
                    variant="rectangular"
                />
            </Typography>
        </ColumnStack>
    )
}
 
export default Category;

