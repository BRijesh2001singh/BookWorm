import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
const BlogList = ({ allblogs, status, setBlog, update }) => {
    const [displayBlog, setDisplayBlog] = useState([]);
    const [check, setCheck] = useState(false);
    const [title, setTitle] = useState("");
    const [blogData, setBlogData] = useState("");
    const [tag, setTag] = useState("");
    const { userid, isAuthenticated } = useSelector((state) => state.auth);
    const apiURL = import.meta.env.VITE_APP_API_URL;
    const handleClick = (data) => {
        status(false);
        setBlog(data);
    }
    useEffect(() => {
        setDisplayBlog(allblogs);
    }, [allblogs])
    //function to filter blogs
    const filterList = (type) => {
        if (type === "None") {
            setDisplayBlog(allblogs);
            return;
        }
        let filtereBlog = allblogs.filter(blog => blog.tag === type);
        setDisplayBlog(filtereBlog);
    }
    //function to post blog
    const postBlog = async () => {
        if (!isAuthenticated || title === "" || blogData === "" || tag === "") {
            toast.error("All fields are required!");
        }
        try {

            const res = await axios.post(`${apiURL}/api/v1/postblogs`, {
                userId: userid,
                title: title,
                blog: blogData,
                tag: tag
            }, { withCredentials: true })
            if (res.status === 201) {
                toast.success("Blog Added!");
                setTitle("");
                setTag("");
                setBlogData("");
                update(true);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="blog-container">
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"
            />
            <h1>Blogs</h1>
            <button style={{ borderRadius: "10px" }} onClick={() => {
                if (!isAuthenticated) {
                    toast.error("Please Log-In to add blogs.");
                    return;
                }
                setCheck(!check)
            }}>{check ? "Cancel ❌" : "Add Blog +"}</button>
            {check ? (<div className='add-blog'>
                <input value={title} className='blog-title' placeholder='Enter the title' type='text' onChange={(e) => setTitle(e.target.value)}></input>
                <button style={{ marginTop: "1rem" }} onClick={() => postBlog()}>Post</button>
                <select style={{ marginTop: ".5rem" }} onChange={(e) => setTag(e.target.value)}>
                    <option value="">None</option>
                    <option value="informative">Informative</option>
                    <option value="story-time">Story-Time</option>
                    <option value="casual">Casual</option>
                </select>
                <textarea value={blogData} onChange={(e) => setBlogData(e.target.value)}
                    className='blog-text' placeholder={blogData === "" ? ('Reminder: Please be respectful and avoid using language that could be hurtful or negative.') : ("")} />

            </div>) : null}

            {!check ? (<div className="blogs">
                <span style={{ fontSize: "smaller", fontFamily: "monospace", marginBottom: "1rem" }}>Total Blogs: {allblogs.length}</span>
                <select style={{ marginTop: ".5rem" }} onChange={(e) => filterList(e.target.value)}>
                    <option value="None">None</option>
                    <option value="informative">Informative</option>
                    <option value="story-time">Story-Time</option>
                    <option value="casual">Casual</option>
                </select>
                {displayBlog ? (displayBlog.map((blog, index) => (
                    <div key={index} className="blogs-content" onClick={() => handleClick(blog)}>
                        <span> {blog.title}</span>
                        <span>Author : {blog.userId.name}</span>
                    </div>
                ))) : <h1>No blogs Found</h1>}
            </div>) : null}
        </div>
    )
}
BlogList.propTypes = {
    allblogs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            userId: PropTypes.shape({
                name: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired,
    status: PropTypes.func.isRequired,
    setBlog: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
};
export default BlogList;

