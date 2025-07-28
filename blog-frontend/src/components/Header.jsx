import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <div className="flex justify-between py-1 px-6 items-center bg-[#d7c474] mb-4">
            <Link to={"/"}>
                <img src={logo} alt="Logo" />
            </Link>

            <div>
                <Link to="/" className="text-xl font-bold  rounded-lg py-2 px-6 hover:bg-gray-200 transition-all duration-300">
                    Home
                </Link>
                <Link to="/profile" className="text-xl font-bold  rounded-lg py-2 px-6 hover:bg-gray-200 transition-all duration-300">
                    Profile
                </Link>
                {/* <Link to="#" className="text-xl font-bold  rounded-lg py-2 px-6 hover:bg-gray-200 transition-all duration-300">
                    Logout
                </Link> */}
            </div>
        </div>
    </div>
  )
}

export default Header