import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { authenticatedUser, authenticatedUsername, userid } from './signin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getprofiledata from '../store/favbookutils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import Addedbooks from '../store/addedbooks';
import { Link } from 'react-router-dom';
import catavtaar from '../logo/cat-2083492_640.jpg'
const apiURL = process.env.REACT_APP_API_URL;
const UserProfile = () => {
    const [favbook, setfavbook] = useState([]);
    const [addedbooks, setaddedbooks] = useState([]);
    const avatar = 'https://loremflickr.com/640/360';
    //getfavbook details
    useEffect(() => {
        const intervalId = setInterval(() => {
            getprofiledata(setfavbook);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [favbook]);
    //delete fav books
    const deletefavbook = async (bookid) => {
        const id = userid.value;
        await axios.delete(`${apiURL}/api/v1/${id}/deletefavbook`, {
            data: { favbookId: bookid }
        }).then(() => {
            toast.dark("Book removed from favourites")
        }).catch((err) => console.log(err));

    }

    //getbooks added by User
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (userid.value)
                Addedbooks(setaddedbooks);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [addedbooks]);
    // delete book added by user
    const deletebook = (id) => {
        var passkey = prompt("your book get deleted from bookstore write DELETE MY BOOK if you want to continue");
        if (passkey === "DELETE MY BOOK") {
            axios.delete(`${apiURL}/api/v1/deleteBook/${id}`)
                .then(response => {
                    toast.dark("Book is deleted");
                })
                .catch(error => {
                    console.error(error);
                });
        }
        else {
            alert("Wrong passkey");
        }
    };
    return (
        <div className="user-profile-container " style={{ minHeight: "100vh" }}>
            <img src={avatar ? avatar : catavtaar} alt="User Avatar" className="avatar" />
            <div className="user-info">
                <h2 className="user-name">{authenticatedUsername.value}</h2>
                <p className="user-email">{authenticatedUser.value}</p>
            </div>
            <div className="books-section">
                <div className='fav-section'>
                    <h3 className="section-title">Favorite Books</h3>
                    <div className="book-list d-flex border">
                        {favbook ? favbook.map((book, index) => (
                            <div key={index} >
                                <li className="book-item">
                                    <div className='book-content' >
                                        <span>{index + 1}.</span> <span style={{ fontWeight: "bold" }}>{book.bookname}</span><span> By {book.author}</span><a href={book.readonline} target='._blank'>(Read)</a>
                                        <button className="mx-2" onClick={() => deletefavbook(book._id)} style={{ background: "transparent" }}><FontAwesomeIcon icon={faTrash} style={{ background: "transparent", color: "red" }} /></button>
                                    </div>
                                </li>
                            </div>
                        )) : <h1>No books Added Yet</h1>}
                    </div>
                </div>
                <div className='added-section'>
                    <h3 className="section-title">Books Added BY You <span>
                        <Link title='Add New BOOk' className='addbook-btn text-white active' to="/addbooks">
                            <FontAwesomeIcon icon={faAdd} style={{ color: "red" }} /></Link></span></h3>
                    <div className="book-list d-flex border">
                        {addedbooks ? addedbooks.map((addedbook, index) => (
                            <div key={index}>
                                <li className="book-item">
                                    <div className='book-content'>
                                        <span>{index + 1}.</span> <span style={{ fontWeight: "bold" }}>{addedbook.bookname}</span><span> By {addedbook.author}</span>
                                        <button className="mx-2" onClick={() => deletebook(addedbook._id)} style={{ background: "transparent" }}><FontAwesomeIcon icon={faTrash} style={{ background: "transparent", color: "red" }} /></button>
                                    </div>
                                </li>
                            </div>
                        )) : <h1>Click on add button to add books</h1>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
