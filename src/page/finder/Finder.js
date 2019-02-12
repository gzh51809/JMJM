import React,{Component} from 'react';
import BottomBar from '@com/BottomBar';
import HomeHeader from '@com/HomeHeader';


class Finder extends Component{
    render(){
        return (
            <div className="page finder">
                <div className="main">
                   
                    <HomeHeader/>
                    <footer>
                    <BottomBar/>
                </footer>
                <h1>团购</h1>
                </div>
                
            </div>
            
        )
    }
}

export default Finder;