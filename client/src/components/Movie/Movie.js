import { useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import ReviewForm from './ReviewForm'
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
    .then(res => {
      setMovie(res)
      setLoaded(true)
    })
    .catch(res => console.log(res))
  }, [id])

  const handleChange = (e) => {
    e.preventDefault()

    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))

    console.log('review:', review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()  
  }

  return (
  <Wrapper>
    { 
      loaded &&
      <Fragment>
        <Column>
          <Main>
              <Header 
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              director={movie.director}
              image={movie.image}
              reviews={movie.reviews}
              />
            <div className='reviews'></div>
          </Main>
        </Column>
        <Column>
          <ReviewForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            title={movie.title}
            reviews={movie.reviews}
            review={review}
          />
        </Column>
      </Fragment>
    }
  </Wrapper>
  )
}

export default Movie;