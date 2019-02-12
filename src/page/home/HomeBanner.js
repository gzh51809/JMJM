import React,{Component} from 'react';
import { Carousel } from 'antd-mobile';

class HomeBanner extends Component{
    constructor(){
        super();
        this.state = {
            imgHeight:280,
            isok:true,
            
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
            // var ban2 = res[2].setList[0].contentList;
            console.log(ban);
            this.setState({
                data1 : ban,
                // data2 : ban2
            });
       })
    }
    render(){
        return (
            <div className="home-banner">
                <Carousel
                selectedIndex={0}
                autoplay={this.state.isok}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                    {this.props.banners.map(item => (
                        <a
                        key={item.imgUrl}
                        href="javascript:;"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={item.imgUrl}
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
            </div>
        )
    }
}
export default HomeBanner;