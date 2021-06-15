import React, { useState, useEffect } from 'react'
import NavBar from './Components/NavBar/NavBar'
import TabsRouter from './Components/TabsRouter/TabsRouter'
import { ProductsContext } from './Components/ProductsContext/ProductsContext';

const axios = require('axios');

const MyApp = () => {

    const [products, setProducts] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false)

    const api = 'https://60c161ae4f7e880017dbf813.mockapi.io/api/v1/';

    useEffect(() => {
        getProducts()
            .then(products => setProducts(products))
            .catch((e) => console.error(e));
    }, [])

    async function getProducts() {
        setIsLoadingProducts(true);
        try {
            const response = await axios.get(`${api}/products`);
            setIsLoadingProducts(false);
            return response?.data;
        } catch (error) {
            setIsLoadingProducts(false);
            console.error(error);
        }
    }

    return (
        <ProductsContext.Provider value={{
            products,
            setProducts,
            isLoadingProducts
            }}>
            <NavBar />
            <TabsRouter />
        </ProductsContext.Provider>

    )
}

export default MyApp;
