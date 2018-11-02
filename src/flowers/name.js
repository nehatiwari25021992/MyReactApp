import React from 'react';

const Name = (props) => {
    if(props.children){
        return ( <h3>{props.children}</h3>)
    }else{
        return (<div> -- </div>)
    }
}

export default Name;