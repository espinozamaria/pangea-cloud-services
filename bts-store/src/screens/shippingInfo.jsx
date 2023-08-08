import React, { useState, useEffect } from 'react';
import Header from "../components/header";
import Container from 'react-bootstrap/Container';
import { getIP, getRedact } from '../apiService';


function Payment() {
    const [phone, setPhone] = useState('');
    const [card, setCard] = useState('');

    const redactInfo = (text, type) => {
        getRedact(text).then((response) => {
            let redacted = response.redacted_text.replace(/['"]+/g, '');
            type === 'card' ? setCard(redacted) : setPhone(redacted);
        });
    }

    const updateText = (text, type) => {
        type === 'card' ? setCard(text) : setPhone(text);
    }

    return (
        <div>
            <Header />
            <div className="center-header-text">
                Payment Info
            </div>
            <div className="background" style={{ paddingTop: 20 }}>
                <Container>
                    <form onSubmit={() => console.log('formmmm')}>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Phone:
                            <input 
                                type="text" 
                                name="phone" 
                                value={phone}
                                onBlur={(text) => {console.log('text', text.target.value); redactInfo(text.target.value, 'phone')}}
                                onChange={(text) => updateText(text.target.value, 'phone')}
                            />
                        </label>
                        <label>
                            Address:
                            <input type="text" name="address" />
                        </label>
                        <label>
                            Card Number:
                            <input 
                                type="text"
                                name="card"
                                value={card}
                                onBlur={(text) => {console.log('text', text.target.value); redactInfo(text.target.value, 'card') } } 
                                onChange={(text) => updateText(text.target.value, 'card')}
                            />
                        </label>
                        <input type="submit" className='button' />
                    </form>
                </Container>
            </div>
        </div>
    )
}

export default Payment;