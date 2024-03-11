import { userid, authenticatedUsername } from "../pages/signin";
import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;
export default async function getuserid(email) {
    const response = await axios.post(`${apiURL}/api/v1/getuser`, {
        email: email
    });
    authenticatedUsername.value = (response.data.name);
    userid.value = (response.data.id);
}
