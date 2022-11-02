import React, { useEffect } from "react";

import { useState } from "react";

import '../css/products.css';

const Products = () => {

    const [input, setInput] = useState("");
    const [itemList , setItemList] = useState([]);

    
    const addProduct =(todo)=>{
        
        //Create a new todo object
        const newTodo = {
            id: Math.floor(Math.random() * 101),
            todo : todo,
            };
    
            //add todo object to the list
            setItemList([...itemList, newTodo])
    
            //clear the input field
            setInput("");
        }
    const deleteItem =(pid)=>{
        const new_List = itemList.filter((todo) => todo.id !== pid)
        setItemList(new_List)
    }
        const toDo = itemList.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><img src={ require('../icons/Product_icon.png')} alt="" id="product_icon"/></td>
                                <td>{item.todo}</td>
                                <td>James</td>
                                <td className="action_icon"> <img src={ require('../icons/edit.png') } className="action_icon" /> | <img src={ require('../icons/trash.png')} className="action_icon" onClick={() => deleteItem(item.id)} /></td>
                            </tr>
                        )
             }) 
        
    


    return ( 
        <div className="Cart">

            <div className="table_header">
                
                <p>Shopping Cart <img src={ require('../icons/shopping-cart-add.png')}/></p>
                <div>
                    <input type="text" placeholder="add items .." onChange={(e)=>{
                        setInput(e.target.value)
                        e.preventDefault();
                    }}/>
                    <button id="addBtn"
                        onClick={() => addProduct(input)}
                    >
                    + Add New
                    </button>
                </div>
                
                
            </div>
            <div className="table-layout">
             
                <table>
                    <thead>
                       <tr> 
                            <th>No.</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Owner</th>
                            <th>Action</th>
                        </tr>     
                    </thead>

                    <tbody>
                     { toDo }
                    </tbody>
                </table>
                
            </div>
        </div>
     );
}
 
export default Products;