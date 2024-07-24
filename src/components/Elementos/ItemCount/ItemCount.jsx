import React, {useState} from 'react'
import "./itemcount.css"
import { ButtonChild } from '../Button/Button'




function ItemCount({onAddToCart}) {
    const [count, setCount] = useState(1)
/* Funcion para sumar en contador */
        function handleAdd() {
        
            setCount(count + 1);
            
        }
/* Funcion para restar en contador */
        function handleSubstract() {
            if (count >= 1){
            setCount(count - 1);
            
        }
        }



    return (
    
<div className="itemcount_container">
      <small>Agrega la cantidad que quieres preparar</small>
      <div className="itemcount_control">
        <ButtonChild onTouch={handleSubstract}>
          -
        </ButtonChild>
        <span className="itemcount_count">{count}</span>
        <ButtonChild  onTouch={handleAdd}>
          +
        </ButtonChild>
      </div>

      <div className="itemcount_btns">
        <ButtonChild onTouch={() => onAddToCart(count)} >
          Agregar a la lista
        </ButtonChild>
      </div>
    </div>
    )
}

export default ItemCount
