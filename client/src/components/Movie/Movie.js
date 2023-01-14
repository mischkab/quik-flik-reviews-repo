import { useEffect, useState, Fragment } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
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
  const [reviews, setReviews] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState([])
  const {id} = useParams()
  const navigate = useNavigate()

  // fetch movie information by movie_id
  useEffect(() => {
    fetch(`/movies/${id}`)
    .then(res => res.json())
    .then(res => {
      setMovie(res)
      setLoaded(true)
    })
    .catch(res => console.log(res))
  }, [id])

  // fetch movie reviews by movie_id
  useEffect(() => {
    fetch(`/movies/${id}/reviews`)
    .then(res => res.json())
    .then(res => {
      setReviews(res)
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

  // Handle review submit
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`/movies/${id}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    }).then(res => {
      if (res.ok) {
        setReview({title: '', comment: '', rating: 0})
        navigate(0)
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    })
  }

  // set review rating
  const setRating = (rating, e) => {
    e.preventDefault()

    setReview ({...review, rating})
  }

  // destroy a review
 function handleDeleteReview(deletedReview) {
    setReviews((reviews) =>
      reviews.filter((review) => review.id !== deletedReview.id)
    );
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
              rating={movie.average_rating}
              />
            <div className='reviews'>
              {reviews && reviews.map((r) => (
                <Review
                  key={r.id}
                  id={r.id}
                  title={r.title}
                  comment={r.comment}
                  rating={r.rating}
                  user={r.user}
                  onDeleteReview={handleDeleteReview}
                  review={r}
                />
              ))}
            </div>
          </Main>
        </Column>
        <Column>
          <ReviewForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setRating={setRating}
            title={movie.title}
            review={review}
            user={user}
            errors={errors}
            total={movie.reviews}
          />
        </Column>
      </Fragment>
    }
  </Wrapper>
  )
}

export default Movie;