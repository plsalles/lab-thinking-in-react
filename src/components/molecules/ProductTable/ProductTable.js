import React from 'react';
import './ProductTable.css';

import { ProductRow } from '../../atom';



const ProductTable = (props) => {
    let products = [];
    const stockOnlyProducts = props.data.filter(product => {
        return product.stocked;
    }) 
    
    if(props.stockOnly){
        products = stockOnlyProducts.map( (e,i) => {
            const key = `Product-Id-${i}`;
            return <ProductRow name={e.name} price={e.price} key={key} />
        })   

    } else {
        products = props.data.map( (e,i) => {
            const key = `Product-Id-${i}`;
            return <ProductRow name={e.name} price={e.price} key={key} />
        })  
    }



    return (
      <div>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                { products }
            </tbody>
        </table>
      </div>
    );
}

export default ProductTable;