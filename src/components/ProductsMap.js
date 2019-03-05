import React from 'react';
import products from './products';
import Product from './Product'

const ProductsMap = () => {

    const productComponents = products.map(item => <Product key={item.id} product={item} />)
    return (
        <div>
            {productComponents}
        </div>
    );
};

export default ProductsMap;