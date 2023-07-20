import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
const Bookssection = ({ data }) => {
    //delete book
    const deletebook = (id) => {
        var passkey = prompt("Enter password");
        if (passkey === "Brijesh@123") {
            axios.delete(`https://bookstore-api-duao.onrender.com/api/v1/deleteBook/:${id}`)
                .then(response => {
                    alert("BOOK IS DELETED");
                })
                .catch(error => {
                    console.error(error);
                });
        }
        else {
            alert("WRONG PASSWORD!! ONLY ADMIN CAN DELETE BOOKS")
        }
    };
    //open online book
    const openEbook = (url) => {
        if (!url) {
            alert("EBOOK NOT AVAILABLE");
        } else {
            window.location.href = url; // Redirect to the eBook URL
        }
    };
    const navigate = useNavigate();

    return (
        <div className='book-content d-flex justify-content-around allign-items-center flex-row my-3 flex-wrap'>
            {data && data.map((item, index) =>
                <>
                    <div className='mb-2 box' onClick={() => navigate(`/description/${item._id}`)}>
                        <div>
                            <div className="book-cover">
                                <img style={{ width: "200px", height: "270px", borderRadius: "50px" }}
                                    src={item.image}
                                    alt="/"
                                />
                            </div>
                        </div>
                        <h6 style={{ fontSize: "15px", fontWeight: "bold" }} className='text-white my-1 px-2'>{item.bookname.slice(0, 30)}...</h6>
                        <p className='mb-0 text-white' style={{ fontSize: "30px", fontWeight: "bold" }}>Rs. {item.price}</p>
                        <div className='d-flex justify-content-around allign-items-center flex-wrap py-1'>
                            <button className='btn btn-primary' onClick={() => openEbook(item.readonline)}>Read Online</button>
                            <button className='btn btn-danger' onClick={() => deletebook(item._id)}>DELETE</button>
                           
                        </div>
                    </div >
                </>
            )
            }
        </div >
    )
}

export default Bookssection;
