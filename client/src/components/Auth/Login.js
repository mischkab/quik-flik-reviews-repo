import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import Register from "./Register";

const LoginWrapper = styled.div``
const FormWrapper = styled.div`
  margin-top:50px;
`
const FormContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`
const LoginButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  vertical-align: middle;
  background-position: -1px -1px;
  background-size: 110% 110%;
  border: 1px solid rgba(27,31,35,0.2);
  border-radius: 0.25em;
  width: 18%;
  box-sizing: border-box; /* add this */
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
`

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  

  return (
    <LoginWrapper>
      <FormWrapper>
        <FormContainer>
          {showLogin ? (
            <>
              <LoginForm onLogin={onLogin} />
              <Divider />
              <p>
                Don't have an account? &nbsp;
                <LoginButton color="secondary" onClick={() => setShowLogin(false)}>
                  Sign Up
                </LoginButton>
              </p>
            </>
          ) : (
            <>
              <Register onLogin={onLogin} />
              <Divider />
              <p>
                Already have an account? &nbsp;
              <LoginButton color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </LoginButton>
              </p>
            </>
          )}
        </FormContainer>
      </FormWrapper>
    </LoginWrapper>
  );
}




const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;
