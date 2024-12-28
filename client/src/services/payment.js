import axios from "axios";
const URL = "http://localhost:8000";

export const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error While Calling Payment Api', error);
    }
};