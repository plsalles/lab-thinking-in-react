import React from 'react';
import './ProductTable.css';

import { ProductRow } from '../../atom';



const ProductTable = (props) => {
    
    const products = props.data.data.map( (e,i) => {
        const key = `Product-Id-${i}`;
        return <ProductRow name={e.name} price={e.price} productId={key} />
    })   

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