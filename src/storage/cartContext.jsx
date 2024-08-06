const { createContext, useState } = require ("react")

export const cartContext = createContext();
/* dentro del context van agregar quitar totalitems y seguro vamos a meter conteo de ingredientes */
export function CartContextProvider (props) {
    let [cart, setCart] = useState([])

    function addItem(receta, count) {

        /* let newCart = [...cart]
        newCart.push(item)
        setCart(newCart)  forma alternativa */
        setCart([...cart, receta])
    }

    const value = {cart, addItem}
    return <cartContext.Provider value= {value}>
        {props.children}
    </cartContext.Provider>
}

