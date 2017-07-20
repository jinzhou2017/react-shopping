import React from 'react';
import {Card, Button, Icon} from 'antd';
import {Link} from 'react-router';
import img from './imgList';
export default class Jiesuan extends React.Component{
  state = {
    img,
    num:0
  };
  componentDidMount(){
    const {num} = this.props.params;
    if(num >= 0){
      this.setState({num})
    }

  };
  clearn = () => {
    this.setState({
      num :0
    })
  };
  pay = () => {

      this.setState({
        num :0
      })







  };


  render(){
    const {img, num} = this.state;
    const {index} = this.props.params;
    let shopping = num === 0
      ?<p>赶快去买点东西吧！！</p>
      :<Card>
        <img src={img[index]} alt=""/>
        <div>
          <Button type='primary' onClick={this.clearn}>清空</Button>
          <div>
            <Icon type="pay-circle" />
            <p>{num*300} </p>
          </div>
          <Link to={`/jilu/${index}/${num}`}><Button type='primary' onClick={this.pay}>付账</Button></Link>
        </div>
      </Card>
    return(
      <div>
        {shopping}

    </div>)
  }




}
