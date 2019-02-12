import React,{Component} from 'react';

class HomeNav extends Component{
    constructor(){
        super();
        this.state = {
            iconNavTabs:[
                {
                    iconPic:'http://image.gimmgimm.com/d/10002/1178f147026eb9589d3e971a991cae25.gif?x-oss-process=image/resize,m_fill,h_120,w_120/quality,q_80',
                    name:'又有游戏可以领取'
                },
                {
                    iconPic:'http://image.gimmgimm.com/d/10002/c008523ad75d515e46fd255b8a825ab1.png?x-oss-process=image/resize,m_fill,h_120,w_120/quality,q_80',
                    name:'游戏评论'
                },
                {
                    iconPic:'http://image.gimmgimm.com/d/10002/b929568d6da79b009fb3e9eafab76316.jpg?x-oss-process=image/resize,m_fill,h_120,w_120/quality,q_80',
                    name:'游戏来袭'
                },
                {
                    iconPic:'http://image.gimmgimm.com/d/10002/4f60f462229103f2911e41a76cc9fb78.png?x-oss-process=image/resize,m_fill,h_120,w_120/quality,q_80',
                    name:'游戏圈坊间八卦'
                },
                {
                    iconPic:'http://image.gimmgimm.com/d/10002/ab123320a819c5874dcadcb75ce6180d.png?x-oss-process=image/resize,m_fill,h_120,w_120/quality,q_80',
                    name:'打折游戏推荐'
                },
            ],
        }
    }
    render(){
        return (
            <ul className="home-nav">
                {
                    this.state.iconNavTabs.map(item=>{
                        return (
                        <li key={item.name}>
                            <img src={item.iconPic} />
                            <span>{item.name}</span>
                        </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default HomeNav;