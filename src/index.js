import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import ImagesBlock from './components/images-block';
import Footer from './components/footer';
import AngledBackground from './components/angled-background';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            backgroundImage : "https://source.unsplash.com/1600x900"
        }
    }
    changeBackgroundImage = ()=>{
        let random_number1 = Math.floor((Math.random() * 1800));
        while(random_number1<1000){
            random_number1 = Math.floor((Math.random() * 1800));
        }
        let random_number2 = random_number1-300;
        let backgroundImage = "https://source.unsplash.com/"+random_number1+"x"+random_number2;
        this.setState({backgroundImage});
    }
    render(){
        return (

        <div className="app_body">
            <AngledBackground backgroundImage={this.state.backgroundImage}/>
            <div className='app'>
                <ImagesBlock onChangeBackgroundImage = {this.changeBackgroundImage} changedFlag = {this.state.backgroundImage}/>
                <Footer />
            </div>
        </div>
        )
    }
}
ReactDom.render(<App/>,document.getElementById('root'));