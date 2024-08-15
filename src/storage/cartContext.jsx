const { createContext, useState } = require ("react")

export const cartContext = createContext();
/* dentro del context van agregar quitar totalitems y seguro vamos a meter conteo de ingredientes */
export function CartContextProvider (props) {
    let [cart, setCart] = useState([])

    function addItem(receta, count) {
        const isIncart = cart.some(itemInCart => itemInCart.id === receta.id)
        if(isIncart){
            let newCart = [...cart];
            let index = cart.findIndex(itemInCart => itemInCart.id === receta.id)
            /* newCart[index] */
        }
        else {
        setCart([...cart, receta])
        }    
    }

    function removeItem (id) {
        /* remover item */
    }

    function clearCart () {
        /* Borarrar carrito */
    }

    function getTotalItems () {
        /* total de recetas en carrito */
    }

    function getTotalIngredientes () {
        /* suma de ingredientes */
    }

    const value = {cart, addItem, removeItem, clearCart, getTotalItems, getTotalIngredientes}
    return <cartContext.Provider value= {value}>
        {props.children}
    </cartContext.Provider>
}

