import { useState } from 'react';
import BlogContext from './BlogContext';
import { useNavigate } from 'react-router-dom';

const BlogContextProvider = (props) => {

    const [login, setLogin] = useState(false)
    const  navigate = useNavigate()
    const [user, setUser] = useState({})
    
    const value = {
        login, setLogin,
        navigate,
        user
    }

    return(
        <BlogContext.Provider value={value}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider