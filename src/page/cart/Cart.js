import React,{Component} from 'react';
import BottomBar from '@com/BottomBar';
import HomeHeader from '@com/HomeHeader';


class Cart extends Component{
    render(){
        return (
            <div className="page cart">
                <div className="main">
                    
                    <HomeHeader/>
                    <footer>
                    <BottomBar/>
                </footer>
                <h1>全球购</h1>
                </div>
                
            </div>
            
        )
    }
}

export default Cart;