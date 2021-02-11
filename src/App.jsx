//2. Create a App.jsx component.
import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
    return (
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

export default App;
export { Header, Note, Footer };