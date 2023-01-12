import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  padding: 20px;
  margin: 0 30px 20px 0;
  position: relative;
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Rating = styled.div``

const Title = styled.div`
  padding: 20px 0 0 0;
  font-size: 18px;
`

const Comment = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`
const Author = styled.div`
  font-size: 16px;
  margin: 0 8px;
`

const Review = (props) => {
  return (
    <Card>
      <RatingContainer>
        <Rating>{props.rating}</Rating>
      </RatingContainer>
      <Title>{props.title}</Title>
      <Comment>{props.comment}</Comment>
      <Author>{props.user.username}</Author>
    </Card>
  )
}

export default Review