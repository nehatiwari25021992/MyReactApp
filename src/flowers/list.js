import React, { Component} from 'react';
import Name from './name'

class List extends Component{

    state = {
        names : [
            { text : "Lily", price : 10, quantity : 1},
            { text : "Dafodil", price : 20 , quantity : 1},
            { text : "Daisy", price : 30, quantity: 1},
            { text : "Dianella", price : 40 , quantity : 1}
        ],
        customQuantity : 1
    }

    increaseQuantity = () => {
        let newState = this.state.names.map((flower)=>{
            flower.quantity +=1
            return flower
        })

        this.setState({newState})
    }

    changeQuantitytoTwo = (q) => {
        let newState = this.state.names.map((flower)=>{
            flower.quantity = q;
            return flower
        })


        this.setState({newState})
    }

    changeQuantity = (event) => {
        this.state.customQuantity = event.target.value;
        let newState = this.state.names.map((flower)=>{
            flower.quantity = event.target.value;
            return flower
        })
        this.setState({newState})

    }

    render(){
            return (
                <div className="listCss">
                <button onClick={this.increaseQuantity}>Add More Flowers </button>
                 ---- <button onClick={this.changeQuantitytoTwo.bind(this,2)} >Custom Quantity 2 </button>
                 <br/>
                 <label>Your Quatity : </label> <input type="number" min="1" value={this.state.customQuantity} onChange={this.changeQuantity} />
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