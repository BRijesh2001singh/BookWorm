import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Bookssection from '../components/bookssection';
const Books = () => {
    const apiURL = process.env.REACT_APP_API_URL;
    const [Data, setData] = useState();
    let debounceTimer;
    const fetchData = async () => {
        try {
            await axios.get(`${apiURL}/api/v1/get`).then((res) => setData(res.data.books));
        }
        catch (err) { console.log(err); }
    }
    const debounceFetch = () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(fetchData, 3000);
    };
    useEffect(() => {
        debounceFetch();
        return () => clearTimeout(debounceTimer);
    });
    // popup button start
    // popup button ends
    return (
        <div className='book-container bg-dark'>
            <div className='d-flex justify-content-center allign-items-center my-1 py-4'>
                <h4 className='text-white'>Books Section</h4>
            </div>
            {Data ? <Bookssection data={Data} /> : (<div><Bookssection />
                {/* <div className='text-white d-flex justify-content-center allign-items-center'>
                    LOADING BOOKS ...<p>&#128516;</p>
                         
                </div> */}
                <div class="container">
                    <div class="book">
                        <div class="pages"></div>
                        <div class="pages"></div>
                        <div class="pages"></div>
                        <div class="pages"></div>
                        <div class="pages"></div>
                        <div class="pages"></div>
                        <div class="pages"></div>
                        <div class="pages"></div>
                    </div>
                    <h1 class="title">Loading Books...</h1>
                </div>
            </div>
            )}

        </div>
    )
}

export default Books;