import React, {Component} from 'react';
import logo from './assets/img/logo.png';
import './App.css';
import './App.scss';
import Mobile from "./Pages/Mobile/Mobile";
import Gps from "./Pages/Gps/Gps";
import Baby from "./Pages/Baby/Baby";
import Contact from "./Pages/Contact/Contact";

class App extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark kwch-navbar">
                    <a className="navbar-brand" href="/">
                        <img src={logo} width="30" height="30" alt=""/>
                            <div className="app-name">MyFamily360</div>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div id="navbarNavDropdown" className="navbar-collapse collapse">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-link nav-item">
                                <div>Mobile Tracker</div>
                            </li>
                            <li className="nav-link nav-item">
                                <div>GPS Tracker</div>
                            </li>
                            <li className="nav-link nav-item">
                                <div>Baby Monitor</div>
                            </li>
                            <li className="nav-link nav-item">
                                <div>Contact Us</div>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/*<Mobile/>*/}
                {/*<Gps/>*/}
                {/*<Baby/>*/}
                <Contact/>
            </div>
        );
    }
}

export default App;
