import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  padding: 20px;
  margin: 0 30px 20px 0;
  position: relative;
  margin-right: 20px
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Title = styled.div`
  padding: 20px 0 0 0;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`

const Comment = styled.div`
  padding: 0 0 20px 0;
  font-size: 16px;
  line-height: 1.6;
`
const Author = styled.div`
  font-size: 16px;
  margin: 0 8px;
  color: #19408a;
`

const Review = (props) => {
  return (
    <Card>
      <RatingContainer>
        <Rating rating={props.rating}/>
      </RatingContainer>
      <Title>{props.title}</Title>
      <Comment>{props.comment}</Comment>
      <Author>{props.user.username}</Author>
    </Card>
  )
}

export default Review