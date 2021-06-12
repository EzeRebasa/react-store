import React, { useState } from 'react';

import { Box, Button, Paper, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { AddShoppingCart } from '@material-ui/icons';
import './ItemCount.css';


const ItemCount = ({ stock }) => {

    // States
    const [cant, setCant] = useState(1);
    
    // handlers
    const handleAdd = (e) => {
        if (stock > cant) {
            setCant(cant + 1);
        } else {
            alert('No hay más stock')
        }
    }

    const handleSubtract = (e) => {
        if (cant > 1) {
            setCant(cant - 1);
        }
        else {
            console.log('Minimo posible');
        }
    }

    const handleChange = (e) => {
        // Parseo a number el valor ingresado y evito el NaN con el || 0, eso rompía el input y no dejaba usar los buttons
        const value = +e.target.value || 0;
        if(value === 0) {
            setCant(1);
        }else if( value > stock){
            alert('No hay más stock')
        }else {
            setCant(value);
        }   
    }

    return (
        <>
            {/* <Paper elevation={3} className="flex-container w-300">
                <h1> Producto </h1>
                <Box className="countContainer m-y-1"> */}
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={handleSubtract}
                    ><RemoveIcon /></Button>
                    <TextField
                        id='inputCount'
                        inputProps={{ style: {textAlign: 'center'} }}
                        size="small"
                        variant="outlined"
                        value={cant}
                        onChange={handleChange} 
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAdd}
                        size="small"

                    ><AddIcon /></Button>
                {/* </Box>       
                <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    startIcon={<AddShoppingCart />}
                > Agregar a carrito </Button> */}
            {/* </Paper> */}

        </>
    )
}

export default ItemCount;

