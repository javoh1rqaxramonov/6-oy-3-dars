import React from 'react';
import styles from './index.module.css';
import Car from '../Car';

function User(props) {
    const {user} = props;
    console.log(user);
    
  return (
    <div className={styles.card}>
        <img src={user.image} alt="qandaydur rasm" />
        <h3>{user.firstName} {user.lastName}</h3>
        <h3>{user.phone} </h3>
        <h3>{user.email}</h3>
        <ul className={styles.userul}>
            <h3>{user.address.region}</h3>
            <h3>{user.address.zip}</h3>
        </ul>
        <div>
            <h3 className={styles.cars}>
            {
                user.cars.length > 0 && user.cars.map((car,index)=>{
                    return <Car key = {index} car = {car} />
                })
            }
            {
                !user.cars.length && <p>moshinasi yoq</p>
            }
            </h3>
        </div>
    </div>
  )
}

export default User