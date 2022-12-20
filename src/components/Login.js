import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const type = event.target.type;

        this.setState(
            {
                [name]: type === 'checkbox' ? event.target.checked : value
            }
        );
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <input type='text' name='username' onChange={this.handleInputChange} autoComplete='off'/>
                <br />
                <input type='password' name='password' onChange={this.handleInputChange} />
                <br />
                <input type='checkbox' name='remember' onChange={this.handleInputChange}/>
            </div>
        );
    }
}