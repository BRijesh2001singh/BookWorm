import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../component/navBar";
import BlogList from "../component/bloglist";
import BlogContent from "../component/blog-content";

const Displayblogs = () => {
    const [allblogs, setallBlogs] = useState([]);
    const apiURL = import.meta.env.VITE_APP_API_URL;
    const [check, setCheck] = useState(true);
    const [detail, setDetail] = useState([]);
    const [update, setUpdate] = useState(false);
    const getBlogs = async () => {
        try {
            const res = await axios.get(`${apiURL}/api/v1/readblogs`);
            const blogData = res.data.blogs;
            blogData.reverse();
            setallBlogs(blogData);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getBlogs();
    }, [update])
    return (
        <>
            <NavBar />

            {check ? (<BlogList allblogs={allblogs} status={setCheck} setBlog={setDetail} update={setUpdate} />) : (<BlogContent blogData={detail} status={setCheck} />)}
        </>

    )
}

export default Displayblogs;
