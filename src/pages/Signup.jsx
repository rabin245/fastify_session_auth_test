import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      const result = await axios.post(
        "/api/auth/signup",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(result.data);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Signup</h1>

      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={usernameRef} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} />

        <button onClick={handleSubmit}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;
