import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Bookssection from '../components/bookssection';
const Books = () => {
    const [Data, setData] = useState();
    useEffect(() => {
        const fetch = async () => {
            await axios.get("https://bookstore-api-duao.onrender.com/api/v1/get").then((res) => setData(res.data.books));
        };
        fetch();

    });
    return (
        <div className='bg-dark' style={{ minHeight: "91.5vh" }}>
            <div className='d-flex justify-content-center allign-items-center my-1 py-4'>
                <h4 className='text-white'>Books Section</h4>
            </div>
            {Data ? (<Bookssection data={Data} />) : (<div className='text-white d-flex justify-content-center allign-items-center'>LOADING BOOKS <p>&#128516;</p> ...</div>)};

        </div>
    )
}

export default Books;

