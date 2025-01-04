import React from 'react'
import User from '../User'
import Car from '../Car'
import styles from './index.module.css';

function UserList(props) {
    const {users} = props;
    
  return (
    <div className={styles.container}>
        {
        users.length > 0 && 
            users.map((user,index)=>{
            return <User key = {index}  user = {user}/>;
        })
        }
    </div>
  )
}

export default UserList