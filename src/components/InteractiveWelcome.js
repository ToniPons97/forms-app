import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {

    state = {
        username: 'User'
    }

    handleInputChange = (event) => {
        let value = event.target.value;
        this.setState(
            {username: value}
        );
    }

    render() {
        return (
            <div>
                <input type='text' name='username' onChange={this.handleInputChange} autoComplete='off' />
                <Welcome name={this.state.username} />
            </div>
        );
    }
}