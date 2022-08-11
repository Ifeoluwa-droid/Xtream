import React from "react";
import { Pagination } from "@mui/material";
import MovieCard from "../MovieCard/MovieCard";
import classes from './Category.module.css';
import { original } from "../../config/config";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import ColumnStack from "../ui/ColumnStack";

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
        <ColumnStack sx={{alignItems: 'flex-start', marginBottom: '4rem', padding: '2rem', gap: '3rem'}} ref={ref}>
            <h2 style={{color: 'white', fontSize: '3rem', fontWeight: '300', fontFamily: "'Ubuntu', sans-serif"}}>{props.categoryHeading}</h2>
            <div className={classes.movies}>
                {props.categoryMovies.map(movie => 
                        <MovieCard 
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
            </div>
            <Pagination sx={{marginTop: 5}} count={props.pageCount > 500 ? 500 : props.pageCount} color='primary' onChange={handlePageChange} page={props.currentPage}/>
        </ColumnStack>
     );
})
 
export default Category;

