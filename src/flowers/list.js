import React, { Component , Fragment} from 'react';
import Name from './name'
import Cart from './cart'
import UniqueId from 'react-html-id';

const Header = (props) =>{
    return (
        <Fragment>
        <h2>{props.greeting}</h2>
        <h1>Season Flower List</h1>
        </Fragment>
    )
}

class List extends Component{

    constructor(){
        super()
        UniqueId.enableUniqueIds(this)

        this.state = {
            names : [
                { id : this.nextUniqueId() , text : "Lily", price : 10, quantity : 1},
                { id : this.nextUniqueId(), text : "Dafodil", price : 20 , quantity : 1},
                { id : this.nextUniqueId() , text : "Daisy", price : 30, quantity: 1},
                { id : this.nextUniqueId(), text : "Dianella", price : 40 , quantity : 1}
            ],
            customQuantity : 1,
            isAddToCart :  false,
            totalCost : 0
        }
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
        const newFlowers = Object.assign([],this.state.names)
        newFlowers.forEach((f)=>{
                total+=f.price*f.quantity
        })
        this.setState({totalCost : total})
    }

    changeSelectFlower = (id, e) =>{
        console.log(id)
        const index = this.state.names.findIndex((flower)=>{
            return flower.id === id
        })

        let newFlower = Object.assign({}, this.state.names[index])
        newFlower.quantity = e.target.value

        const names = Object.assign([],this.state.names)
        names[index] = newFlower

        this.setState({names : names})
    }

    deleteSelectFlower = (index , e) => {
        const newFlowers = Object.assign([],this.state.names)
        newFlowers.splice(index,1)
        this.setState({names:newFlowers})
    }

    render(){
            return (
                <div className="listCss">
                <button onClick={this.increaseQuantity}>Add More Flowers </button>
                 ---- <button onClick={this.changeQuantitytoTwo.bind(this,2)} >Custom Quantity 2 </button>
                 <br/>
                 <label>Your Quatity : </label> <input type="number" min="1" value={this.state.customQuantity} onChange={this.changeQuantity} />
                    <Header greeting={this.props.season}/>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <h4>Name</h4>
                                </th>
                                <th>
                                    <h4>Quantity</h4>
                                </th>
                                <th>
                                    <h4>Price</h4>
                                </th>
                                <th>
                                    <h4>Action</h4>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                            this.state.names.map((flower,index) => {
                                 return <Name 
                                 key = {flower.id}
                                 changeFlowerQuantity={this.changeSelectFlower.bind(this,flower.id)} 
                                 deleteFlower = {this.deleteSelectFlower.bind(this,index)}
                                 flowername={flower}></Name>
                            })
                    }
                    </tbody>
                    </table>
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