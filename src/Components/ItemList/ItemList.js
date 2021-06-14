import React, { useEffect, useState, useContext} from 'react'
import Item from '../Item/Item';
import { ProductsContext } from '../ProductsContext/ProductsContext';

import './ItemList.css';

const ItemList = () => {

    const productsContext = useContext(ProductsContext);
    const { products } = productsContext;

    return (
        <>
            <ul>
                {products.map(prod => (<li key={prod.id}><Item product={prod} /></li>))}
            </ul>

        </>
    )
}

export default ItemList;
