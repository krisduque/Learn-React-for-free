import React from "react"

function Product(props){
    console.log(props)
    return(
        <div>
        <h3>{props.name} - ${props.price}</h3>
        <p>{props.description}</p>
        </div>
    )
}

export default Product