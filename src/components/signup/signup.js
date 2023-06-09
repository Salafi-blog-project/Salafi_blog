import React, { useState } from "react";
import styled from "styled-components";
import { auth, googleProvider } from "../../config/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const signUp = async (e) => {
    try {
      e.preventDefault();
      const email = formData.email;
      const password = formData.password;
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const accSignOut = async (e) => {
    try {
      e.preventDefault();
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  const googleSignUp = async (e) => {
    try {
      e.preventDefault();
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(auth?.currentUser?.email);

  return (
    <SignUpPageContainer>
      <div className="hidden sm:block">
        <h1 className="font-extrabold text-4xl text-white">
          Join Our Community
        </h1>
        <p>
          Welcome to our blog, your ultimate destination for all things
          programming, business, and technology. Explore the latest trends,
          industry insights, and practical tips to thrive in today's fast-paced
          digital world.
        </p>
      </div>
      <SignUpForm>
        <h2>Sign Up</h2>
        <InputField>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            className="border-2 p-4 rounded-md"
          />
        </InputField>
        <InputField>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border-2 p-4 rounded-md"
          />
        </InputField>
        <InputField>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border-2 p-4 rounded-md"
          />
        </InputField>
        <InputField>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="border-2 p-4 rounded-md"
          />
        </InputField>

        <SignUpButton onClick={signUp}>Sign Up</SignUpButton>
        <SignOutButton onClick={accSignOut}>Sign Out</SignOutButton>
        <GoogleButton onClick={googleSignUp}>Sin up with google</GoogleButton>
      </SignUpForm>
    </SignUpPageContainer>
  );
};

export default SignUpPage;

const SignUpPageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d47a1;
  color: #ffffff;
`;

const SignUpForm = styled.form`
  width: 400px;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
`;

const InputField = styled.div`
  margin-bottom: 1rem;
`;

const SignUpButton = styled.button`
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

const SignOutButton = styled.button`
  background-color: #dc3545;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b92c36;
  }
`;

const GoogleButton = styled.button`
  background-color: #db4437;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c53929;
  }
`;
