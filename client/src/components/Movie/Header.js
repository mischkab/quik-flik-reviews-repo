import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 100px 50px 0;
  font-size: 30px;

  img {
    height: 400px;
    width: 300px;
    border-radius: 1%;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: -25px;
  }
`
const MovieTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
`
const MovieDirector = styled.div`
  font-size: 18px;
  font-weight: normal;
  font-style: italic;
  margin-bottom: 18px;
`

const OverviewTitle = styled.div`
  padding: 0 0 5px 0;
  font-size: 27px;
  font-weight: bold;
`
const Overview = styled.div`
  font-size: 18px;
`

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
  margin-top: 18px;
  margin-bottom: -10px;
`

const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`

const Header = (m) => {
  const total = m.reviews.length
  return (
    <Wrapper>
      <h1> <img src={m.image} alt={m.title} /></h1>
      <MovieTitle>{m.title}</MovieTitle>
      <MovieDirector>Director: {m.director}</MovieDirector>
      <OverviewTitle>Overview</OverviewTitle>
      <Overview>{m.overview}</Overview>
      <div>
        <TotalReviews>{total} {total === 1? 'User Review' : 'User Reviews'}</TotalReviews>
        <TotalOutOf>avg out of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header