import React from "react";
import styled from "styled-components";

const SignUpPage = () => {
  return (
    <SignUpPageContainer>
      <div>a</div>
      <form>
        <label htmlFor="fullname"></label>
        <input
          type="text"
          id="fullname"
          name="fullName"
          placeholder="full name"
        />
        <input type="text" name="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="passWord" placeholder="confirm password" />
      </form>
    </SignUpPageContainer>
  );
};

export default SignUpPage;

const SignUpPageContainer = styled.div`
  display: flex;
`;
