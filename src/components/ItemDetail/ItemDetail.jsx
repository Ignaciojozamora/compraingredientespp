function ItemDetail({ receta }) {
    if (!receta) {
    return <div>Cargando...</div>;
    }
    return (
    <div className="card-detail_main">
        <div className="card-detail_img">
        <img src={receta.imgurl} alt={receta.title} />
        </div>
        <div className="card-detail_detail">
        <h1>{receta.title}</h1>
        <small>{receta.detail}</small>
        <p>Porciones: {receta.porciones}</p>
        <h2>Ingredientes:</h2>
        <ul>
            {receta.ingredientes && receta.ingredientes.map((ingrediente, index) => (
            <li key={index}>
                {ingrediente.nombre}: {ingrediente.cantidad} {ingrediente.unidad}
            </li>
            ))}
        </ul>
        </div>
    </div>
    );
}

export default ItemDetail;

