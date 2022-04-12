import ItemCount from './ItemCount';


const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            item.image
            ?
            <div className="card col-4 " key={item.id}>
                <img className="card-img-top" src={item.image} alt ="" />
                <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.description}</p>
                    <h5 className="card-subtitle">{item.price}</h5>
                    <ItemCount/>
                </div>
            </div>
            : <p>cargando...</p>
        }
        </>
    );
}

export default ItemDetail;