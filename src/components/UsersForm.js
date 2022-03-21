import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({getUsers, userSelected, setUserSelected}) => {

    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")

    useEffect(() => {
        if(userSelected){
            setFirstName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday);
        }else{
            reset()
        }
    },[userSelected])

    console.log(userSelected)

    const submit = (e) => {
        e.preventDefault();
        const user = {
            first_name:firstName,
            last_name:lastName,
            email,
            password,
            birthday
        }
        if(userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() =>{
                    getUsers();
                    reset();
                }) 
                
        }else{
            axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(() => {
                getUsers();
                reset();
            })
            .catch((error) => console.log(error.response)); 
        }
    }

    const reset = () => {
        setUserSelected(null)
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirthday("");
    }

    return (
        <form className='form' onSubmit={submit}>
            <h1 className='title'>New User</h1>

            <div className='input-container'>
                <label htmlFor="firstname-lastname" className='icon-box'>
                    <span className='icon'><i className="fa-solid fa-user"></i></span>
                </label>
                <input
                    className='input-name' 
                    type="text"
                    placeholder='Name' 
                    onChange={e=>setFirstName(e.target.value)} 
                    value={firstName}
                />
                <input
                    className='input-name'
                    type="text" 
                    placeholder='Last Name'
                    onChange={e=>setLastName(e.target.value)} 
                    value={lastName}
                />
            </div>

            <div className='input-container'>
                <label htmlFor="email" className='icon-box'>
                <span className='icon'><i className="fa-solid fa-envelope"></i></span>
                </label>
                <input
                    className='input' 
                    type="email"
                    placeholder='Email' 
                    onChange={e=>setEmail(e.target.value)} 
                    value={email}
                />
            </div>

            <div className='input-container'>
                <label htmlFor="password" className='icon-box'>
                <span className='icon'><i className="fa-solid fa-lock"></i></span>
                </label>
                <input
                    className='input'
                    type="password"
                    placeholder='Password' 
                    onChange={e=>setPassword(e.target.value)} 
                    value={password}
                />
            </div>
            
            <div className='input-container'>
                <label htmlFor="birthday" className='icon-box'>
                <span className='icon'><i className="fa-solid fa-cake-candles"></i></span>
                </label>
                <input
                    className='input'
                    type="date"
                    placeholder='Birthday' 
                    onChange={e=>setBirthday(e.target.value)} 
                    value={birthday}
                />
            </div>

            <div className='button-container'>
                <button className='button'>Upload</button>
                <br />
                <button className='button' onClick={()=> reset()} type="button">
                    Reset
                </button>
            </div>
        </form>
    );
};
export default UsersForm;