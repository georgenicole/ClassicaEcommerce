import React, { useEffect, useState } from 'react'
import "./Styles.css"
import ItemCount from '../Components/ItemCount/ItemCount'
import ItemList from '../Components/ItemList/ItemList'
import { baseUrl } from '../constantes'



const ItemListContainer = () => {

const [productos, setProductos]= useState([])

const getProducts = async() => {
    try {
      const response = await fetch(`${baseUrl}/products`);
      const data = await response.json();
      console.log(data);
      setProductos(data);
    } catch(error) {
       console.log('error');
       console.log(error.message);
    }}
     

  useEffect(()=>{
    getProducts();
  }, [])

  return (
    
    <div>
    
    <ItemList products={productos}/>
   
    </div>
  )
    
  }

export default ItemListContainer;

 
/*
const productos = [
  { "id":1 , "title": "Cornbread", "price": $1.400, "image": "https://images.pexels.com/photos/3850997/pexels-photo-3850997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
  { "id":2 ,"title": "Ginger Cookies", "price": $300, "image': "https://images.pexels.com/photos/6119145/pexels-photo-6119145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { "id":3 ,"title": "Chocolate Donut", "price": $500,  "image": "https://img.freepik.com/free-photo/dark-chocolate-icing-donuts-brown-background_23-2147895919.jpg?t=st=1656652653~exp=1656653253~hmac=e1310784ce6ec43aad8791a1c410d333b26f525f26b8af5dd7ad5291980dbeb2&w=1480" },
  { "id":4 ,"title": "Baguette", "price": $900, "image": "https://images.pexels.com/photos/1775039/pexels-photo-1775039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
  { "id":5 ,"title": "Chocolate Chip Cookies", "price": $450,  "image": "https://img.freepik.com/free-photo/selective-focus-shot-chocolate-chip-cookies-white-surface_181624-31895.jpg?t=st=1656652848~exp=1656653448~hmac=5e94b275df391e23705c8b67dd9329ecf2bbef04521fd9a80d6f3aaa56e615ee&w=1480"},
  { "id":"6" ,"title": "Glazed Donut", "price": $320, "image": "https://img.freepik.com/free-photo/homemade-delicious-doughnuts-dessert_144627-36752.jpg?t=st=1656653001~exp=1656653601~hmac=55b8fd2ee754b14dc2f3250b13608231e1397d011d47a26c4bd72530d7da6f7a&w=1480"},
  { "id":"7" ,"title": "Bagel", "price": $800,  "image": "https://images.pexels.com/photos/8400774/pexels-photo-8400774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  { "id":"8" ,"title": "Oatmeal Cookies", "price": $430,  "image": "https://img.freepik.com/free-photo/oat-cookies_1339-2006.jpg?t=st=1656653215~exp=1656653815~hmac=6917fe3724cd0f971a3a0afe61ce64b9379b4eac8d836d7f53e94a5f91732024&w=1480"},
  { "id":"9" ,"title": "cornbread", "price": $1.900,  "image": "https://img.freepik.com/free-photo/fresh-tasty-donuts-with-glaze_144627-880.jpg?t=st=1656648167~exp=1656648767~hmac=575a33f9dc54d77fc2fdce37ffafd61d2c2dc1e4016b2284379aa71838c9d046&w=1480"},
  { "id":"10" ,"title": "Strawberry Donuts", "price": $850,  "image": "https://images.pexels.com/photos/209196/pexels-photo-209196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  { "id":"11" ,"title": "Chocolate Cookies", "price": $510,  "image": "https://img.freepik.com/free-photo/soft-dark-chocolate-brownie-cookies-brown-background_106006-8471.jpg?w=1480" },
  { "id":"12","title": "Classic Donuts", "price": $200,  "image": "https://img.freepik.com/free-photo/two-glazed-donuts-marble_114579-46459.jpg?t=st=1656654398~exp=1656654998~hmac=919d858855faf686ef18b743b746b8c963c20bf5ca3a3cc8514113288cc0384f&w=1480"},
]*/




  
