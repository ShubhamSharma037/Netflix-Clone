import { useEffect, useState } from 'react';
import classes from './MovieList.module.scss';
import axios from '../../localaxios';

type Props = {
    title : string,
    isLarge? : boolean,
    fetchURL : string
}

interface stateType{
    poster_path : string,
    backdrop_path : string,
    id : number
}

const MovieList = (props: Props) => {

    const baseURL = "https://image.tmdb.org/t/p/original/";
    const [movies,setMovies] = useState<stateType[]>();



    useEffect(()=>{
        async function fetchMovies(){
            const request = await axios.get(props.fetchURL);
            setMovies(request.data.results)
        }

        fetchMovies();
    },[props.fetchURL])

  return (
    <div className={classes.MovieList}>
        <h2>{props.title}</h2>

        <div className={classes.MovieRow}>
            {
                movies?.map(movie=>{
                    return <img src = {`${baseURL}${props.isLarge?movie.poster_path:movie.backdrop_path}`}
                    className={[classes.poster,(props.isLarge?classes.isLarge:null)].join(' ')}
                    key={movie.id}/>
                })
            }
        </div>
    </div>
  )
}

export default MovieList;