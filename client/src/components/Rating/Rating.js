import 'font-awesome/css/font-awesome.css'
import './Rating.css'

const Rating = (props) => {
  const rating = (props.rating/5) * 100

  return (
    <span className='star-wrapper'>
      <span className='stars' style={{width: rating + '%'}}></span>
    </span>
  )
}

export default Rating