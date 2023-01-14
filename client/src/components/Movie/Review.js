import styled from 'styled-components'
import Rating from '../Rating/Rating'
import { useParams, useNavigate } from 'react-router-dom'

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
const ButtonWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`
const Icon = styled.button`
  box-shadow: none;
  border-radius: 4px;
  margin: 0 4px;
  cursor: pointer;

  i {
    font-size: 18px;
  }

  &:hover {
    background: #9f9f9f;
  }
`

const Review = (props) => {
  const id = useParams().id
  const navigate = useNavigate()

  function handleDeleteReview() {
    fetch(`/movies/${id}/reviews/${props.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        props.onDeleteReview(props.review);
        navigate(0)
      }
    });
  }

  return (
    <Card>
      <RatingContainer>
        <Rating rating={props.rating}/>
      </RatingContainer>
      <Title>{props.title}</Title>
      <Comment>{props.comment}</Comment>
      <Author>{props.user.username}</Author>
      {
        props.currentUser && props.user.username === props.currentUser.username &&
        <ButtonWrapper>
          <Icon onClick={handleDeleteReview}>
            <i className='fa fa-trash'></i>
          </Icon>
        </ButtonWrapper>
      }
    </Card>
  )
}

export default Review