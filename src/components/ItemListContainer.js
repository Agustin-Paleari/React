import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class ItemListContainer extends React.Component { 
    render(){
    return (
        <>
            {this.props.greetings}
        </>
    ); 
}
}

export default ItemListContainer;