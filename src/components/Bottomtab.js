import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { TabBar } from 'antd-mobile';
class Bottomtab extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab:'/home',
            tabs:[
                {
                    text:'推荐',
                    path:'/recommend',
                    name:'recommend',
                    // icon:'icon-zhaobudaojieguo'
                },
                {
                    text:'福利',
                    path:'/welfare',
                    name:'welfare',
                    // icon:'icon-shouye'
                },
                {
                    text:'发布动态',
                    path:'/post',
                    name:'post',
                    // icon:'icon-gouwuche'
                },
                {
                    text:'导航',
                    path:'/nav',
                    name:'nav',
                    // icon:'icon-gerenzhongxin'
                },
                {
                    text:'杂货店',
                    path:'/store',
                    name:'store',
                    // icon:'icon-gouwuche'
                },
            ]
        }
    }

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
Bottomtab = withRouter(Bottomtab);

export default Bottomtab;