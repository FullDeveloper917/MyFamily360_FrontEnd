import React, {Component} from 'react';
import logo from './assets/img/logo.png';
import './App.css';
import './App.scss';
import Mobile from "./Pages/Mobile/Mobile";
import Gps from "./Pages/Gps/Gps";
import Baby from "./Pages/Baby/Baby";
import Contact from "./Pages/Contact/Contact";
import {Link, Route} from "react-router-dom";
import PreOrder from "./Pages/PreOrder/PreOrder";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: ''
        }
    }

    changePage = (page) => {
        this.setState({
            page: page
        })
    };

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
                            <li className={"nav-item " + (this.state.page === 'mobile' ? 'active' : '')}>
                                <Link className="nav-link" to="/mobile">
                                    <div>Mobile Tracker</div>
                                </Link>
                            </li>
                            <li className={"nav-item " + (this.state.page === 'gps' ? 'active' : '')}>
                                <Link className="nav-link" to="/gps">
                                    <div>GPS Tracker</div>
                                </Link>
                            </li>
                            <li className={"nav-item " + (this.state.page === 'baby' ? 'active' : '')}>
                                <Link className="nav-link" to="/baby">
                                    <div>Baby Monitor</div>
                                </Link>
                            </li>
                            <li className={"nav-item " + (this.state.page === 'contact' ? 'active' : '')}>
                                <Link className="nav-link" to="/contact">
                                    <div>Contact Us</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Route exact path="/" render={() => <Mobile changePage={this.changePage}/>}/>
                <Route path="/mobile" render={() => <Mobile changePage={this.changePage}/>}/>
                <Route path="/gps" render={() => <Gps changePage={this.changePage}/>}/>
                <Route path="/baby" render={() => <Baby changePage={this.changePage}/>}/>
                <Route path="/pre_order" render={() => <PreOrder changePage={this.changePage}/>}/>
                <Route path="/contact" render={() => <Contact changePage={this.changePage}/>}/>
            </div>
        );
    }
}

export default App;
