import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import Bookssection from '../components/bookssection';
import hpdp from "../photos/hp-d.jpg";
import gtdp from "../photos/gtdp.jpeg";
import dunedp from "../photos/dune-dp.jpg";
import jsdp from "../photos/jsdp.jpg";
import scdp from "../photos/scdp.jpg";
import tmdp from "../photos/tmb-dp.jpg";
import alcdp from "../photos/alc-dp.jpg";
const Books = () => {
    const [hasInteracted, sethasInteracted] = useState(false);
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
    useEffect(() => {
        if (!hasInteracted) {
            const timer = setInterval(() => {

                scrollleft();
            }, 2000);

            return () => clearInterval(timer); // Clear interval on component unmount or hasInteracted change
        }
    }, [hasInteracted]);
    //scroll function
    const scrollContainerRef = useRef(null);
    const scrollleft = () => {

        const container = scrollContainerRef.current;
        if (container) {
            container.scrollBy({ left: 500, behavior: 'smooth' }); // Smooth scroll with immediate response

        }
    };
    const scrollright = () => {

        const container = scrollContainerRef.current;
        if (container) {
            container.scrollBy({ left: -500, behavior: 'smooth' }); // Smooth scroll with immediate response

        }
    };
    const handleleftscroll = () => {
        sethasInteracted(true);
        scrollleft();
    }
    const handlerightscroll = () => {
        sethasInteracted(true);
        scrollright();
    }


    // popup button start
    // popup button ends
    return (
        <div className='book-container bg-dark'>

            <div className='discover-section d-flex'>

                <div className='disc-title'>
                    <h1>DISCOVER</h1>
                    <h1>TOP</h1>
                    <h1>BOOKS</h1>
                </div>
                <button className='scroll-btn' onClick={() => handleleftscroll()}>&gt;</button>
                <button className='scroll-btn' onClick={() => handlerightscroll()}> &lt;</button>
                <div className='discimg-section d-flex' ref={scrollContainerRef}>
                    <img id="slider1" src={gtdp} alt="gtdp" />
                    <img id="slider2" src={hpdp} alt="hp" />
                    <img id="slider3" src={scdp} alt="scdp" />
                    <img id="slider4" src={jsdp} alt="jsdp" />
                    <img id="slider5" src={dunedp} alt="dune" />
                    <img id="slider6" src={tmdp} alt="dune" />
                    <img id="slider7" src={alcdp} alt="dune" />

                </div>

            </div>
            {Data ? <Bookssection data={Data} /> : (<div><Bookssection />
                {/* <div className='text-white d-flex justify-content-center allign-items-center'>
                    LOADING BOOKS ...<p>&#128516;</p>
                         
                </div> */}
                {/* for loading animation */}
                <div className="loading-container">
                    <div className="book">
                        <div className="pages"></div>
                        <div className="pages"></div>
                        <div className="pages"></div>
                        <div className="pages"></div>
                        <div className="pages"></div>
                        <div className="pages"></div>
                        <div className="pages"></div>
                        <div className="pages"></div>
                    </div>
                    <h1 className="title">Loading Books...</h1>
                </div>
            </div>
            )}

        </div>
    )
}

export default Books;