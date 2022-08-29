import React from "react"
import { Pagination, Typography, Box, Skeleton, Stack, CircularProgress } from "@mui/material"
import MovieCard from "../MovieCard/MovieCard"
import classes from './Category.module.css'
import { original } from "../../config/config"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import ColumnStack from "../ui/ColumnStack"

const Category = React.forwardRef((props, ref) => {

    const dispatch = useDispatch();

    const handlePageChange = useCallback((event, newPage) => {
        dispatch(props.setPage(newPage))
        window.scrollTo(
            { 
             top: ref.current.offsetTop
            }
        )
    })

    return ( 
        <ColumnStack sx={{alignItems: 'flex-start', marginBottom: '4rem', padding: '2rem', gap: '3rem', width: '100%'}} ref={ref}>
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
            <Pagination sx={{marginTop: 5}} count={props.pageCount > 500 ? 500 : props.pageCount} color='primary' onChange={handlePageChange} page={props.currentPage}/>
        </ColumnStack>
     );
})

export const CategorySkeleton = () => {

    return (
        <ColumnStack sx={{alignItems: 'flex-start', marginBottom: '4rem', padding: '2rem', gap: '3rem', width: '100%'}}>
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

