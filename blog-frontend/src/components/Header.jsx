import { useContext } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import BlogContext from "../context/BlogContext";
import { MdOutlineAddCircle } from "react-icons/md";

const Header = () => {

    const { login } = useContext(BlogContext);

  return (
    <div>
        <div className="flex justify-between py-1 px-6 items-center bg-[#d7c474] mb-4">
            <Link to={"/"}>
                <img src={logo} alt="Logo" />
            </Link>

            <div className="flex items-center">
                <Link to="/" className="text-xl font-bold  rounded-lg py-2 px-6 hover:bg-gray-200 transition-all duration-300">
                    Home
                </Link>

                {
                    login
                    ?
                    <div className="flex items-center">
                        <Link to="/profile" className="text-xl font-bold  rounded-lg py-2 px-4 hover:bg-gray-200 transition-all duration-300">
                            Profile
                        </Link>
                        <Link to={"/new-post"} title="New Post" className="text-2xl font-bold  rounded-full p-3 hover:bg-gray-200 transition-all duration-300 flex items-center">
                            <MdOutlineAddCircle />
                        </Link>
                    </div>
                    :
                    <Link to="/login" className="text-xl font-bold  rounded-lg py-2 px-6 hover:bg-gray-200 transition-all duration-300">
                        Login
                    </Link>
                }
            </div>
        </div>
    </div>
  )
}

export default Header