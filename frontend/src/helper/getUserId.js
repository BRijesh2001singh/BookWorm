import axios from "axios";

const apiURL = import.meta.env.VITE_APP_API_URL;
const getName = async (user) => {
    try {
        const res = await axios.post(`${apiURL}/api/v1/getuser`, {
            email: user,
        });
        const { id, name } = res.data;
        return { id, name };
    } catch (error) {
        console.log(error);
        return null;
    }
}
export default getName;