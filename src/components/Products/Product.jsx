import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import {useAutoAnimate} from '@formkit/auto-animate/react';
import "antd/dist/antd.css";
import { Popover } from 'antd';

const Products = () => {
  const [parent] = useAutoAnimate(/* optional config */)

  const [MenuProducts, setMenuProducts] = useState(ProductsData)
  
  const filterData = (value)=> {
    const filteredData = ProductsData.filter((product) => product.type === value);
    setMenuProducts(filteredData);
  }
  
  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Feature Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
          <li onClick={()=>filterData('skin care')}>Skin Care</li>
          <li onClick={()=>filterData('conditioner')}>Conditioner</li>
          <li onClick={()=>filterData('foundation')}>Foundation</li>
        </ul>
        <div className={css.list} ref={parent}>
            
        { MenuProducts.length > 0  ? 
        <>
            { MenuProducts.map((ww, i) => (
              
                <div className={css.product}>
                  <div className="left-s">
                    <div className="name">
                      <span>{ww.name}</span>
                      <span>{ww.detail}</span>
                    </div>
                    <span>{ww.price}$</span>
                    <div>Shop Now</div>
                  </div>
                  <Popover content={<>{ww.detail}</>} title={<>{ww.name}</>}>
                    <img src={ww.img} alt="" className="img-p" />
                  </Popover>
                </div>
              
          ))}
        </> : 
        <div>No data</div> 
        }
        </div>
      </div>
    </div>
  );
};

export default Products;
