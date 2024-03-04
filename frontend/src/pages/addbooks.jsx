import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { userid } from './signin';
import { toast } from 'react-toastify';
const Addbook = () => {
    const apiURL = process.env.REACT_APP_API_URL;
    const [error, seterror] = useState("");
    const [Data, setData] = useState({ bookname: "", description: "", author: "", image: "", readonline: "", price: "", tags: "", addedBy: userid });
    const change = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    };
    const submit = async (e) => {
        e.preventDefault();
        if (!userid.value) {
            alert("User not logged in!");
            return;
        }
        if (Data.bookname === "" || Data.description === "" || Data.author === "" || Data.image === "" || Data.tags === "") {

            seterror(" ⚠ ALL FIELDS ARE REQUIRED");
            return;
        }
        await axios.post(`${apiURL}/api/v1/add`, Data).then((res) => toast.success("Book Added"));
        setData({ bookname: "", description: "", author: "", image: "", readonline: "", price: "", tags: "" });
    }
    const genres = ["Fiction", "Non-fiction", "Sci-Fi", "Fantasy", "Romance", "Horror", "Educational", "History", "Autobiography", "Comedy", "Adventure", "Mystery"]
    useEffect(() => {
        seterror("");
    }, [Data.bookname, Data.description, Data.author, Data.image, Data.tags])//removing error msg as soon as user changes any input fields

    return (
        <div className='addbooksbg bg-dark container-fluid d-flex justify-content-center allign-items-center'>
            <div className='addbooks bg-dark container'>
                <h1 className='text-white'>Enter Book details</h1>
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
                    <div class="form-group text-white my-2">
                        <label for="exampleInputEmail1">Tag</label>
                        <select className='horizontal-dropdown' name="tags" onChange={change} value={Data.tags}>
                            {genres.map((item, index) =>
                                <>
                                    <option key={index}>{item}</option>
                                </>
                            )}
                        </select>
                    </div>
                    <h6 style={{ color: "red" }}>{error}</h6>
                    <button type="submit" class="btn btn-primary mt-2" onClick={submit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Addbook;
