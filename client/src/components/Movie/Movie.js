import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'


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
  <div className='wrapper'>
    <div className='column'>
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
    </div>
    <div className='column'>[Review form goes here.]</div>
  </div>
  )
}

export default Movie;