import React from 'react';

const Name = (props) => {
    if(props.flowername){
        return ( <tr>
            <td><h3>{props.flowername.text} </h3></td>
            <td>
                <input type="number"  onChange={props.changeFlowerQuantity} value={props.flowername.quantity} /> 
             </td>
             <td>   
                    {props.flowername.price * props.flowername.quantity}                   
             </td>
             <td>
                 <button onClick={props.deleteFlower}>Delete</button>
             </td>
        </tr>
        )
    }else{
        return (<div> -- </div>)
    }
}

export default Name;