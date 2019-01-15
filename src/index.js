import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    // constructor(props){
    //     super(props)

    //     this.state = {lat: null , errorMessage: '' }

    // }

    state = {lat: null, errorMessage: ''};

    //For initially data loading
    //setState() take an object as argument
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                console.log(position)
                this.setState({lat: position.coords.latitude})
            }, // a callback function that will be called some point in time in the future
            err => this.setState({errorMessage: err.message })
        );
    }

    // putting the logic inside of the helperFunction will help to clear the logic from render function
    helperFunction(){

        if(this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if(this.state.errorMessage){
            return <div>Error:{this.state.errorMessage}</div>
        }
        return <Spinner message="Please accept location request"/>
    }


// render function should not contain a great amount of logic
    render(){
        return (
        <div>
            {this.helperFunction()}
        </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))