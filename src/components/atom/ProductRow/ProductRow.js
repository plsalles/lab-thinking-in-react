import React from 'react';
import './ProductRow.css';


function ProductRow (props){

    return (
      <>
        <tr key={props.productId}>
            <td>{ props.name }</td>
            <td>{ props.price }</td>
        </tr>
      </>
    );
}

export default ProductRow;