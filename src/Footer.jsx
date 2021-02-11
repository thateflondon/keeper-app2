//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
import React from 'react';

const currentYear = new Date().getFullYear();
//console.log(currentYear);

function Footer() {
    return (
        <div>
            <footer className="footer">
                <p className="p">Copyright {currentYear}</p>
            </footer>
        </div>
    );
}

export default Footer;