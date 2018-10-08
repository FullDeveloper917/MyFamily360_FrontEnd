import React, {Component} from 'react';
import baby_monitor_img from '../../assets/img/baby_monitor.png';
import {Link} from "react-router-dom";

const baby_items = [
    {
        id: 0,
        key: "24/7 monitoring with cloud storage",
        value: ["Live video streaming in HD quality", "Each incidence of sound (baby crying) or motion detection will automatically", "Send a snapshot picture to parents phone", "start a 60 second video streaming and storage in cloud.", "Create a cloud-based catalogue of images and video clips with time & date stamp that can easily be viewed by parents remotely"]
    },
    {
        id: 1,
        key: "24/7 Text & email notifications",
        value: ["Text and email notifications are sent to parent's hone when child is crying or motion is detected in baby’s room"]
    },
    {
        id: 2,
        key: "1080 Camera",
        value: ["High definition 2 Mega pixel 1080 camera."]
    },
    {
        id: 3,
        key: "Motion sensor and night vision",
        value: ["IP camera provides a high quality motion sensor as well as night vision recording."]
    },
    {
        id: 4,
        key: "Advanced zoom",
        value: ["IP Camera Is motorized for wider viewing option and provides advanced zoom capability."]
    },
    {
        id: 5,
        key: "2-Way voice",
        value: ["IP Camera provides 2-way voice allowing the parents to hear their child as well as talking back."]
    },
];

class Baby extends Component {

    componentDidMount() {
        this.props.changePage('baby');
    }

    render() {
        const baby_items_list = baby_items.map(
            (item) => (
                <div key={item.id} className="item">
                    <div className="detail-title" data-toggle="collapse"
                         data-target={"#collapse-baby-" + item.id} aria-expanded="true"
                         aria-controls={"collapse" + item.id}>
                        <span className="check-mark"/>
                        {item.key}
                    </div>
                    <div id={"collapse-baby-" + item.id} className="collapse detail-content"
                         aria-labelledby={"heading" + item.id} data-parent="#accordion-baby">
                        {item.value.map((v) => <div> · {v}</div>)}
                    </div>
                </div>
            )
        );

        return (
            <div className="carousel">
                <div className="carousel-cell">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title pull-right">
                                <div className="main-title">Baby Monitor</div>
                                <div className="sub-title">Parental Control</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 opposite-margin-20">
                            <div className="heading">
                                High DEF 2.0 Mega Pixel Wi-Fi Camera
                            </div>
                            <div className="content" id="accordion-baby">

                                {baby_items_list}

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="left-image">
                                <div className="plan-item left-buy-item">
                                    <div>IP Camera</div>
                                    <div className="button-content">
                                        <div className="price">$59.99</div>
                                    </div>
                                    <div className="hidden-md-up"> &nbsp;</div>
                                    <div className="button-action">
                                        <Link className="btn btn-default blue" to="/pre_order">Pre order</Link>
                                    </div>
                                </div>
                                <img src={baby_monitor_img} alt="baby monitor"/>
                            </div>
                            <div className="pull-right plan-item-list">

                                <div className="plan-item">
                                    <div>Monthly plan</div>
                                    <div className="button-content">
                                        <div className="price">$9.99</div>
                                        <div className="unit hidden-md-down">
                                            Per month
                                        </div>
                                    </div>
                                    <div className="hidden-md-up">Per month</div>
                                    <div className="button-action">
                                        <Link className="btn btn-default orange" to="/pre_order">Pre order</Link>
                                    </div>
                                </div>

                                <div className="plan-item">
                                    <div>Annual plan</div>
                                    <div className="button-content">
                                        <div className="price">$7.99</div>
                                        <div className="unit hidden-md-down">
                                            Per month
                                        </div>
                                    </div>
                                    <div className="hidden-md-up">Per month</div>
                                    <div className="button-action">
                                        <Link className="btn btn-default orange" to="/pre_order">Pre order</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Baby;
