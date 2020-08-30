import React from 'react';
import styled from '@emotion/styled';
import * as routes from "../constants/routes";
import { auth, db } from "../firebase";

const StyledTextField = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    margin: 0px 0px 20px 0px;
    text-align: center;
  }

  #loginDiv {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 40px;
    background-color: #74b9ff;
  }

  .inputText {
    border: none;
    border-radius: 10px;
    max-width: 300px;
    height: 30px;
    margin: 10px 0px;
    text-align: center;
  }

  .button {
    margin-top: 20px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background: #6c5ce7;
    color: white;
    width: 120px;
    font-weight: bold;
    transition: 0.25s;
    font-size: 14px;
  }

  .button:hover {
    transform: scale(1.1);
  }

  .button a {
    text-decoration: none;
    border-radius: 10px;
  }

  .discreteButton {
    height: 30px;
    margin-top: 10px;
    border: none;
    background: none;
    transition: 0.25s;
    font-size: 12px;
  }

  .discreteButton:hover {
    color: white;
  }

  label {
    margin-top: 10px;
  }
`;

interface InterfaceProps {
  email?: string;
  error?: any;
  history?: any;
  passwordOne?: string;
  passwordTwo?: string;
  username?: string;
}

interface InterfaceState {
  email: string;
  error: any;
  passwordOne: string;
  passwordTwo: string;
  username: string;
}

export class RegisterPage extends React.Component<
  InterfaceProps,
  InterfaceState
> {
  private static INITIAL_STATE = {
    email: "",
    error: null,
    passwordOne: "",
    passwordTwo: "",
    username: ""
  };

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  constructor(props: InterfaceProps) {
    super(props);
    this.state = { ...RegisterPage.INITIAL_STATE };
  }

  public onSubmit(event: any) {
    event.preventDefault();

    const { email, passwordOne, username } = this.state;
    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser: any) => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {

            this.setState(() => ({ ...RegisterPage.INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(RegisterPage.propKey("error", error));
          });
      })
      .catch(error => {
        this.setState(RegisterPage.propKey("error", error));
      });
  }

  public render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <StyledTextField>
        <form id="loginDiv" onSubmit={(event) => this.onSubmit(event)}>
          <h2>Register</h2>
          <br></br>
          <label>Email</label>
          <input className="inputText" placeholder="email" id="emailInput"
            onChange={event => this.setStateWithEvent(event, "email")}></input>
          
          <label>Password</label>
          <input type="password" className="inputText" placeholder="password" id="passwordInput"
            onChange={event => this.setStateWithEvent(event, "passwordOne")}></input>
          <input type="password" className="inputText" placeholder="confirm password" id="passwordInput"
            onChange={event => this.setStateWithEvent(event, "passwordTwo")}></input>
          
          <button type="submit" className="button" id="loginBtn">Sign Up</button>
          <button className="discreteButton" id="registerBtn">Cancel</button>
        </form>
      </StyledTextField>
    );
  }

  private setStateWithEvent(event: any, columnType: string) {
    this.setState(RegisterPage.propKey(columnType, (event.target as any).value));
  }
}

export default RegisterPage;
