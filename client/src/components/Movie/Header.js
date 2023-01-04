const Header = ({
  id,
  title,
  overview,
  director,
  image,
  reviews
}) => {
  const total = reviews.length
  return (
    <div className='wrapper'>
      <h1> <img src={image} alt={title} /> {title}</h1>
      <div>
        <div className='totalReviews'>{total} {total === 1? 'User Review' : 'User Reviews'}</div>
      </div>
    </div>
  )
}

export default Header