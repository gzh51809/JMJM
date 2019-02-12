import { TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class BottomBar extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab:'/home',
            tabs:[
                {
                    text:'关注',
                    path:'/follow',
                    name:'follow',
                    // icon:'icon-shouye'
                },
              
                {
                    text:'推荐',
                    path:'/recommend',
                    name:'Frecommend',
                    // icon:'icon-zhaobudaojieguo'
                },
                {
                    text:'评测',
                    path:'/test',
                    name:'test',
                    // icon:'icon-gouwuche'
                },
                {
                    text:'话题',
                    path:'/topic',
                    name:'topic',
                    // icon:'icon-gerenzhongxin'
                },
                {
                    text:'折扣',
                    path:'/discount',
                    name:'discount',
                    // icon:'icon-gouwuche'
                },
            ]
        }
    }
    // componentDidMount(){
    //     let hash = location.hash.split('/')[1];
    //     this.setState({
    //         selectedTab:'/' + hash
    //     })
    // }
    componentDidMount(){
        let hash = window.location.hash.split('/')[1];
        this.setState({
            selectedTab:'/'+hash
        })
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#000"
                tintColor="#ff2d51"
                
                prerenderingSiblingsNumber={0}
                noRenderContent
            >
                {
                    this.state.tabs.map(item=>{
                        return (
                        <TabBar.Item
                            title={item.text}
                            key={item.name}
                            icon={<div className={'iconfont ' + item.icon}
                            />
                            }
                            selectedIcon={<div className={'iconfont ' + item.icon}
                            />
                            }
                            selected={this.state.selectedTab === item.path}
                            onPress={() => {
                                this.setState({
                                    selectedTab: item.path,
                                });
                                this.props.history.push(item.path);
                            }}
                        >
                        </TabBar.Item>
                        )
                    })
                }
                
            </TabBar>
        )
    }
}

// 利用withRouter高阶组件包装BottomBar组件
BottomBar = withRouter(BottomBar);

export default BottomBar;