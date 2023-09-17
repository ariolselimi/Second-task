import React from 'react'
import Css from '../../index.css'

const DomainCards = ({title, price, description}) =>{
    return (
        <div className='doamin-card'>
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{description}</p>
            <button>Buy Now</button>
        </div>    
    )
}


export default DomainCards