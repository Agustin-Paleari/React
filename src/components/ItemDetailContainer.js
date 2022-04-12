import { useEffect, useState } from "react";

import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
        
    useEffect(() => {
        customFetch(2000, dato[1])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [dato]);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;