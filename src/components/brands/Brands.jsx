import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../header/Header';
import css from './Brands.css';
const Brands = () => {
  const [brandProducts, setBrandProducts] = useState([]);
  useEffect(() =>
  {
      // Syntax
      // const getBrands = async() => {
      //   const responce = await axios.get();
      // };
      const getBrands = async() => {
        const responce = await axios.get('https://637349ea0bb6b698b6077e9e.mockapi.io/product');
        setBrandProducts(responce.data);
      };
      getBrands();
  },[]);
  return (
    <div>
      <Header/>
      <h1>Brands Details</h1>
      <div className='ListBrands'>List mention</div>
      <div className='BrandsDetails'>Details Section</div>
      <table>
        <tr>
          <th>id</th>
          <th>product_costume</th>
        </tr>
       {brandProducts.map((item) => (

          <tr>
          <th>{item.productid}</th>
          <th>{item.product_costume}</th>
          </tr>
       ))}

      </table>
    </div>
  )
}

export default Brands
