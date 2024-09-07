import axios from "axios";
import { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import Loading from "../component/loading";
import NavBar from "../component/navBar";
import ebook from "../helper/ebook";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy load the Bookreview component
const Bookreview = lazy(() => import("../component/bookreview"));

const ViewDetails = () => {
    const apiURL = import.meta.env.VITE_APP_API_URL;
    const { id } = useParams();
    const [currBook, setCurrBook] = useState([]);
    const [newReview, setNewReview] = useState("");
    const [check, setCheck] = useState(false);
    const { userid } = useSelector((state) => state.auth);
    const [showreview, setShowReview] = useState("No Post");
    const [shouldLoadReview, setShouldLoadReview] = useState(false); // Control for lazy loading review component

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get(`${apiURL}/api/v1/get/${id}`);
                setCurrBook(res.data.book);

                // Delay loading Bookreview component
                setTimeout(() => {
                    setShouldLoadReview(true); // Trigger the review load after other content
                }, 1000); // Delay by 1 second or adjust accordingly
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, [id]);

    const handleClick = () => {
        if (!userid) {
            alert("Please Login to add reviews");
            return;
        }
        setCheck(!check);
    };

    const postReview = async (id) => {
        try {
            const res = await axios.post(`${apiURL}/api/v1/${userid}/addreview/${id}`, {
                review: newReview
            });
            if (res.status === 201) {
                toast.success("Review Added!");
                setShowReview("A REVIEW HAS BEEN ADDED");
                setNewReview("");
                setCheck(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="book-view-container">
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

                <NavBar />
                {currBook ? (
                    <>
                        <div className="book-view-content">
                            <img src={currBook.image} alt={currBook.title} />
                            <span><b>Author: {currBook.author}</b></span>
                            <button style={{ backgroundColor: "#5924c1", color: "white", border: "none", borderRadius: "5px" }}
                                onClick={() => ebook(currBook.readonline)}
                            >
                                Read Online
                            </button>
                            <h4>{currBook.bookname}</h4>
                            <p>{currBook.description}</p>
                        </div>
                        <div className="book-review">
                            <h1 className="px-2">Book Reviews</h1>
                            <button className="mx-3 my-2" style={{ backgroundColor: "#5924c1", color: "white", border: "none", borderRadius: "5px" }}
                                onClick={handleClick}
                            >
                                {check ? "Cancel ❌" : "Add Review +"}
                            </button>
                            <div>
                                <textarea placeholder={newReview === "" ? ("Reminder: Please be respectful and constructive and avoid using language that could be hurtful or negative") : ("")} style={{
                                    width: "50vw",
                                    height: "20vh",
                                    display: check ? "block" : "none"
                                }} className="review-box mx-3" type="text" value={newReview} onChange={(e) => setNewReview(e.target.value)} />
                                <button className="post mx-3 my-1" style={{
                                    backgroundColor: "#5924c1", border: "none",
                                    borderRadius: "5px", color: "white",
                                    display: check ? "block" : "none"
                                }} onClick={() => postReview(currBook._id)}>Post ▶</button>
                            </div>
                            {/* Lazy load Bookreview after main content */}
                            {shouldLoadReview && (
                                <Suspense fallback={<Loading />}>
                                    <Bookreview currId={currBook._id} checkreview={showreview} />
                                </Suspense>
                            )}
                        </div>
                    </>
                ) : (
                    <Loading />
                )}
            </div>
        </>
    );
};

export default ViewDetails;
