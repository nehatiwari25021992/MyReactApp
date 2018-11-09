import React, { Component} from 'react';
import Name from './name'
import Cart from './cart'

class List extends Component{

    state = {
        names : [
            { text : "Lily", price : 10, quantity : 1},
            { text : "Dafodil", price : 20 , quantity : 1},
            { text : "Daisy", price : 30, quantity: 1},
            { text : "Dianella", price : 40 , quantity : 1}
        ],
        customQuantity : 1,
        isAddToCart :  false,
        totalCost : 0
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
        //this.state.customQuantity = event.target.value;
        this.setState({
            customQuantity : event.target.value
        })
        let newState = this.state.names.map((flower)=>{
            flower.quantity = event.target.value;
            return flower
        })
        this.setState({newState})

    }


    addIntoCart = () => {
        console.log("*****")
        this.setState({
            isAddToCart : true
        })
        let total = 0
        total = this.state.names.reduce((result,res)=>{
            console.log(result)
            console.log(res)
            result.price+=res.price
                return result
        }).price;

        this.setState({totalCost : total})

        console.log("********** ",total)

    }

    changeSelectFlower = (dataFromChild) =>{
        console.log(dataFromChild)
        let newState = this.state.names.map((flower)=>{
            if(flower.text === dataFromChild.text){
                flower.quantity += 1;
            }
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
                                 return <Name changeFlowerQuantity={this.changeSelectFlower} flowername={flower}></Name>
                            })
                    }
                    {
                        (()=>{
                            if(this.state.isAddToCart){
                                return (
                                    <div>
                                        <label>Your total Order Cost is : {this.state.totalCost}</label>

                                    </div>
                                )
                            }
                        })()
                    }

                    <Cart addIntoCart={this.addIntoCart}/>
                </div>
            );
        }
}

export default List;