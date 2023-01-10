import { useState } from 'react';
import { Error, Label } from '../../styles';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  padding: 20px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #d8dee2;
  border-radius: 0 0 3px 3px;
`

const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 15px;
  display: block;
  width: 100%;
  min-height: 34px;
  padding: 6px 8px;
  font-size: 16px;
  line-height: 20px;
  color: #24292e;
  vertical-align: middle;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
  width: 100%;
  box-sizing: border-box; /* add this */
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
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
  width: 100%;
  box-sizing: border-box; /* add this */
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
`
const FormField = styled.div`
  width: 100%;
`

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate('/');
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <LoginButton variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </LoginButton>
      </FormField>
      <FormField>
        {errors && errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </Form>
  );
}

export default LoginForm;
