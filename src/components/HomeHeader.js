import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import '@/sass/HomeHeader.scss';

let HomeHeader = props=>{
    return (
        <div className="home-header">
            <div>
                <a href="javascript:;"><i className="iconfont icon-erweima"></i>分类</a>
            </div>
            <div>
            <div className="search">
                   叽咪叽咪
            </div> 
            </div>
            <div>
                <a href="javascript:;"><i className="iconfont icon-iconset0157"></i></a>
            </div>
        </div>
    )
}
HomeHeader = withRouter(HomeHeader);
export default HomeHeader;