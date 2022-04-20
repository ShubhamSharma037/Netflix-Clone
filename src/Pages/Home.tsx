import React from 'react'
import Banner from '../components/Banner/Banner'
import MovieList from '../components/Movie List/MovieList'
import request from '../request';

type Props = {}

const Home = (props: Props) => {
  return (
    <>
        <Banner/>
        <MovieList isLarge title='Netflix Originals' fetchURL={request.fetchNetflixOriginals}/>
        <MovieList  title='Trending Now' fetchURL={request.fetchTrending}/>
        <MovieList  title='Top Rated' fetchURL={request.fetchTopRated}/>
        <MovieList  title='Action Movies' fetchURL={request.fetchActionMovies}/>
        <MovieList  title='Comedy Movies' fetchURL={request.fetchComedyMovies}/>
        <MovieList  title='Romantic Movies' fetchURL={request.fetchRomanceMovies}/>
        <MovieList  title='Horror Movies' fetchURL={request.fetchHorrorMovies}/>
        <MovieList  title='Documentaries' fetchURL={request.fetchDocumentaries}/>
    </>
  )
}

export default Home;