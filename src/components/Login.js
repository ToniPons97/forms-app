import React from "react";
import { useForm } from "./useForm";

export const Login = () => {
    const { formState, onInputChange } = useForm();
    
    const onLogin = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <form>
            <label htmlFor='username'>Username: </label>
            <input 
                type='text' 
                name='username' 
                id='username' 
                value={formState.username} 
                onChange={onInputChange} 
                autoComplete='off'
            />
            <br />
            <label htmlFor='password'>Password: </label>
            <input 
                type='password' 
                name='password' 
                id='password' 
                value={formState.password}
                onChange={onInputChange} />
            <br />
            <label htmlFor='remember'>remember me</label>
            <input 
                type='checkbox' 
                name='remember' 
                id='remember' 
                value={formState.remember}
                onChange={onInputChange}/>
            <br />
            <button id='login-btn' 
                disabled={formState.username === '' && formState.password === ''}
                onClick={onLogin}    
            >Login</button>
        </form>
    );
}

export default Login;