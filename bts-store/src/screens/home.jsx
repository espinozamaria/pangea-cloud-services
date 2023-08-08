import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { getIP, getRedact } from '../apiService';
import beautiful from "../assets/beautiful.jpg";
import ptd from "../assets/ptd.png";
import wings from "../assets/wings.jpg"
import Header from '../components/header';


function Home() {
    const [addToCartBtn, setAddToCartBtn] = useState(false);

    const albums = [
        {
            title: "The Most Beautiful Moment in Life Pt. 1",
            cost: 12.99,
            img: beautiful
        },
        {
            title: "WINGS",
            cost: 18.99,
            img: wings
        },
        {
            title: "Permission to Dance",
            cost: 15.99,
            img: ptd
        },
        {
            title: "Permission to Dance",
            cost: 15.99,
            img: ptd
        },
        {
            title: "Permission to Dance",
            cost: 15.99,
            img: ptd
        },
        {
            title: "Permission to Dance",
            cost: 15.99,
            img: ptd
        },
        {
            title: "Permission to Dance",
            cost: 15.99,
            img: ptd
        },
        {
            title: "Permission to Dance",
            cost: 15.99,
            img: ptd
        },
        {
            title: "Permission to Dance",
            cost: 15.99,
            img: ptd
        },
        {
            title: "Permission to Dance",
            cost: 15.99,
            img: ptd
        },
        {
            title: "Permission to Dance",
            cost: 15.99,
            img: ptd
        },
    ]

    const addToCart = (album) => {
        sessionStorage.setItem('album', JSON.stringify(album));
    }

    return (
        <div>
            <Header />
            <div className='background'>
                <Container>
                <div className='flex'>
                    <div className='home-content'>
                        {albums.map((album, index) => (
                            <div key={index} className='img-container'>
                                <div key={index} className='album-card'>
                                    <img src={album.img} className='album-photo' />
                                    <div className='centered-text'>{album.title}</div>
                                </div>
                                <div className='button' onMouseOver={() => setAddToCartBtn(index)} onMouseOut={() => setAddToCartBtn(false)} onClick={() => addToCart(album)}>
                                    <Link to="/cart" className='remove-decoration'>
                                        <div className={addToCartBtn === index ? 'add-to-cart' : 'hidden'}>
                                            Add to cart
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </Container>
            </div>
        </div>
    )
}

export default Home;