import React from 'react'
import classes from './productimg.module.css'
const ProductImg = (props) => {
    const currentHour= new Date().getHours() > 9 ? new Date().getHours() : '0'+new Date().getHours()
    const currentMinute= new Date().getMinutes() > 9 ? new Date().getMinutes() : '0'+new Date().getMinutes()
    return(
        <div className={classes.productImg}>
            <img src={props.img} alt="Product Preview" />

            {  props.heartBeat ?  
            <div className={classes.heart}>
                <i className="fa-solid fa-heart-pulse"></i>
                <p>78</p>
            </div>   
            : 
            <div className={classes.time}>
                <p>{`${currentHour} : ${currentMinute}`}</p>
            </div>
            } 
        </div>
    );
}

export default ProductImg