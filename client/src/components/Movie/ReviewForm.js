const ReviewForm = (props) => {
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
          [Star Rating Goes Here]
        </div>
      </div>
      <button type='submit'>Submit Your Review</button>
    </form>
  </div>
  )
}

export default ReviewForm