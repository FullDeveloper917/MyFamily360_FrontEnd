import React, {Component} from 'react';
import baby_monitor_img from '../../assets/img/baby_monitor.png';
import PropTypes from 'prop-types';

const baby_items = [
    {
        key: "24/7 monitoring with cloud storage",
        value: [" · Live video streaming in HD quality", " · Each incidence of sound (baby crying) or motion detection will automatically", "&emsp;&emsp; · Send a snapshot picture to parents phone", "&emsp;&emsp; · start a 60 second video streaming and storage in cloud.", "&emsp;&emsp; · Create a cloud-based catalogue of images and video clips with time & date stamp that can easily be viewed by parents remotely"]
    },
    {
        key: "24/7 Text & email notifications",
        value: [" · Text and email notifications are sent to parent's hone when child is crying or motion is detected in baby’s room"]
    },
    {
        key: "1080 Camera",
        value: [" · High definition 2 Mega pixel 1080 camera."]
    },
    {
        key: "Motion sensor and night vision",
        value: [" · IP camera provides a high quality motion sensor as well as night vision recording."]
    },
    {
        key: "Advanced zoom",
        value: [" · IP Camera Is motorized for wider viewing option and provides advanced zoom capability."]
    },
    {
        key: "2-Way voice",
        value: [" · IP Camera provides 2-way voice allowing the parents to hear their child as well as talking back."]
    },
];

class Baby extends Component {

    render() {
        const baby_items_list = baby_items.map(
            (item) => (

                <div className="item">
                    <div className="detail-title" data-toggle="collapse"
                         data-target="#collapse-baby-<?php echo $key; ?>" aria-expanded="true"
                         aria-controls="collapse<?php echo $key;?>">
                        <span className="check-mark"/>
                        {item.key}
                    </div>
                    <div id="collapse-baby-<?php echo $key; ?>" className="collapse detail-content"
                         aria-labelledby="heading<?php echo $key; ?>" data-parent="#accordion-baby">
                        {item.value.forEach((v) => (<div>v</div>))}
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
                                        <a href="/" className="btn btn-default blue">Pre order</a>
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
                                        <a href="/" className="btn btn-default orange">Pre order</a>
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
                                        <a href="/" className="btn btn-default orange">Pre order</a>
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

Baby.propTypes = {};

export default Baby;
