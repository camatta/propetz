import React from 'react';

import useProduct from 'vtex.product-context/useProduct'

import "./productnamesku.css";

const ProductNameSku = () => {

  const productContext = useProduct ()
  console.log('productContext', productContext)

  const {selectedItem} = useProduct()
  const nameSku = (selectedItem?.nameComplete)

  return (
    <>
      <div className="nome-produto-completo">
        <h1>{nameSku}</h1>
      </div>
    </>
  )
}
  
export default ProductNameSku