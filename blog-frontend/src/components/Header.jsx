import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
        <div className="flex justify-between py-1 px-6 items-center bg-[#d7c474] mb-4">
            <img src={logo} alt="Logo" />

            <div>
                <a href="#" className="text-xl font-bold  rounded-lg py-2 px-6 hover:bg-gray-200 transition-all duration-300">
                    Home
                </a>
                <a href="#" className="text-xl font-bold  rounded-lg py-2 px-6 hover:bg-gray-200 transition-all duration-300">
                    Profile
                </a>
                <a href="#" className="text-xl font-bold  rounded-lg py-2 px-6 hover:bg-gray-200 transition-all duration-300">
                    Logout
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header