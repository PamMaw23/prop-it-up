import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state={
            updatedAge: this.props.age
        };
    }

    newAge = () =>{
        this.setState({updatedAge: this.state.updatedAge + 1})
    }
    render(){
        return(
            <div>
                <h1>{this.props.firstName}, {this.props.lastName}</h1>
                <p>Age: {this.state.updatedAge}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.newAge}>Birthday button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}

export default PersonCard