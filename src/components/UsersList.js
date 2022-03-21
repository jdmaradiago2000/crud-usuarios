import React from 'react';


const UsersList = ({users, setUserSelected, removeUser}) => {

    return (
        <div className='father'>
            <ul className='box'>
            {
                users.map(user => (
                    <li className='second-box' key={user.id}>
                        <div className='user'>
                            <p className='user-name'>{user.first_name} {user.last_name}</p>
                            <p className='user-email'>{user.email}</p>
                            <p>
                                <span className='icon-cake'><i className="fa-solid fa-cake-candles"></i></span>
                                <span className='date'>{user.birthday}</span>
                            </p>
                        </div>
                       
                        <div className='box-buttons'>
                            <button className='icon-button' onClick={() => removeUser(user.id)}>
                                <span className='icon-remove'><i className="fa-solid fa-trash"></i></span>
                            </button>
                            <button className='icon-button' onClick={() => setUserSelected(user)}>
                                <span className='icon-edit'><i className="fa-solid fa-pen"></i></span>
                            </button>
                        </div>
                    </li>
                ))
            }
            </ul>
        </div>
        
    );
};

export default UsersList;