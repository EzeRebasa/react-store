import React, { useEffect, useState, useContext } from 'react'
import Item from '../Item/Item';
import { ProductsContext } from '../ProductsContext/ProductsContext';
import Spinner from '../Shared/Spinner/Spinner';

import './ItemList.css';

const ItemList = () => {

    const productsContext = useContext(ProductsContext);
    const { products, isLoadingProducts } = productsContext;

    return (
        <>
            { !isLoadingProducts ? 
                <ul>
                    {products.map(prod => (<li key={prod.id}><Item product={prod} /></li>))}
                </ul>
                 :
                <Spinner />  
            }
        </>
    )
}

export default ItemList;
