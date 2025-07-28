import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const BACKEND_URL = import.meta.env.VITE_URL;

function App() {

  return (
    <div id="app">
      <Header />
      <div className="px-10">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
