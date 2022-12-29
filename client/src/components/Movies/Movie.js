import { useEffect, useState } from 'react'


const Movie = (props) => {
  const[movie, setMovie] = useState({})

  useEffect(() => {
    console.log(props)
  }, [])
  return <div>This is the Movies#show view for my app</div>
}

export default Movie;