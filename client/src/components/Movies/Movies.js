import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto; 
`
const Header = styled.div`
  padding: 50px 100px 10px 100px;

  h1 {
    font-size: 50px;
  }
`
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const MovieCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px; 
`

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies')
    .then(res => res.json())
    .then(res => {
      setMovies(res)
    })
    .catch(res => console.log(res))
  }, [])


  return (
    <Home>
      <Header>
        <h1>Quik Flik Reviews</h1>
        <Subheader>Real movie reviews by real viewers.</Subheader>
      </Header>
      <MovieCards>
        {movies && movies.map((m) => (
        <MovieCard
          key={m.id} 
          id={m.id}
          image={m.image}
          title={m.title} 
          director={m.director}
          />
        ))}
      </MovieCards>
    </Home>
  )
}

export default Movies; 