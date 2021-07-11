import { useSelector } from "react-redux";

const Navbar = ({ count, setCount }) => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <div>Navbar {count}</div>
      <button>dasd</button>"<div>Current User : {user?.fname || "No User"}</div>
    </div>
  );
};

export default Navbar;
