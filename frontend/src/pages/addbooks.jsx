import React, { useState } from 'react'
import axios from 'axios'
const Addbook = () => {
    const [Data, setData] = useState({ bookname: "", description: "", author: "", image: "", readonline: "", price: "" });

    const change = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    };
    const submit = async (e) => {
        e.preventDefault();
        await axios.post("https://bookstore-api-duao.onrender.com/api/v1/add", Data).then((res) => alert("BOOK ADDED"));
        setData({ bookname: "", description: "", author: "", image: "", price: "" });
    }

    return (
        <div className='addbooksbg bg-dark container-fluid d-flex justify-content-center allign-items-center'>
            <div className='addbooks bg-dark container'>
                <form>
                    <div class="form-group text-white">
                        <label for="exampleInputEmail1">BookName</label>
                        <input type="text" class="form-control" id="bookname" aria-describedby="emailHelp" placeholder="Enter bookname" name="bookname" onChange={change} value={Data.bookname} />
                    </div>
                    <div class="form-group text-white">
                        <label for="exampleInputEmail1">Description</label>
                        <textarea class="form-control" id="description" aria-describedby="emailHelp" placeholder="Enter Description" name="description" onChange={change} value={Data.description} />
                    </div>
                    <div class="form-group text-white">
                        <label for="exampleInputEmail1">Author</label>
                        <input type="text" class="form-control" id="Author" aria-describedby="emailHelp" placeholder="Enter Author" name="author" onChange={change} value={Data.author} />
                    </div>
                    <div class="form-group text-white">
                        <label for="exampleInputEmail1">Image</label>
                        <input type="text" class="form-control" id="Image" aria-describedby="emailHelp" placeholder="Insert Image Link" name="image" onChange={change} value={Data.image} />
                    </div>
                    <div class="form-group text-white">
                        <label for="exampleInputEmail1">ReadOnline</label>
                        <input type="text" class="form-control" id="Image" aria-describedby="emailHelp" placeholder="Give E-Book link if available" name="readonline" onChange={change} value={Data.readonline} />
                    </div>
                    <div class="form-group text-white">
                        <label for="exampleInputEmail1">Price</label>
                        <input type="number" class="form-control" id="Price" aria-describedby="emailHelp" placeholder="Enter Price" name="price" onChange={change} value={Data.price} />
                    </div>
                    <button type="submit" class="btn btn-primary mt-2" onClick={submit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Addbook;
