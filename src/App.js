import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import ProductList from './components/ProductList.jsx';
import NewProductForm from './components/NewProductForm.jsx';
import Error404 from './components/Error404';
import Footer from './components/Footer.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterProductList: []
    };
    this.handleAddNewProduct = this.handleAddNewProduct.bind(this);
    this.handleSellPints = this.handleSellPints.bind(this);
  }

  handleAddNewProduct(newProduct) {
    let newMasterProductList = this.state.masterProductList.slice();
    newMasterProductList.push(newProduct);
    this.setState({masterProductList: newMasterProductList});
  }

  handleSellPints(id) {
    let newMasterProductList = this.state.masterProductList.slice();
    newMasterProductList.forEach(function(product) {
      if (product.id === id) {
        product.pints -= 1;
      }
    });
    this.setState({masterProductList: newMasterProductList});
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/productlist' render={() => <ProductList productList={this.state.masterProductList} onSellPints={this.handleSellPints} />} />
          <Route path='/newproductform' render={() => <NewProductForm onAddNewProduct={this.handleAddNewProduct} />} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
  
}

export default App;
