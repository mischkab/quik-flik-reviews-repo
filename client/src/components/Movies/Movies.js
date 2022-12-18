import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const Movies = () => {
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    const { data } = await axios.get('/movies')

    setMovies(data)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div>
      <span className="pageTitle">Movies</span>
      <div className="movies">
        {movies && movies.map((c) => (
        <MovieCard 
          key={c.id} 
          id={c.id} 
          poster={c.image} 
          title={c.title} 
          />
        ))}
      </div>
    </div>
  )
}

// function Movies() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios.get('/movies')
//     .then(res => {
//       setMovies(res.data.data) 
//     })
//     .catch(res => console.log(res))
//   }, [movies.length])

//   const list = movies.map( item => {
//     return (<li key={item.attributes.name}>(item.attributes.name)</li>)
//   })

//   return (
//     <div>This is the Movies#index view for the app</div>
//   )
// }

export default Movies; 