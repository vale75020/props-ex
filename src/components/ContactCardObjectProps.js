//import React from 'react';

// function ContactCardObjectProps (props) {
//     console.log(props)
//         return (
//             <div>
//                 <div className="contact-card">
//                 <img src={props.contact.imgUrl} />
//                 <h3>{props.contact.name}</h3>
//                 <p>Phone: {props.contact.phone}</p>
//                 <p>Email: {props.contact.email}</p>
//             </div>
//             </div>
//         );
//     }


// export default ContactCardObjectProps;

import React, { Component } from 'react';

class ContactCardObjectProps extends Component {
    render() {
        const { contact } = this.props
        return (
            <div>
                <div className="contact-card">
                <img  className="image" src={contact.imgUrl} />
                <h3>{contact.name}</h3>
                <p>Phone: {contact.phone}</p>
                <p>Email: {contact.email}</p>
            </div>
            </div>
        );
    }
}

export default ContactCardObjectProps;