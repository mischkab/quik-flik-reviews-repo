import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 30px;

  img {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: -8px;
  }
`
const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`

const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`

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
    <Wrapper>
      <h1> <img src={image} alt={title} /> {title}</h1>
      <div>
        <TotalReviews>{total} {total === 1? 'User Review' : 'User Reviews'}</TotalReviews>
        <TotalOutOf>avg out of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header