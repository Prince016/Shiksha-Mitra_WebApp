import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import logoImg from "../../Images/login_img.png";
import Carousel from "react-bootstrap/Carousel";

const Login = () => {
  const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

  const Form = (props) => (
    <div>
      <FormInput
        description="Username"
        placeholder="Enter your username"
        type="text"
      />
      <FormInput
        description="Password"
        placeholder="Enter your password"
        type="password"
      />
      <FormButton title="Log in" />
    </div>
  );

  const FormButton = (props) => (
    <div id="button" className="row">
      <button>{props.title}</button>
    </div>
  );

  const FormInput = (props) => (
    <div className="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );

  const OtherMethods = (props) => (
    <div id="alternativeLogin">
      <label>Or sign in with:</label>
      <div id="iconGroup">
        <Facebook />
        <Twitter />
        <Google />
      </div>
    </div>
  );

  const Facebook = (props) => <Link to="/" id="facebookIcon"></Link>;

  const Twitter = (props) => <Link to="/" id="twitterIcon"></Link>;

  const Google = (props) => <Link to="/" id="googleIcon"></Link>;

  return (
    <div className="login_page">
      <div id="loginform">
        <div
          style={{
            width: "50%",
            marginTop: "auto",
            marginBottom: "auto",
            textAlign: "center",
            borderRadius: "100px",
          }}
        >
          <img
            src={logoImg}
            className="logo-Img"
            alt="login img"
            style={{ background: "transparent", borderRadius: "116px" }}
          />
        </div>

        {/* <div
          style={{
            width: "50%",
            marginTop: "auto",
            marginBottom: "auto",
            textAlign: "center",
            borderRadius:"100px"
          }}
        >
          <Carousel fade>
            <Carousel.Item>
              <img className="d-block w-100" src={logoImg} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={logoImg} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={logoImg} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        
        </div> */}

        <div style={{ width: "44%" }}>
          <FormHeader title="Login" />
          <Form />
          <OtherMethods />
        </div>
      </div>
    </div>
  );
};

export default Login;

/* <div><div classNameName="Auth-form-container">
    <form classNameName="Auth-form">
      <div classNameName="Auth-form-content">
        <h3 classNameName="Auth-form-title">Sign In</h3>
        <div classNameName="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            classNameName="form-control mt-1"
            placeholder="Enter email"
          />
        </div>
        <div classNameName="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            classNameName="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div classNameName="d-grid gap-2 mt-3">
          <button type="submit" classNameName="btn btn-primary">
            Submit
          </button>
        </div>
        <p classNameName="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </form>
  </div></div> */
