import React, { useState } from "react";

export const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        if (name === 'username')
            setUserName(value);
        if (name === 'password')
            setPassword(value);
        if(name === 'remember')
            setRemember(!remember);
    }

    const onLogin = () => {
        console.log({username, password, remember});
    }

    return (
        <div>
            <label htmlFor='username'>Username: </label>
            <input type='text' name='username' id='username' onChange={handleInputChange} autoComplete='off'/>
            <br />
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' id='password' onChange={handleInputChange} />
            <br />
            <label htmlFor='remember'>remember me</label>
            <input type='checkbox' name='remember' id='remember' onChange={handleInputChange}/>
            <br />
            <button id='login-btn' 
                disabled={username === '' && password === ''}
                onClick={onLogin}    
            >Login</button>
        </div>
    );
}

export default Login;