import React, { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleItem } from "../../services/mockAsyncService";
import Flexwrapper from "../Elementos/Flexwrapper/Flexwrapper"
import { useParams } from 'react-router-dom';
import ItemCount from '../Elementos/ItemCount/ItemCount';



function ItemDetailContainer() {

const [receta, setReceta] = useState([]);
let {itemid} = useParams();

function handleAddToCart(count){
    alert(`Agregaste ${count} de ${receta.title} al carrito`)
}

useEffect(
    () => {
        getSingleItem(itemid).then((respuesta) => {
        setReceta(respuesta)
        })
    }, [itemid] )

    return (
    <>
    <Flexwrapper>
    <ItemDetail receta={receta}>
    </ItemDetail>
    
    </Flexwrapper>
    <ItemCount onAddToCart={handleAddToCart}/>
    </>
    );
} 

export default ItemDetailContainer;