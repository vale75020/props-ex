import React, { Component } from 'react';
import ContactCard from './ContactCard'
import ContactCardObjectProps from './ContactCardObjectProps'

class Contacts extends Component {
    render() {
        return (
            <div className="contacts">
                <ContactCardObjectProps
                    contact={{
                        name: "Alice",
                        imgUrl: "https://culturebox.francetvinfo.fr/sites/default/files/styles/article_view_full_main_image/public/assets/images/2016/08/000_br5qp.jpg?itok=j1-PTe3B",
                        phone: "01234567",
                        email: "alice@gmail.com"
                    }}
                // name="Alice" 
                // imgUrl="https://culturebox.francetvinfo.fr/sites/default/files/styles/article_view_full_main_image/public/assets/images/2016/08/000_br5qp.jpg?itok=j1-PTe3B"
                // phone="01234567"
                // email="alice@gmail.com"
                />
                <ContactCard
                    name="Jimi"
                    imgUrl="https://www.ouifm.fr/wp-content/uploads/2012/07/jimi-hendrix.jpg"
                    phone="01234567"
                    email="jimi@gmail.com"
                />
                <ContactCard
                    name="Axl"
                    imgUrl="https://img.aws.la-croix.com/2016/05/08/1300758457/Le-chanteur-americain-Guns-N-Roses-Axl-Rose-produit-pour-premiere-fois-avec-groupe-hard-rock-australien-AC-DC-remplacement-Brian-Johnson-victime-problemes-audition-Lisbonne-7-2016_0_730_485.jpg"
                    phone="01234567"
                    email="axl@gmail.com"
                />
                <ContactCard
                    name="Brian"
                    imgUrl="https://media.gettyimages.com/photos/musician-brian-johnson-of-acdc-performs-onstage-during-day-1-of-the-picture-id469282014"
                    phone="01234567"
                    email="brian@gmail.com"
                />
            </div>

        );
    }
}

export default Contacts;

