import React, { useEffect, useState } from 'react'
import "./Styles.css"
import ItemCount from '../Components/ItemCount/ItemCount'
import ItemList from '../Components/ItemList/ItemList'



const ItemListContainer = () => {

const [data, setData]= useState([])

const productos = [
  { id:'1',title: 'Piano Digital Yamaha G', price: '$1.400', image: <img className='ImageCard' src='https://bairesrocks.vteximg.com.br/arquivos/ids/236771/Guitarra_Transacustica_Tecnica-02.jpg?v=637882299477200000' alt='hola'></img> },
  { id:'2',title: 'piccolo Jupiter JPC-10', price: '$1.300', image: <img className='ImageCard' src='https://bairesrocks.vteximg.com.br/arquivos/ids/228818/Corno_Jhr7541_Tecnica_vv-copia.jpg?v=637617390070530000' alt='hola'></img> },
  { id:'3',title: 'Flugelhorn 110 Jupiter', price: '$1.500', image: <img className='ImageCard' src='https://bairesrocks.vteximg.com.br/arquivos/ids/228844/Flauta_Knighe_Tecnica-02.jpg?v=637617404614430000' alt='hola'></img> },
  { id:'4',title: 'Jupiter Traverse Flute', price: '$900', image: <img className='ImageCard' src='https://bairesrocks.vteximg.com.br/arquivos/ids/203226/697868-MLA27134791942_042018-F.jpg?v=637313064514700000' alt='Burguer' ></img>}

]

const task = new Promise ((res, rej) => {
  setTimeout(() =>{
    res(productos)
  },2000)

})

useEffect(()=>{
 
task 
.then((res=>setData(res)))
  
}, [])

console.log(data)
  
  return (
    
    <div>
    <ItemList info={data}/>
    </div>
  )
  }

export default ItemListContainer;