import "./App.css";
import Navbar from "./components/Navbar";
import Boom from "./components/Boom";

import { useSelector, useDispatch } from "react-redux";
import { boom } from "./actions";
import { setUser } from "./actions/user";

import { useEffect, useState } from "react";

import axios from "axios";

const App = () => {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://www.mecallapi.com/api/users/1");
      await dispatch(setUser(res.data.user));
    };
    fetchData();
  }, [dispatch]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      setUser({
        fname: name,
        email,
      })
    );
  };

  const handleCounter = () => {
    dispatch(boom(1));
  };

  return (
    <>
      <Navbar count={counter} />
      <Boom />
      <h1 className="bg-blue-500 lg:bg-red-500 text-white font-bold text-9xl text-center">
        {counter}
      </h1>
      <div>
        <button
          onClick={handleCounter}
          className="bg-blue-50 w-full hover:bg-black hover:text-white"
        >
          +
        </button>
      </div>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="border-2 border-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="border-2 border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <button className="bg-gray-100 py-2 px-4">Submit</button>
        </div>
      </form>
    </>
  );
};

export default App;
