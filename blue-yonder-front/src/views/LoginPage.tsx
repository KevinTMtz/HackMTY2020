import React from 'react';
import styled from '@emotion/styled';
import * as routes from '../constants/routes';
import { auth, db } from '../firebase';
import { Link } from 'react-router-dom';

const StyledTextField = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

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
  password?: string;
}

interface InterfaceState {
  email: string;
  error: any;
  password: string;
}

export class LoginPage extends React.Component<InterfaceProps, InterfaceState> {
  private static INITIAL_STATE = {
    email: '',
    error: null,
    password: '',
  };

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  constructor(props: InterfaceProps) {
    super(props);

    this.state = { ...LoginPage.INITIAL_STATE };
  }

  public onSubmit = (event: any) => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...LoginPage.INITIAL_STATE }));
        history.push('/new/rect');
      })
      .catch((error) => {
        this.setState(LoginPage.propKey('error', error));
      });

    event.preventDefault();
  };

  public render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <StyledTextField>
        <form id="loginDiv" onSubmit={(event) => this.onSubmit(event)}>
          <h2>Welcome to Space Planner</h2>
          <br></br>
          <label>Email</label>
          <input
            className="inputText"
            placeholder="email"
            id="emailInput"
            onChange={(event) => this.setStateWithEvent(event, 'email')}
          ></input>

          <label>Password</label>
          <input
            type="password"
            className="inputText"
            placeholder="password"
            id="passwordInput"
            onChange={(event) => this.setStateWithEvent(event, 'password')}
          ></input>

          <button type="submit" className="button" id="loginBtn">
            Sign In
          </button>
          <button className="discreteButton" id="registerBtn">
            <Link to="/register">Sign Up</Link>
          </button>
        </form>
      </StyledTextField>
    );
  }

  private setStateWithEvent(event: any, columnType: string): void {
    this.setState(LoginPage.propKey(columnType, (event.target as any).value));
  }
}

export default LoginPage;
