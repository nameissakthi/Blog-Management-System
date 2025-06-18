import BlogContext from './BlogContext';

const BlogContextProvider = (props) => {

    const value = {}

    return(
        <BlogContext.Provider value={value}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider