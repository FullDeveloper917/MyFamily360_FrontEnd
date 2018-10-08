import React, {Component} from 'react';
import gps_tracker_img from '../../assets/img/gps_tracker.jpg';
import tracker_img from '../../assets/img/tracker.png';
import {Link} from "react-router-dom";

const gps_items = [
    {
        id: 0,
        key: "3G GPS tracking device with SIM (No cell phone required)",
        value: ["Parents can view their child's GPS location within 5 meter accuracy using a high-quality GPS tracking device utilizing a SIM card for Cellular location transmission."]
    },
    {
        id: 1,
        key: "View premium (enhanced) GPS location",
        value: ["Parents can view their child's GPS location within 5 meter accuracy."]
    },
    {
        id: 2,
        key: "Get location tracking history",
        value: ["Parents can view reports on their child's location history. Tracking reports are provided in simple text as well as a graphical map display."]
    },
    {
        id: 3,
        key: "Set multiple Geo-fence maps with text and email notification",
        value: ["Parents can remotely set multiple Geo-fence maps on their child’s phone and get notified via Text or Email when the child enters or leaves any of the Geo-maps."]
    },
    {
        id: 4,
        key: "SIM card and cellular data plans included",
        value: ["Basic package includes an activated SIM card with monthly data for location tracking transmission."]
    },
    {
        id: 5,
        key: "Compact and waterproof",
        value: ["GPS tracking device is compact and waterproof and can be attached to your child’s clothing or their backpack."]
    }
];

class Gps extends Component {

    componentDidMount() {
        this.props.changePage('gps');
    }

    render() {

        const gps_items_list = gps_items.map(
            (item) => (
                <div key={item.id} className="item">
                    <div className="detail-title" data-toggle="collapse"
                         data-target={"#collapse-gps-" + item.id} aria-expanded="true"
                         aria-controls={"collapse" + item.id}>
                        <span className="check-mark"/>
                        {item.key}
                    </div>
                    <div id={"collapse-gps-" + item.id} className="collapse detail-content"
                         aria-labelledby={"heading" + item.id} data-parent="#accordion_gps">
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
                                <div className="main-title">GPS Tracker</div>
                                <div className="sub-title">Parental Control</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 opposite-margin-20">
                            <div className="heading">
                                3G Cellular GPS Tracker
                            </div>
                            <div className="content" id="accordion_gps">

                                {gps_items_list}

                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tracker-image item">
                                        <img src={tracker_img} alt="tracker"/>
                                        <div className="detail-title">* SIM card & Mobile plan included</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="plan-item">
                                        <div>GPS Tracker</div>
                                        <div className="button-content">
                                            <div className="price">$95.00</div>
                                        </div>
                                        <div>(SIM included)</div>
                                        <div className="button-action">
                                            <Link className="btn btn-default blue" to="/pre_order">Pre order</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-6">
                            <div className="left-image">
                                <img src={gps_tracker_img} alt="gps tracker"/>
                            </div>

                            <div className="pull-right plan-item-list">

                                <div className="plan-item">
                                    <div>Monthly plan</div>
                                    <div className="button-content">
                                        <div className="price">$14.99</div>
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
                                        <div className="price">$12.99</div>
                                        <div className="unit hidden-md-down">
                                            Per
                                            month
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

export default Gps;
