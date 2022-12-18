const MovieCard = (props) => {
  return (
    <div className='card'>
      <div className='movie-poster'>
        <img src={props.attributes.image} alt={props.attributes.title}></img>
      </div>
      <div className='movie-title'>{props.attributes.title}</div>
      <div className='movie-director'>{props.attributes.director}</div>
      <div className='movie-link'>
        <a href={`/movies/${props.attributes.id}`}>View Movie</a>
      </div>
    </div>
  )
}

export default MovieCard