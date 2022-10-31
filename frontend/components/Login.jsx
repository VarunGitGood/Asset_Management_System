import React from 'react'
export default function Login() {

    function user_data(event)
    { 
        event.preventDefault();
        console.log(event.target.username.value);
        console.log(event.target.password.value);
    }
    return (
        <div>
            <h1> Login </h1>
            <form onSubmit={user_data}>
                <label> Username: </label>
                <input type="text" name="username" />
                <label> Password: </label>
                <input type="password" name="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
    }
