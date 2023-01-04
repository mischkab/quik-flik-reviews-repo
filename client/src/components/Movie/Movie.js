import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: right;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`
const Main = styled.div`
  padding-left: 50px;
`


const Movie = () => {
  const [movie, setMovie] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    fetch(`/movies/${id}`)
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => {
      setMovie(res)
      setLoaded(true)
    })
    .catch(res => console.log(res))
  }, [id])

  return (
  <Wrapper>
    <Column>
      <Main>
        { 
          loaded && 
          <Header 
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          director={movie.director}
          image={movie.image}
          reviews={movie.reviews}
          />
        }
        <div className='reviews'></div>
      </Main>
    </Column>
    <Column>[Review form goes here.]</Column>
  </Wrapper>
  )
}

export default Movie;