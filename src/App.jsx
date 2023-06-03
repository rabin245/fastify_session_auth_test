import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const test = async () => {
      const result = await axios.get("api", {
        withCredentials: true,
      });
      console.log(result.data);
      setData(result.data);
    };

    test();
  }, []);

  return (
    <>
      <div>
        <h1>React App</h1>
        {JSON.stringify(data)}

        <div>
          | <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> |{" "}
          <Link to="/posts">posts</Link> |
        </div>
      </div>
    </>
  );
}

export default App;
