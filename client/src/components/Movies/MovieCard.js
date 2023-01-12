import styled from 'styled-components'
import {Link}from 'react-router-dom'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
`
const MoviePoster = styled.div`
  padding: 10px;

  img {
    display: block;
    width: auto;
    margin: auto;
    height: 350px;
    width: 250px;
    border: 1px solid #efefef;
  }
`
const MovieTitle = styled.div`
  padding: 20px 0 10px 0;
  font-size: 20px;
`
const MovieDirector = styled.div`
  padding: 2px 0 10px 0;
  font-size: 16px;
`

const MovieLink = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`

const MovieCard = (movie) => {
  return (
    <Card>
      <MoviePoster>
        <img src={movie.image} alt={movie.title}/>
      </MoviePoster>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieDirector>Director: {movie.director}</MovieDirector>
      <MovieLink>
        <Link to={`/movies/${movie.id}`}>View Movie</Link>
      </MovieLink>
    </Card>
  )
}

export default MovieCard