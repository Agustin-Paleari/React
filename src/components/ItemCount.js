import {useState} from "react";
function ItemCount(){
    let [num, setNum]= useState(1);
    let incNum =()=>{
        if(num<5)
        {
        setNum(Number(num)+1);
        }
    };
    let decNum = () => {
        if(num>0)
        {
        setNum(num - 1);
        }
    }
    let handleChange = (e)=>{
    setNum(e.target.value);
    }
    return(
        <>
        
            <div className="input-group  ">
                <div className="input-group-prepend ">
                    <button className="btn btn-outline-dark btn-m " type="button" onClick={decNum}>-</button>
                </div>
                <input type="text" className="form-control text-center " value={num} onChange={handleChange}/>
                <div className="input-group-prepend">
                    <button className="btn btn-outline-dark btn-m" type="button" onClick={incNum}>+</button>
                </div>
                <div className="input-group-prepend">
                    <button className="btn btn-dark mt-2 btn-sm ">Agregar al carrito</button>
                </div> 
            </div>
        
    </>
    );
}
export default ItemCount;