import React,{Component} from 'react';
// import {Route,Switch,Redirect} from 'react-router-dom';
import '@/sass/home.scss';
// import axios from 'axios';
import BottomBar from '@com/BottomBar';
import HomeHeader from '@com/HomeHeader';
import HomeNav from './HomeNav';
// import HomeBanner from './HomeBanner';
import { Carousel } from 'antd-mobile';
// import HomeFind from './HomeFind';
// import HomeFocus from './HomeFocus';
//import '@/sass/home.scss'



class Home extends Component{
    constructor(){
        super();
        this.state = {
             //暖冬清仓
             data1:[],
             //商品展示
             data2:[],
             data3:[],
             imgHeight:280
 
        }
    }
    componentDidMount(){
        var url ="http://m.ocj.com.cn/mt/commonCornersData?shop_num=7781&corner_nums%5B%5D=9541&corner_nums%5B%5D=11221&corner_nums%5B%5D=9544&corner_nums%5B%5D=9545&corner_nums%5B%5D=9681&corner_nums%5B%5D=11161&corner_nums%5B%5D=12081&auth_key=&prev_yn=N&prev_std_dt=&seq_shop_num=&prev_seq_temp_num="
        var option = {
            methods:'get'
        }
       fetch(url,option).then((res)=>{
           return res.json()
       }).then((res)=>{
        
            //轮播图
            var ban = res[3].setList[0].contentList;
            var ban2 = res[2].setList[0].contentList;
            var banner = res[0].setList[0].contentList
            ban2=ban2.slice(0,5);
            // console.log(banner);
            this.setState({
                data1 : ban,
                data2 : ban2,
                data3 : banner
            });
       })
    }
    render(){
        return (
            <div className="page home">
                <HomeHeader/>
                <footer>
                    <BottomBar/>
                </footer>
                <div className="main">
                <Carousel
                selectedIndex={0}
                autoplay={this.state.data3}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data3.map(item => (
                        <a
                        key={item.item_image}
                        href="javascript:;"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={item.item_image}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
                <HomeNav/>
                     {
                            this.state.data1.map(item=>{
                                return <div className="nuandon" key={item.alt_desc}>
                                    <div className="top-img">
                                        <img src={item.item_image} alt={item.item_image} style={{'weight':'100px'}}/>
                                    
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
                                return <div className="zhangshi" key={item.brand_name}>
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
             
         
             
             

                
            </div>
            
        )
    }
}

export default Home;