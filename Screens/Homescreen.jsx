import React from "react";
import Products from "../products";
import {Row,Col} from 'react-bootstrap';
import ProductScreen from "./Productscreen";





const Homescreen = () => {
    return (
        <>
            <Row>
                {
                    Products.map((item)=>{
                        return(
                            <Col>
                                <ProductScreen item={item}/>
                                {/* <h3>{item.name}</h3> */}
                            </Col>
                        )
                    })
                }
            </Row>
        </>
                
    )
};
export default Homescreen;