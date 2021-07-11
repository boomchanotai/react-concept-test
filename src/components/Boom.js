import { useSelector } from "react-redux";

const Boom = () => {
  const user = useSelector((state) => state.user);
  return <div className="bg-gray-400">TEST {user?.fname}</div>;
};

export default Boom;
