import React, { useState } from "react";

export const Login = () => {
    const [form, setForm] = useState({username: '', password: '', remember: false});

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setForm(prevForm => ({
            ...prevForm,
            [name]: name === 'remember' ? !prevForm.remember : value
        }));


        
        
        console.log(form);
    }

    const onLogin = (event) => {
        event.preventDefault();
        console.log(form);
    }

    return (
        <form>
            <label htmlFor='username'>Username: </label>
            <input 
                type='text' 
                name='username' 
                id='username' 
                value={form.username} 
                onChange={handleInputChange} 
                autoComplete='off'
            />
            <br />
            <label htmlFor='password'>Password: </label>
            <input 
                type='password' 
                name='password' 
                id='password' 
                value={form.password}
                onChange={handleInputChange} />
            <br />
            <label htmlFor='remember'>remember me</label>
            <input 
                type='checkbox' 
                name='remember' 
                id='remember' 
                value={form.remember}
                onChange={handleInputChange}/>
            <br />
            <button id='login-btn' 
                disabled={form.username === '' && form.password === ''}
                onClick={onLogin}    
            >Login</button>
        </form>
    );
}

export default Login;