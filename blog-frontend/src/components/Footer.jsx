import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className="py-1 px-6 items-center bg-[#d7c474] mt-4">
        <div className="flex justify-between mb-4">
            <img src={logo} alt="Logo" className="h-16" />

            <div className="flex justify-around flex-1">
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold mb-2">User Preferences</h1>
                    <a href="#">Home</a>
                    <a href="#">Profile</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold mb-2">Privacy & Terms</h1>
                    <a href="#">Privacy & Laws</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold mb-2">Know about use</h1>
                    <a href="#">Blogspot.Inc</a>
                    <a href="#">Developer</a>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <p className="font-extralight">Copyright @ 2025 Blogspot.Inc</p>
        </div>
    </div>
  )
}

export default Footer