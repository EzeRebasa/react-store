import React from 'react'
import ItemCount from './Components/ItemCount/ItemCount'
import NavBar from './Components/NavBar/NavBar'
import TabsBar from './Components/TabsBar/TabsBar'

const MyApp = () => {

    const product = {
        stock : 30,
        initial : 1,
        onAdd : null  
    }
    
    return (
        <>
            <NavBar />
            <TabsBar />
            <ItemCount product={product}/>
        </>
    )
}

export default MyApp
