import React from 'react';


import classes from './productDetails.module.css'

const ProductDetails = (props) =>{

    const colourOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.productImage]
        if(pos === props.previewPos){
            classArr.push(classes.selectedProductImage)
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=> props.previewClick(pos)} />
        )
    })

    const featureList = props.data.featureList.map((item,pos)=>{
        const classArr2 = [classes.featureItems]
        if(pos=== props.pos){
            classArr2.push(classes.selectedFeature)
        }
        return(
            <button onClick={() => props.btnClick(pos)} key={pos} className={classArr2.join(' ')}>{item}</button>
        )
    })

    return (
        <div className={classes.productData}>
            <h1 className={classes.productTitle} >{props.data.title}</h1>
          <p className={classes.productdes}>{props.data.description}</p>

          <h3 className={classes.sectionHeading} >Slect Colour :</h3>
          <div>{colourOptions}</div>

          <h3 className={classes.sectionHeading}>Features</h3>
          <div>{featureList}</div>

          <button className={classes.buynow}>Buy Now</button>
        </div>
    )
}

export default ProductDetails