import React, { useContext, useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleItem } from "../../services/mockAsyncService";
import Flexwrapper from "../Elementos/Flexwrapper/Flexwrapper"
import { useParams } from 'react-router-dom';
import ItemCount from '../Elementos/ItemCount/ItemCount';
import { cartContext } from '../../storage/cartContext';



function ItemDetailContainer() {

const [receta, setReceta] = useState([]);
let {itemid} = useParams();

const { addItem } = useContext(cartContext)

function handleAddToCart(count){

    alert(`Agregaste ${count} de ${receta.title} al carrito`)
    receta.count = count
    addItem(receta, count)
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