import React, { useEffect, useState } from 'react'
import "./Styles.css"
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import Pizza from "../images/Pizza.jpg"
import BigBurguer from "../images/BigBurguer.jpg"
import TexanaBurguer from "../images/TexanaBurguer.jpg"
import DobleBurguer from "../images/DobleBurguer.jpg"
import TrancaBurguer from "../images/TrancaBurguer.webp"


const ItemListContainer = () => {

const [data, setData]= useState([])

const productos = [
  { id:'1',title: 'Tranca Burguer', price: '$1.400', image: <img src={TrancaBurguer} alt='Burguer' style={{width:250}}></img>},
  { id:'2',title: 'Texana Burguer', price: '$1.300', image: <img src={TexanaBurguer} alt='Burguer' style={{width:250, height:150}}></img> },
  { id:'3',title: 'Big Burguer', price: '$1.500', image: <img src={BigBurguer} alt='Burguer' style={{width:250, height:150}}></img>},
  { id:'4',title: 'Doble Burguer', price: '$900', image: <img src={DobleBurguer} alt='Burguer' style={{width:250, height:150}}></img>}

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