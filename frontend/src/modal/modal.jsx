import React, { useState } from 'react'

const Modal = () => {
    const [showModal, setshowModal] = useState(false);
    const Mymodal = () => {
        return <>
            <div className="d-flex flex-column justify-content-center align-items-center modalcontainer">
                <h2 className='text-black'>Slow Loading</h2>
                <p className='text-black'>The API for book store is hosted on free tier domain of <a href='https://render.com/'>Render</a> ,free tier webservice does spin down after 15 minutes of inactivity, so the first request after the service is spun down may take few seconds, but subsequent requests should be faster.
                </p>
                <button className='text-black' onClick={() => setshowModal(false)}>OK</button>
            </div>
        </>
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center container">
            <div className='modalbtn'>
                <button className="btn1" onClick={() => setshowModal(true)}>Books are Loading Slow ?Read More</button>
                {showModal && <Mymodal />}
            </div>
        </div>
    )
}

export default Modal
