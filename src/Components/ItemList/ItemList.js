import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';

import './ItemList.css';
const axios = require('axios');

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false)

    const api = 'https://60c161ae4f7e880017dbf813.mockapi.io/api/v1/';

    useEffect(() => {
        getProducts()
        .then(products => setProducts(products))
        .catch( (e) => console.error(e));  
    }, [])


    async function getProducts() {
        setIsLoadingProducts(true);
        try {
          const response = await axios.get(`${api}/products`);
          setIsLoadingProducts(true);
          return response?.data;
        } catch (error) {
          setIsLoadingProducts(true);
          console.error(error);
        }
    }


    return (
        <>
            <ul>
                {products.map(prod => (<li key={prod.id}><Item product={prod} /></li>))}
            </ul>

        </>
    )
}

export default ItemList;
