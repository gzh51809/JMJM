import React,{Component} from 'react';
import BottomBar from '@com/BottomBar';
import HomeHeader from '@com/HomeHeader';


class Guang extends Component{
    render(){
        return (
            <div className="page mine">
                <div className="main">
                    
                    <HomeHeader/>
                    <footer>
                    <BottomBar/>
                </footer>
                <h1>企业官网</h1>
                </div>
                
            </div>
            
        )
    }
}

export default Guang;