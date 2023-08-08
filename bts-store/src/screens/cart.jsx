import React, { useState, useEffect } from 'react';
import Header from "../components/header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Cart() {
    let cart = JSON.parse(sessionStorage.getItem('album'));

    const showPrice = (price) => {
        let location = sessionStorage.getItem('location');
        if (['LA', 'NYC'].includes(location)) {
            return price;
        } else if (location === 'Mex') {
            return (price * 10).toFixed(2);
        } else if (location === 'Canada') {
            return price + 2;
        }
    }

    return (
        <div>
            <Header />
            <div className="center-header-text">
                Cart Details
            </div>
            <div className="background" style={{ paddingTop: 20 }}>
                <Container>
                    <Row></Row>
                    <Row>
                        <Col sm={2} />
                        <Col med={4} className='bold-font'>Title</Col>
                        <Col sm={4} className='bold-font'>Price</Col>
                    </Row>
                    <Row>
                        <Col sm={2} />
                        <Col med={4}>{cart.title}</Col>
                        <Col sm={4}>{showPrice(cart.cost)}</Col>
                    </Row>
                    <Row style={{ paddingTop: 10 }}></Row>
                    <Link to="/payment">
                        <div className='button remove-decoration'>
                            <div className='checkout'>Pay Now</div>
                        </div>
                    </Link>
                </Container>
            </div>
        </div>
    )
}

export default Cart;