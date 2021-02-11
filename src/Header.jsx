//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
import React from 'react';

function Header() {
    return (
        <div>
            <header className="header">
                <h1 className="h1">Keeper</h1>
            </header>
        </div>


    );
}

export default Header;