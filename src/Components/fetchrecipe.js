import axios from "axios";

export async function fetchData() {
    try {
        const { data } = await axios.get('https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY');
        return data;

    } catch(error) {
        console.error(error); 
        return null;

    }
}