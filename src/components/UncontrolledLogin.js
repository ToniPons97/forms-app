import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    _submitBtnRef = createRef();
    _userRef = createRef();
    _passRef = createRef();

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const rememeber = event.target.elements.remember.checked;
        
        if (username !== '' && password !== '') {
            console.log({
                username,
                password,
                rememeber
            });
        }
    }

    handleInputChange = (event) => {
        event.preventDefault();

        if (this._userRef.current.value !== '' && this._passRef.current.value)
            this._submitBtnRef.current.disabled = false;
        else 
            this._submitBtnRef.current.disabled = true;
    }
    
    disableSubmitBtn = (event) => {
        if (this._submitBtnRef.current.disabled === false)
            this._submitBtnRef.current.disabled = true;
    }

    componentDidMount() {
        this._userRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit} >
                    <label htmlFor="username">Username:</label>
                    <input ref={this._userRef} onChange={this.handleInputChange} name='username' type='text' id='username' autoComplete="off"/>
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input ref={this._passRef} onChange={this.handleInputChange} name='password' type='password' id='password'/>
                    <br />
                    <label htmlFor="remember">Remember me:</label>
                    <input name='remember' type='checkbox' id="remember"/>
                    <br />
                    <button disabled={true} ref={this._submitBtnRef} type='submit'>login</button>
                    <button disabled={false}  onClick={this.disableSubmitBtn} type='reset'>reset</button>
                </form>
            </div>
        );
    }
}