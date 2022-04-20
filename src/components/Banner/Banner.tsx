import classes from './Banner.module.css';
import React, { useEffect, useState } from 'react'
import axios from '../../localaxios';
import userrequests from '../../request';



interface stateType{
    title? : string,
    original_name? : string,
    name? : string,
    overview : string,
    backdrop_path : string
}

const Banner : React.FC = () => {

    const [movie,setMovie] = useState<stateType>()

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(userrequests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
        }
        fetchData();
    },[])

  return (
    <div className={classes.banner} style={{'backgroundImage' : `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`}}>
        <div className={classes.banner_content}>
            <div className={classes.banner_title}>
                <h1>
                    {movie?.title || movie?.original_name ||movie?.name}
                </h1>
            </div>

            <div className={classes.banner_description}>
                <p>
                    {movie?.overview}
                </p>
            </div>

            <div className={classes.banner_buttons}>
                <button className={classes.button_play}>Play</button>
                <button className={classes.button_more_info}>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default Banner;