import React, { useEffect, useState } from 'react'
import "./Styles.css"
import ItemCount from '../Components/ItemCount/ItemCount'
import ItemList from '../Components/ItemList/ItemList'



const ItemListContainer = () => {

const [data, setData]= useState([])

const productos = [
  { id:'1',title: 'cornbread', price: '$1.400', image: <img className='ImageCard' src='https://images.pexels.com/photos/3850997/pexels-photo-3850997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Cornbread'></img> },
  { id:'2',title: 'Baguette', price: '$1.300', image: <img className='ImageCard' src='https://images.pexels.com/photos/1775039/pexels-photo-1775039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Baguette'></img> },
  { id:'3',title: 'Bagel', price: '$1.500', image: <img className='ImageCard' src='https://images.pexels.com/photos/8400774/pexels-photo-8400774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Bagel'></img> },
  { id:'4',title: 'Birote', price: '$900', image: <img className='ImageCard' src='https://images.pexels.com/photos/209196/pexels-photo-209196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Birote' ></img>},
  { id:'5',title: 'cornbread', price: '$1.900', image: <img className='ImageCard' src='https://images.pexels.com/photos/3850997/pexels-photo-3850997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Cornbread'></img> },
  { id:'6',title: 'Baguette', price: '$1.000', image: <img className='ImageCard' src='https://images.pexels.com/photos/1775039/pexels-photo-1775039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Baguette'></img> },
  { id:'7',title: 'Bagel', price: '$1.800', image: <img className='ImageCard' src='https://images.pexels.com/photos/8400774/pexels-photo-8400774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Bagel'></img> },
  { id:'8',title: 'Birote', price: '$800', image: <img className='ImageCard' src='https://images.pexels.com/photos/209196/pexels-photo-209196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Birote' ></img>},

  
  
  

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