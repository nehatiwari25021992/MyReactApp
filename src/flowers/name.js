import React from 'react';

const Name = (props) => {
    if(props.flowername){
        return ( <h3>{props.flowername.text} | 
        <input type="number"  onChange={() => props.changeFlowerQuantity(props.flowername)} value={props.flowername.quantity} />  |
                     {props.flowername.price * props.flowername.quantity}                   
                    </h3>
                    )
    }else{
        return (<div> -- </div>)
    }
}

export default Name;