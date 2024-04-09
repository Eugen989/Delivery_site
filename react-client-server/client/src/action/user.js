import axios from 'axios';

export const registration = async (name, password) => {
    try {
        const responce = axios.post("http://localhost:5000/api/auth/registration", {
            name,
            password
        })
        alert(responce.data.message);
    } catch (e) {

    }
}