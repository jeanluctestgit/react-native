import {create} from "apisauce";
import cache from '../utility/cache';

const api = create({baseURL : "https://gorest.co.in/public-api/products"})
const get = api.get;

api.get = async (url , params , axiosConfig) => {
    const response = await get(url , params , axiosConfig);
    if(response.ok){
        cache.setInStore(url,response.data);
        return response;
    }
    
}

const getProductsApi = () => api.get('/');
const getOneProduct = (id) => api.get('/' + id);

const ProductApi = {
    getProductsApi,
    getOneProduct
}

export default ProductApi;