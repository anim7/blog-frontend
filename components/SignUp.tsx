import Link from "next/link";
import React from "react";
import signUpStyles from "../styles/SignUp.module.scss";

const { useState } = React;

export const SignUp: React.FunctionComponent = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  return (
    <div className={signUpStyles.signUpContainer}>
      <h1>Fitbit Blog</h1>
      <p>Create An Account</p>
      <form className={signUpStyles.signUpForm}>
        <span>USERNAME</span>
        <input
          className={signUpStyles.inputBox}
          type="text"
          name="username"
          id="username"
        />
        <label htmlFor="username">*Username already exists</label>
        <label htmlFor="username" id="usernameEmpty">
          *This field is required
        </label>
        <label htmlFor="username" id="usernameInvalid">
          *Username is invalid
        </label>
        <span>EMAIL</span>
        <input
          className={signUpStyles.inputBox}
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="email">*Email is already registered</label>
        <label htmlFor="email" id="emailInvalid">
          *Email is invalid
        </label>
        <label htmlFor="email" id="emailEmpty">
          *This field is required
        </label>
        <span>PASSWORD</span>
        <input
          className={signUpStyles.inputBox}
          type="password"
          name="password"
          id="password"
        />
        <label htmlFor="password" id="passwordEmpty">
          *This field is required
        </label>
        <span>REPEAT PASSWORD</span>
        <input
          className={signUpStyles.inputBox}
          type="password"
          name="repeatPassword"
          id="repeatPassword"
        />
        <label htmlFor="repeatPassword" id="repeatPasswordEmpty">
          *This field is required
        </label>
        <label htmlFor="repeatPassword">*Passwords do not match</label>
        <input
          type="submit"
          value="Create Account"
          className={signUpStyles.btnSubmit}
          disabled={disabled}
        />
        <div className={signUpStyles.loginLink}>
          <span className={signUpStyles.line}></span>
          <Link href="/auth/signin">
            <a>LOGIN</a>
          </Link>
          <span className={signUpStyles.line}></span>
        </div>
      </form>
    </div>
  );
};
