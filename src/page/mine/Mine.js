import React,{Component} from 'react';
import BottomBar from '@com/BottomBar';
import HomeHeader from '@com/HomeHeader';


class Mine extends Component{
    render(){
        return (
            <div className="page mine">
                <div className="main">
                   
                    <HomeHeader/>
                    <footer>
                    <BottomBar/>
                </footer>
                <h1>商城</h1>
                </div>
                
            </div>
            
        )
    }
}

export default Mine;