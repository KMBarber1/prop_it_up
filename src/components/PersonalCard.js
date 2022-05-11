import React, {Component} from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        }
    }

    // increaseAge = () => {
    //     this.setState({ age: this.state.age + 1 })
    // }

    render() {
        // const {firstname, lastname, age, haircolor} = this.props - (only if removing this.props from below lines)
        return (

            <div>

                <h1>{this.props.lastname}, {this.props.firstname}</h1> 

                {/* <p>Age: {this.props.age}</p> */}

                <p>Age: {this.state.age}</p>

                <p>Hair Color: {this.props.haircolor}</p>

                <button onClick={() => this.setState({age:this.state.age + 1})}>Birthday Button for {this.props.firstname} {this.props.lastname}</button>

                {/* <button onClick={this.increaseAge}>Birthday Button for {this.props.firstname} {this.props.lastname}</button> */}

            </div>

        )
    }
}

export default PersonCard