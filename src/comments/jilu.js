import React from 'react';
import img from './imgList';
import {Card, Icon} from 'antd';
export default class Jilu extends React.Component{
    constructor(props){
      super(props);
      this.arr = [];

    }
    state = {
      img,
      items:[]
    };

    componentDidMount(){
      const {num, index} = this.props.params;

      if(num>0){
        let item = {num, index};
        let {items} = this.state;
        items.push(item);

        this.setState({
          items
        });


      }



    }


  render(){
      const {img, items} = this.state;
      const shoppingHistory = items.length === 0
        ? '没有任何购买记录！！'
        : items.map((item, index) => {
          return(
            <Card key={index}>
              <div>
                <img src={img[item.index]} alt=""/>
              </div>
              <div>
                <Icon type="pay-circle" /><span>{item.num*300}</span>
              </div>
             </Card> )
        })
    return(
      <div>
        {shoppingHistory}
    </div>)
  }




}
