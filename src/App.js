import React, { Component } from 'react'

import classes from './App.module.css';
import ProductData from './ProductData/product';
import Topbar from './Topbar/topbar'
import ProductDetails from './ProductDetails/productDetails';
import ProductImg from './ProductImage/productimg'

class App extends Component {
  state = {
    productData: ProductData,
    previewImagePos : 0,
    showHeartbeat : 0
  }

  previewClick = (pos) =>{
    this.setState({previewImagePos : pos})  
  }

  onBtnClick = (pos) =>{
    this.setState({showHeartbeat : pos})
  }

  render() {
    return (
      <div className="App">
        <Topbar />
        <div className={classes.mainContainer}>
          
          <div className={classes.productImg}>
            <ProductImg img={this.state.productData.colorOptions[this.state.previewImagePos].imageUrl} heartBeat={this.state.showHeartbeat} />
          </div>
          
          <div className={classes.productData}>
            <ProductDetails data={this.state.productData} previewClick={this.previewClick} previewPos={this.state.previewImagePos} btnClick={this.onBtnClick} pos = {this.state.showHeartbeat} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
