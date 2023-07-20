import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Description = () => {
    const params = useParams();
    const id = params.id;//getting the id of selected book from the url
    const [Data, setData] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            await axios.get(`https://bookstore-api-duao.onrender.com/api/v1/get/${id}`).then((res) => setData(res.data.book));
        };
        fetch();

    });
    return (
        <div className='bg-dark d-flex justify-content-center' style={{ minHeight: "91.5vh" }}>
            <div className=" d-flex justify-content-center align-items-center flex-column"
                style={{ width: "auto", height: "auto", overflow: "hidden" }}
            >
                <div><h4 className='text-white'>{Data.bookname}</h4></div>
                <div className="description">
                    <p className='text-white' style={{ maxWidth: "100ch" }}>{Data.description}</p>
                    <span style={{ color: "white", fontSize: "30px", fontWeight: "bolder" }}>{Data.author}</span>
                </div>
            </div>
        </div>
    )
}

export default Description;
