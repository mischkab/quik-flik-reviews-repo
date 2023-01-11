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


const Movie = ({user}) => {
  const [movie, setMovie] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState([])
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

    if (user) {
      setReview(Object.assign({}, review, {[e.target.name]: e.target.value, user_id : user.id, movie_id: movie.id}))
    }
    
    console.log('review:', review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoaded(false)

    fetch(`/movies/${id}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    }).then(res => {
      setLoaded(true)
      if (res.ok) {
        setReview({title: '', comment: '', rating: 0})
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    })
  }

  const setRating = (rating, e) => {
    e.preventDefault()

    setReview ({...review, rating})
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
            setRating={setRating}
            title={movie.title}
            reviews={movie.reviews}
            review={review}
            user={user}
            errors={errors}
          />
        </Column>
      </Fragment>
    }
  </Wrapper>
  )
}

export default Movie;