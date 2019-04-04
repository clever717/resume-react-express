import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './layout/Header'
import Contents from './layout/Contents'
import Footer from './layout/Footer'

class App extends React.Component {
    render(){

        return (
            <div>
                <Header/>
                <Contents/>
                <Footer/>
            </div>
        );
    }
}

export default App;
