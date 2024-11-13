import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../component/navBar";
import { getBooks } from "../redux/slices/booksSlice";
const Hordingbooks = () => {
    const { data } = useSelector((state) => state.books);
    const [rbooks, setRbooks] = useState([]);
    const { type } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (!data) {
            dispatch(getBooks());
        }
    }, [dispatch, data]);
    let heading = "";
    let displayBook = [];
    const religiousBooks = ["66db2e6cb7d86cc14d8e6bf5", "66db2f22b7d86cc14d8e6bfb", "66db30aab7d86cc14d8e6c07", "66db36c6b7d86cc14d8e6c1b"];
    const bestBook = ["64b678d72a72e9aae00ddbc9", "65e5831bb8cb7ab1cdaddf43", "65e48466b22f2b7cee994688", "65e57df4b8cb7ab1cdaddf27", "65e57e33b8cb7ab1cdaddf35", "65e58314b8cb7ab1cdaddf41"];
    const chacha = ["66db60d1b7d86cc14d8e6c5c", "66db6153b7d86cc14d8e6c5e", "66db61bbb7d86cc14d8e6c60", "66db6308b7d86cc14d8e6c65", "66db627cb7d86cc14d8e6c62"]
    if (type === 'bestbooks') {
        displayBook = bestBook;
        heading = "Award Winning Books"
    }
    else if (type === 'religious') {
        displayBook = religiousBooks;
        heading = "Religious Books"
    }
    else if (type === 'chacha') {
        displayBook = chacha;
        heading = "ChaCha Chaudhary Comics"
    }
    useEffect(() => {
        if (data && data.books) {
            const filteredBooks = data.books.filter((book) => displayBook.includes(book._id));
            setRbooks(filteredBooks);
        }
    }, [data]);
    return (
        <div className="hording-book-container" >
            <NavBar />
            <h1 style={{ color: "white", marginLeft: "1rem" }}>{heading}</h1>
            <div className="re-books" >
                {rbooks && rbooks.map((item, index) => (
                    <div className="re-book-contents" key={index}>
                        <div className="re-book-cover">
                            <img style={{ width: "180px", height: "270px" }}
                                src={item.image}
                                alt="/"
                            />
                        </div>
                        <div className="re-book-info">
                            <h6 style={{ fontSize: "15px", fontWeight: "bold", color: "white" }} className=' my-1 px-2'>{item.bookname.slice(0, 20)}...</h6>
                            <p className='mb-0 text-white' style={{ fontSize: "30px", fontWeight: "bold" }}>Rs. {item.price}</p>
                            <button style={{
                                backgroundColor: "#5924c1", color: "white", border: "none", fontWeight: "bold"
                                , borderRadius: "5px"
                            }} className='reads-btn btn btn-primary my-1' onClick={() => navigate(`/detail/${item._id}`)}>View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Hordingbooks;