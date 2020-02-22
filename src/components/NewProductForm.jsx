import React from 'react';
import './NewProductForm.css';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewProductForm(props) {

  let _name = null;
  let _brand = null;
  let _price = 0;
  let _description = null;

  function handleSubmitNewProductForm(event) {
    event.preventDefault();
    props.onAddNewProduct({name: _name.value, brand: _brand.value, price: parseInt(_price.value), description: _description.value, id: v4(), pints: 124});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _description.value = '';
  }

  const styleNewProductForm = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 10%',
    height: '100vh',
    padding: '0 64px'
  }

  const styleHeader = {
    margin: '0',
    paddingBottom: '16px',
    fontFamily: "'Quicksand', sans-serif",
    fontSize: '3em',
    fontWeight: '500',
    color: '#FF6663'
  }

  const styleText = {
    margin: '0',
    paddingBottom: '32px',
    fontFamily: "'Roboto', ",
    fontSize: '1.5em',
    fontWeight: '300',
    lineHeight: '1.5',
    letterSpacing: '0.03125em'
  }

  const styleForm = {
    display: 'flex',
    flexDirection: 'column'
  }

  const styleInput = {
    marginBottom: '2em',
    border: '1px solid lightgrey',
    borderRadius: '0.5em',
    padding: '1em 1em',
    fontFamily: "'Roboto', ",
    fontSize: '1em',
    lineHeight: '1.5',
    letterSpacing: '0.0625em'
  }

  return (
    <div className='background-pattern'>
      <div style={styleNewProductForm}>
        <p style={styleHeader}>Add a new tap</p>
        <p style={styleText}>Once you add a new tap, go to the tap room to mark pints as sold.</p>
        <form style={styleForm} onSubmit={handleSubmitNewProductForm}>
          <input style={styleInput}
            type='text'
            id='name'
            placeholder='Name'
            ref={(input) => {_name = input;}}
            required/>
          <input style={styleInput}
            type='text'
            id='brand'
            placeholder='Brand'
            ref={(input) => {_brand = input;}}
            required/>
          <input style={styleInput}
            type='number'
            min='0'
            id='price'
            placeholder='Price'
            ref={(input) => {_price = input;}}
            required/>
          <textarea style={styleInput}
            id='description'
            placeholder='Description'
            rows='3'
            ref={(input) => {_description = input;}}
            required/>
          <div>
            <button className='button' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );

}

NewProductForm.propTypes = {
  onAddNewProduct: PropTypes.func
}

export default NewProductForm;
