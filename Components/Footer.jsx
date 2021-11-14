import React from "react";
import {Container,Row,Col} from 'react-bootstrap'


const Footer =() => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <spam >
                                Copyright &copy; AdeshPokhrel 
                            </spam>
                        </Col>
                    </Row>
                </Container>

            </footer>
        </>    
    )
}
export default Footer;