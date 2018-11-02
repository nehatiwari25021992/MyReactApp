import React, { Component} from 'react';
import Name from './name'

class List extends Component{
    render(){
            return (
                <div className="listCss">
                    <h1>{this.props.season} Season Flower List</h1>
                    <Name>Lily</Name>
                    <Name>Dafodil</Name>
                    <Name>Daisy</Name>
                    <Name>Dianella</Name>
                </div>
            );
        }
}

export default List;