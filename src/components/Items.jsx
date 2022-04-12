import React from "react";
import ItemCount from "./ItemCount";

function Items({ id, title, description, price, pictureUrl }) {
    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }
    return (
        <div className="card col-4 " id={id}>
            <img className="card-img-top" src={pictureUrl} alt ="" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <h5 className="card-subtitle">{price}</h5>
                <div className="card-footer "><ItemCount stock={5} initial={1} onAdd={onAdd} /></div>
            </div>
            
        </div>
    )
}

export default Items