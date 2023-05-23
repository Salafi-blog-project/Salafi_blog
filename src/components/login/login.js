import React from "react";
import styled from "styled-components";

const LogInPage = () => {
  return (
    <LogInPageContainer>
      <LogInForm>
        <h2 className="text-center text-2xl font-bold py-2">Log In</h2>
        <div className="flex flex-col items-center">
          <InputField>
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="border-2 p-4 rounded-md"
            />
          </InputField>
          <InputField>
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="border-2 p-4 rounded-md"
            />
          </InputField>
          <LogInButton>Log In</LogInButton>
        </div>
      </LogInForm>
    </LogInPageContainer>
  );
};

export default LogInPage;

const LogInPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const LogInForm = styled.form`
  width: 400px;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
`;

const InputField = styled.div`
  margin-bottom: 1rem;
`;

const LogInButton = styled.button`
  background-color: #0d47a1;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #002171;
  }
`;
