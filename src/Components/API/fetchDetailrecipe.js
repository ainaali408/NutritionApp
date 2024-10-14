import axios from "axios";

export async function fetchDetailrecipe(id) {
    const APP_ID = 'ac22297a';  // Replace with your actual Edamam API App ID
    const APP_KEY = 'd87b3337b685b6fc29f846ec984de0d8';  // Replace with your actual API key

    try {

        const response = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`);
        
        return response.data;

    } catch (error) {
        console.error(error);
        return null;
    }
}
