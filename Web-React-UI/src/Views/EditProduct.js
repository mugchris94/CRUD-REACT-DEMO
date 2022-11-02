import React from 'react';
import { useState, useEffect } from React;


const EditProduct = (props) => {
    return ( 
        <div className="editProd">
            <form>
                <label>New Product Name</label>
                <input type="text" placeholder='new Product'/>
                <textarea name='comments' rows="5" color='50'>
                    ..Enter comment here
                </textarea>

                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default EditProduct;