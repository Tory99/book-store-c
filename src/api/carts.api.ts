import { httpClient } from "./http";

interface AddCartParmas {
    book_id: number;
    quantity: number;
}

export const addCart = async(params : AddCartParmas) =>{
    const response = await httpClient.post("/carts", params);
    return response.data;
}