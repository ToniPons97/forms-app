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

    onLogin = () => {
        console.log(this.state);
    }

    handleInputReset = () => {
        this.setState({
            username: '',
            password: '',
            remember: false
        });
    }

    render() {
        return (
            <div>
                <label htmlFor='username'>Username: </label>
                <input type='text' name='username' id='username' 
                    onChange={this.handleInputChange} 
                    value={this.state.username}
                    autoComplete='off'
                />
                <br />
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' id='password' 
                    value={this.state.password}
                    onChange={this.handleInputChange} 
                />
                <br />
                <label htmlFor='remember'>remember me</label>
                <input type='checkbox' name='remember' id='remember'
                    checked={this.state.remember}
                    onChange={this.handleInputChange}
                />
                <br />
                <button 
                    disabled={this.state.username === '' && this.state.password === ''}
                    onClick={this.onLogin}    
                >Login</button>
                <button 
                    disabled={this.state.username === '' && this.state.password === ''}
                    onClick={this.handleInputReset}
                >Reset</button>
            </div>
        );
    }
}