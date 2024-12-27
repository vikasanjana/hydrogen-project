import React from 'react'

const ProductTitle = ({ title ,styles}) => {
    return (
        <h4 className='product-title' styles={styles}>{title}</h4>
    )
}

export default ProductTitle
