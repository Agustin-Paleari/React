import ItemCount from './ItemCount';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>

                <div className="card col-4 " id={item.id}>
            <img className="card-img-top" src={item.pictureUrl} alt ="" />
            <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.description}</p>
                <h5 className="card-subtitle">{item.price}</h5>
            </div>
            
        </div>
        </>
    );
}

export default ItemDetail;