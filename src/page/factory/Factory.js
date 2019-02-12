import React,{Component} from 'react';
import BottomBar from '@com/BottomBar';
import HomeHeader from '@com/HomeHeader';



class Factory extends Component{
    render(){
        return (
            <div className="page factory">
                <div className="main">
                    
                    <HomeHeader/>
                    <footer>
                    <BottomBar/>
                    </footer>
                    <h1>TV购</h1>
                </div>
               
            </div>
            
        )
    }
}

export default Factory;