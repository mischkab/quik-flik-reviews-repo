import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.nav`
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Left = styled.div`
  flex-basis: auto;
  align-self: flex-start !important;
`
const Right = styled.div`
  flex-basis: 12%;
  align-self: flex-end !important;
  margin-right: 24px;
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer
  }
`

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0;
  margin:0;
  list-style-type: none;
`

const Logo = styled.span`
  margin-left: 18px;
  font-weight: bold;
  font-size: 20px;
  a {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: #fff;
    text-decoration: none;
  }
`

const Navbar = ({user, setUser}) => {
  function logout() {
    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser(null)
      }
    })
  }

  return (
    <Wrapper>
      <Container>
        <Nav>
          <Left>
            <Logo><Link to='/'>Quik Flik Reviews</Link></Logo>
          </Left>
          <Right>
            <Menu>
              <li><Link to='/'>Home</Link></li>
              {
                !user ? (
                  <>
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to='/register'>Sign Up</Link></li>
                  </>
                ) : (
                  <li><Link to='/' onClick={logout}>Logout</Link></li>
                )
              }
            </Menu>
          </Right>
        </Nav>
      </Container>
    </Wrapper>
  )
}

export default Navbar