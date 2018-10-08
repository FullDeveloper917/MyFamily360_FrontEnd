import React, {Component} from 'react';

class Contact extends Component {

    componentDidMount() {
        this.props.changePage('contact');
    }

    render() {
        return (
            <div className="contact-us">
                <div className="contact-us-content">
                    <div>
                        <div className="comment">Questions? Need more info? Please use the contact information below
                        </div>
                        <a className="email" href="mailto:Info@aaamonitoring.com">Info@aaamonitoring.com</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
