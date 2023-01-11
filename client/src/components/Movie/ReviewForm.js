import { Error } from "../../styles"

const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map( (rating, index))

  return (
  <div className='wrapper'>
    <form onSubmit={props.handleSubmit}>
      <div>Have an experience with {props.title} share your review</div>
      <div className='field'>
        <input onChange={props.handleChange} value={props.review.title} type='text' name='title' placeholder='Review Title'/>
      </div>
      <div className='field'>
        <input onChange={props.handleChange} value={props.review.comment} type='text' name='comment' placeholder='Review Comment'/>
      </div>
      <div className='field'>
        <div className='rating-containter'>
          <div className='rating-title-text'>Rate This Movie</div>
            <input onChange={props.handleChange} value={props.review.rating} type='text' name='rating' placeholder='Rating out of 5'/>
        </div>
      </div>
      <button type='submit'>Submit Your Review</button>
      <div>
        {props.errors && props.errors.map((err) =>
          <Error key={err}>{err}</Error>
        )}
      </div>
    </form>
  </div>
  )
}

export default ReviewForm