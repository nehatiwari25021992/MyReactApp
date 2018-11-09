import React, { Component} from 'react';
import Name from './name'

class List extends Component{

    state = {
        names : [
            { text : "Lily", price : 10, quantity : 1},
            { text : "Dafodil", price : 20 , quantity : 1},
            { text : "Daisy", price : 30, quantity: 1},
            { text : "Dianella", price : 40 , quantity : 1}
        ]
    }

    increaseQuantity = () => {
        let newState = this.state.names.map((flower)=>{
            flower.quantity +=1
            return flower
        })

        this.setState({newState})
    }

    render(){
            return (
                <div className="listCss">
                <button onClick={this.increaseQuantity}>Add More Flowers </button>
                    <h1>{this.props.season} Season Flower List</h1>
                    {
                            this.state.names.map((flower) => {
                                 return <Name flowername={flower}></Name>
                            })
                    }
                </div>
            );
        }
}

export default List;