import React, { useEffect } from "react";

import { useState } from "react";

import '../css/products.css';

const Products = () => {

    const [input, setInput] = useState("");
    const [prod , setProd] = useState([]);

    
    const addProduct =(todo)=>{
        
        //Create a new todo object
        const newTodo ={
            id: Math.random(),
            todo : todo
            }
    
            //add todo object to the list
            setProd([...prod, newTodo])
    
            //clear the input field
            setInput("");
        }
    
   
    


    return ( 
        <div className="Cart">

            <div className="table_header">
                
                <p>Shopping Cart <img src={ require('../icons/shopping-cart-add.png')}/></p>
                <div>
                    <input type="text" placeholder="add items .." onChange={(e)=>{
                        setInput(e.target.value)
                    }}/>
                    <button id="addBtn"
                        onClick={() => addProduct({input})}
                    >
                    + Add New
                    </button>
                </div>
                
                
            </div>
            <div className="table-layout">
             { prod.map((todo)=>{
                <table>
                    <thead>
                       <tr> 
                            <th>No.</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Owner</th>
                            <th>Action</th>
                        </tr>     
                    </thead>

                    <tbody>
                        
                        <tr>
                            <td>{todo.id}</td>
                            <td><img src={ require('../icons/Product_icon.png')} alt="" id="product_icon"/></td>
                            <td>{todo.todo}</td>
                            <td>Jamesrudwin@gmail.com</td>
                            <td>James</td>
                            <td className="action_icon"> <img src={ require('../icons/edit.png') } className="action_icon"/> | <img src={ require('../icons/trash.png')} className="action_icon" /></td>
                        </tr>
                       
                    
                    </tbody>
                </table>
                 }) }
            </div>
        </div>
     );
}
 
export default Products;