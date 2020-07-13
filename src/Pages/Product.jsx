import React from 'react';
import Shoe from './../Pages/Shoe.json'

const Product = ()=>{
    console.log(Shoe)
    return(

        <div className='text-center'>
            <h1>Products</h1>

            <div>
                {Object.keys(Shoe).map(KeyName=>{
                    const shoe= Shoe[KeyName];
                    return(<div key={KeyName} className='pt-5'>
                        <h2>{shoe.name}</h2>
                        <img src={shoe.img} height='500px' />
                        </div>)
                })}
            </div>
        </div>
    )
}
export default Product;