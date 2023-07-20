import axios from 'axios';
import React from 'react'
const Bookssection = ({ data }) => {

    const deletebook = (id) => {
        var passkey = prompt("Enter password");
        if (passkey === "Brijesh@123") {
            axios.delete(`http://localhost:1000/api/v1/deleteBook/${id}`)
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
    const openEbook = (url) => {
        if (!url) {
            alert("EBOOK NOT AVAILABLE");
        } else {
            window.location.href = url; // Redirect to the eBook URL
        }
    };
    return (
        <div className='d-flex justify-content-around allign-items-center flex-row my-3 flex-wrap'>
            {data && data.map((item, index) =>
                <>
                    <div className='mb-2' style={{ width: "200px", height: "450px", backgroundColor: "transparent", border: "1px solid white", borderRadius: "50px" }}>
                        <div>
                            <img style={{ width: "200px", height: "270px", borderRadius: "50px" }}
                                src={item.image}
                                alt="/"
                            />
                        </div>
                        <h6 style={{ fontSize: "15px", fontWeight: "bold" }} className='text-white my-1 px-2'>{item.bookname.slice(0, 50)}...</h6>
                        <p className='mb-0 text-white' style={{ fontSize: "30px", fontWeight: "bold" }}>Rs. {item.price}</p>
                        <div className='d-flex justify-content-around allign-items-center'>
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
