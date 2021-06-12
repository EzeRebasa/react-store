import { Box, Container } from '@material-ui/core';
import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({children}) => {
    return (
        <Container>
            <Box alignItems="center">
                <h1> Listado de Productos Aquí </h1>
            </Box>
            {children}
        </Container>
    )
}

export default ItemListContainer;
