import React, { useState } from 'react';

import { Box, Button, Paper, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { AddShoppingCart } from '@material-ui/icons';
import './ItemCount.css';


const ItemCount = ({ product }) => {

    const { stock, initial, onAdd } = product;
    // States
    const [cant, setCant] = useState(initial);

    // handlers
    const handleAdd = (e) => {
        if (stock > cant) {
            setCant(cant + 1);
        } else {
            alert('No hay más stock')
        }
    }

    const handleSubtract = (e) => {
        console.log('Cant', cant);
        if (cant > 1) {
            setCant(cant - 1);
        }
        else {
            console.log('Minimo posible');
        }
    }

    const handleChange = (e) => {
        console.log(e.target);
    }

    return (
        <>
            <Paper elevation={3} className="flex-container w-300">
                <h1> Producto </h1>
                <Box className="countContainer m-y-1">
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={handleSubtract}
                    ><RemoveIcon /></Button>
                    <TextField
                        inputProps={{ style: {textAlign: 'center'} }}
                        size="small"
                        variant="outlined"
                        value={cant}
                        onChange={handleChange} // No estaria funcionando
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAdd}
                        size="small"

                    ><AddIcon /></Button>
                </Box>
                
                <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    startIcon={<AddShoppingCart />}
                > Agregar a carrito </Button>
            </Paper>

        </>
    )
}

export default ItemCount;

