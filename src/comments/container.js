import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router';
import img from './imgList';
export default class Container extends React.Component{
    state = {
      img
    };


  render(){
    const {img} = this.state;
    return(
      <div>
        {
          img.map((item, index) => {

            return(
              <Card key={index} >
                <Link to={`/detail/${index}`}>
                  <div className="custom-image">
                    <img   src={item} />
                  </div>
                  <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                  </div>
                </Link>



              </Card>
            )

          })


        }


      </div>)
  }




}
