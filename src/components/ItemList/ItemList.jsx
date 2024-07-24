import React from 'react'
import Item from '../Elementos/Item/Item'



function ItemList(props) {

  return (

    <div className="itemlistcontainer wrapper"> 
        {props.recetas.map((item) => (
        <Item
        key={item.id}
        id={item.id}
        title={item.title}
        detail={item.detail}
        imgurl={item.imgurl}
        />
      ))}
      </div>
)
}

export default ItemList

