import { useEffect, useState } from 'react';
import BlogContext from './BlogContext';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../App';
import axios from 'axios';

const BlogContextProvider = (props) => {

    const [login, setLogin] = useState(false)
    const  navigate = useNavigate()
    const [user, setUser] = useState({})
    const [logout, setLogout] = useState(false)

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("user")))
        setLogin(localStorage.getItem("login")==="true"?true:false)
    }, [])
    
    const loadUser = async (username, password) => {
        const response = await axios.get(BACKEND_URL+`/author/get?username=${username}&password=${password}`)

        localStorage.setItem("user", JSON.stringify(response.data))
        localStorage.setItem("login", true)
        setUser(JSON.parse(localStorage.getItem("user")))
        setLogin(true)
        navigate("/")
    }

    const value = {
        login, setLogin,
        navigate,
        user, setUser,
        logout, setLogout, loadUser
    }

    return(
        <BlogContext.Provider value={value}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider