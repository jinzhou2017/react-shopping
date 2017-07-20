import React from 'react';
import {Link} from 'react-router';
import {Card, Button} from 'antd';
import img from './imgList';

export default class Detail extends React.Component{
  state = {
    img,
    num:1
  };
  count = (isAdd) => {
    if(isAdd){
      let num = this.state.num;
      num++;
      this.setState({num});

    }else {
      let num = this.state.num;
      num--;
      if(num < 0){
        num = 0;
      }
      this.setState({num});

    }




  }

  render(){
    const {img, num} = this.state;
    return(
      <div>
        <Link to="/">主页</Link>
        <Card>
          <img src={img[this.props.params.index]} alt=""/>
          <Button type='primary' onClick={this.count.bind(this, false)}>
            -
          </Button>
          <div className="number">
            {this.state.num}
          </div>
          <Button type='primary' onClick={this.count.bind(this, true)}>
            +
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button type='primary'><Link to={`/jiesuan/${num}/${this.props.params.index}`}>去购物车结算</Link></Button>
        </Card>


      </div>)
  }




}
