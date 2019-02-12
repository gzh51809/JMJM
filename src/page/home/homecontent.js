import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
class homecontent extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }
    render(){
        return (
          <div>
              {
                this.state.data1.map(item=>{
                    return <div className="nuandon">
                        <div className="top-img">
                            <img src={item.item_image} alt={item.item_image} />
                        
                        </div>
                        <div className="but-name">
                                <span>{item.alt_desc}</span>
                                <div>{item.conts_desc}</div>
                        </div>
                    </div>
                })
                
            }
             {
                this.state.data2.map(item=>{
                    return <div className="zhangshi">
                        <div className="top-img">
                            <img src={item.item_image} alt={item.item_image} />
                        
                        </div>
                        <div className="but-name">
                                <span>{item.conts_title_nm}</span>
                                <div>￥{item.item_price}</div>
                        </div>
                    </div>
                })
                
            }
          </div>
            
        )
    }
}
export default HomeNav;
