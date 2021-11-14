import React from "react";
import {Card} from 'react-bootstrap';


const ProductScreen = ({item}) => {
    return (
        <>
        <Card className="my-3 p-3 rounded">
        <a href={`/item/${item.id}`}>
            <Card.Img src={item.image} varient="top"/>
        </a>
        <Card.Body>
            <a href={`/item/${item.id}`}>
                <Card.Title as="div">
                    <strong>{item.name} </strong>
                </Card.Title>
            </a>
        </Card.Body>
        </Card>
            
        </>

    )
}
export default ProductScreen;