import React from 'react'
import HeaderPage from '../components/Header'
import Products from '../components/Products'
import { useState } from 'react'


const Pro = () => {
  const [items ,setItems]=useState(0)
  return (
    <div>
       <HeaderPage items={items}/>
      <Products items={items} setItems={setItems}/>
    </div>
  )
}

export default Pro
