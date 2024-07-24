import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import getItems from '../../services/mockAsyncService'
import { useParams } from 'react-router-dom';
import {getItemsByCategory} from '../../services/mockAsyncService'

function ItemListContainer() {
  
  const [recetas, setRecetas] = useState([]);
  let {categoryid} = useParams();
  



useEffect(() => {
  if (categoryid !== undefined) {
      getItemsByCategory(categoryid).then((respuesta) => {
      setRecetas(respuesta);
      console.log(respuesta);
  });
  } else {
  getItems().then((respuesta) => {
      setRecetas(respuesta);
      
  });
  }
}, [categoryid]);



  return (
    <div>
      <ItemList recetas={recetas}>
      </ItemList>
    </div>
  )
}

export default ItemListContainer

