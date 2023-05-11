import React, { useState } from "react";
import { Container, Title, StyledForm } from "./Login.styled";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <Title>Login</Title>
      <StyledForm>
        <label htmlFor="email-address">Email address</label>
        <input
          type="email-address"
          name="email"
          id="email"
          value={input.email}
          onChange={(e) => handleChange}
          placeholder="Email address"
          autoComplete="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={input.password}
          onChange={(e) => handleChange}
          placeholder="Password"
          required
        />

        <input type="submit" value="Login" id="login-form-submit" />
      </StyledForm>
    </Container>
  );
};

export default Login;
