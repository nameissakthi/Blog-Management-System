import { useEffect, useState } from 'react';
import BlogContext from './BlogContext';
import { useNavigate } from 'react-router-dom';

const BlogContextProvider = (props) => {

    const [login, setLogin] = useState(false)
    const  navigate = useNavigate()
    const [user, setUser] = useState({})

    useEffect(()=>{
        setLogin(localStorage.getItem("login")=="true"?true:false)
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])
    
    const value = {
        login, setLogin,
        navigate,
        user, setUser
    }

    return(
        <BlogContext.Provider value={value}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider