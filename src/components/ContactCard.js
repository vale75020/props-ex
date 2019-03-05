import React, { Component } from 'react';

class ContactCard extends Component {
    render() {
        const { name, imgUrl, email, phone } = this.props
        return (
            <div className="contact-card">
                <img className="image" src={imgUrl} />
                <h3>{name}</h3>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
            </div>
        );
    }
}

export default ContactCard;

/*
function addNumber(a, b) {
    return a + b
} */