import axios from "axios";
import { userid } from "../pages/signin";
const apiURL = process.env.REACT_APP_API_URL;
const Addedbooks = async (setaddedbooks) => {
    try {
        const response = await axios.post(`${apiURL}/api/v1/${userid}/getaddedbooks`);
        setaddedbooks(response.data.books);
    } catch (err) { console.log(err); }
}
export default Addedbooks;