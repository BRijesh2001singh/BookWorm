import axios from 'axios';
import { userid } from '../pages/signin';
const apiURL = process.env.REACT_APP_API_URL;
const getprofiledata = async (setfavbooks) => {
    try {
        if (userid.value === "") {
            return;
        }
        const response = await axios(`${apiURL}/api/v1/${userid}/getfavbook`);
        setfavbooks(response.data.favbooklist);
    } catch (err) {
        console.error(err);
    }
};
export default getprofiledata;