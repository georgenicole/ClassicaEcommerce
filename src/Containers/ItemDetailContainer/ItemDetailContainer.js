import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from '../../Components/ItemDetail/ItemDetail'
import { baseUrl } from '../../constantes'

export const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState({})
  const [error, setError] = useState("")

  useEffect(()=>{
    const getProductos = async () =>{
      try {
        const response = await fetch(`${baseUrl}/products`)
        const data = await response.json();
        console.log(data)
        // setProductDetail(data)
      } catch (error) {
        console.log(error)
        setError(error.message)
      }
    }
     getProductos();
  }, [])

  return (
     <ItemDetail product={productDetail}/>
  )
}
