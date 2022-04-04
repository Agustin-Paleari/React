import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount"


class ItemListContainer extends React.Component { 
    render(){
    return (
        <>
            {this.props.greetings}
            <ItemCount />
        </>
    ); 
}
}

export default ItemListContainer;