import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      const result = await axios.post(
        "/api/auth/login",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(result.data);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();

    try {
      window.open("/api/auth/login/google", "_self");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGithubLogin = async (e) => {
    e.preventDefault();

    try {
      window.open("/api/auth/login/github", "_self");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <div>
        <button onClick={handleGoogleLogin}>Login with Google</button>
        <button onClick={handleGithubLogin}>Login with Github</button>
      </div>

      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={usernameRef} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} />

        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
