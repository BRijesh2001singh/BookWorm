import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userid } from '../pages/signin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import getprofiledata from '../store/favbookutils';
const Bookssection = ({ data }) => {
    const navigate = useNavigate();
    const apiURL = process.env.REACT_APP_API_URL;
    const [selectedGenre, setselectedGenre] = useState("");
    const [displaydata, setdisplaydata] = useState(data);
    const [favbook, setfavbook] = useState([]);
    const [bookcount, setbookcount] = useState(0);
    //getfavouritebook details
    useEffect(() => {
        const intervalId = setInterval(() => {
            getprofiledata(setfavbook);
        }, 2000)
        return () => clearInterval(intervalId);
    }, [favbook]);
    //delete book
    // const deletebook = (id) => {
    //     var passkey = prompt("Enter password");
    //     if (passkey === "Brijesh@123") {
    //         axios.delete(`${apiURL}/api/v1/deleteBook/${id}`)
    //             .then(response => {
    //                 alert("BOOK IS DELETED");
    //             })
    //             .catch(error => {
    //                 console.error(error);
    //             });
    //     }
    //     else {
    //         alert("WRONG PASSWORD!! ONLY ADMIN CAN DELETE BOOKS")
    //     }
    // };
    //open online book
    const openEbook = (url) => {
        if (!url) {
            alert("EBOOK NOT AVAILABLE");
        } else {
            window.open(url, '_blank')// Redirect to the eBook URL
        }
    };
    //filter books
    const genres = ["All", "Fiction", "Non-fiction", "Sci-Fi", "Fantasy", "Romance", "Horror", "Educational", "History", "Autobiography", "Comedy", "Adventure", "Mystery"]
    useEffect(() => { //if all is selected then set data to the default data
        setdisplaydata("");
        if (selectedGenre === "All") {
            setdisplaydata(data);
            return;
        }
        const handlefilter = () => {
            const filterbooks = selectedGenre ? data.filter(item => item.tags === selectedGenre) : data;
            setdisplaydata(filterbooks);
        }
        handlefilter();
    }, [data, selectedGenre]);
    // addtofav
    const addtofav = async (bookid) => {
        const id = userid.value;
        if (!id) alert("Please LogIn to add favourite")
        await axios.patch(`${apiURL}/api/v1/${id}/addfavbook`, {
            newfavbookId: bookid
        }).then(() => toast.success("Book Added To Favourites")).catch((err) => console.log(err));
    }
    //checkfavbooks
    const isBookInFav = (bookid) => {
        if (favbook)
            return favbook.some((book) => book._id === bookid);
    };
    //delete from fav
    const deletefavbook = async (bookid) => {
        const id = userid.value;
        try {
            await axios.delete(`${apiURL}/api/v1/${id}/deletefavbook`, {
                data: { favbookId: bookid }
            })
        }
        catch (err) {
            console.log(err);
        }
    }
    // display book count
    useEffect(() => {
        try {
            if (displaydata) setbookcount(displaydata.length);
        }
        catch (err) {
            console.log(err);
        }
    }, [displaydata]);
    return (
        <>
            <div className='filter-section'>
                <h5 style={{ color: "white" }}>Apply Filter:</h5>
                <select className='horizontal-dropdown' onChange={(e) => setselectedGenre(e.target.value)}>
                    {genres.map((item, index) =>
                        <option key={index}>{item}</option>
                    )}
                </select>
            </div>
            <h6 className='book-info text-white'>Total Books:{bookcount}</h6>
            <div className='booksection-container'>
                <div className='book-content d-flex justify-content-start allign-items-center my-3 flex-wrap '>

                    {displaydata && displaydata.map((item, index) =>
                        <div className='mb-2 box mx-3 mx-4' key={index}>
                            <div>
                                <div className="book-cover">
                                    <img style={{ width: "200px", height: "270px" }}
                                        src={item.image}
                                        alt="/" onClick={() => navigate(`/description/${item._id}`)}
                                    />
                                </div>
                            </div>
                            <h6 style={{ fontSize: "15px", fontWeight: "bold" }} className='text-white my-1 px-2'>{item.bookname.slice(0, 20)}...</h6>
                            <p className='mb-0 text-white' style={{ fontSize: "30px", fontWeight: "bold" }}>Rs. {item.price}</p>
                            <div className='d-flex justify-content-around allign-items-center flex-wrap py-1'>
                                <button className='reads-btn btn btn-primary my-1' onClick={() => openEbook(item.readonline)}>Read Online</button>
                                {isBookInFav(item._id) ? <button className='btn ' onClick={() => deletefavbook(item._id)} style={{ backgroundColor: "transparent" }}>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} /></button> :
                                    <button className='btn' style={{ color: "black" }} onClick={() => addtofav(item._id)}> <FontAwesomeIcon icon={faStar} /></button>}
                            </div>
                        </div >

                    )
                    }
                </div >
            </div>
        </>

    )
}
export default Bookssection;
