import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import axios from "axios";
import { URL } from "../url";
import { useNavigate, Link } from "react-router-dom";

const Menu = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.get(URL + "/api/auth/logout", {
        withCredentials: true,
      });
      // console.log(res);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-black w-[200px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4">
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          <Link to="/login">Login</Link>
        </h3>
      )}
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          <Link to="/register">Register</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          <Link to={"/profile/" + user._id}>My Profile</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          <Link to="/write">Create</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          <Link to={"/myreviews/" + user._id}>My Reviews</Link>
        </h3>
      )}
      {user && (
        <h3
          onClick={handleLogout}
          className="text-white text-sm hover:text-gray-500 cursor-pointer"
        >
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;
