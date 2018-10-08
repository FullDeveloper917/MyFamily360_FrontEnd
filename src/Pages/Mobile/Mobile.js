import React, {Component} from 'react';
import mobile_tracker_img from '../../assets/img/mobile_tracker.jpg';
import {Link} from "react-router-dom";

const mobile_free_items = [
    {
        id: 0,
        key: "Schedule phone use",
        value: ["Remotely schedule when child phone is open", "Remotely view how long child phone will work before it locks."]
    },
    {
        id: 1,
        key: "View Apps used",
        value: ["View report of Apps played by child with Time/Date."]
    },
    {
        id: 2,
        key: "View websites visited",
        value: ["View report of all websites visited by child with Time/Date."]
    },
    {
        id: 3,
        key: "Block child phone",
        value: ["Block child phone immediately."]
    },
];

const mobile_items = [
    {
        id: 0,
        key: "Block websites visited",
        value: ["Blocks access to selected websites from child phone."]
    },
    {
        id: 1,
        key: "Block Apps used",
        value: ["Blocks access to selected All from child phone."]
    },
    {
        id: 2,
        key: "View GPS location",
        value: ["Parents can view live their child's GPS location."]
    },
    {
        id: 3,
        key: "Get location tracking history & report",
        value: ["Parents can view reports on their child's location history. Tracking reports are provided in simple text as well as a graphical map display."]
    },
    {
        id: 4,
        key: "Set multiple Geo-fence maps",
        value: ["Parents can remotely set multiple Geo-fence maps on their child’s phone and get notified via Text or Email when the child enters or leaves any of the Geo-maps."]
    },
    {
        id: 5,
        key: "Text and email notification",
        value: ["Text and email notification"]
    },
    {
        id: 6,
        key: "Remotely activate & view child camera",
        value: ["Parents can remotely activate their child’s phone camera and view from their phone to ensure safety"]
    },
    {
        id: 7,
        key: "Remotely activate & hear child microphone",
        value: ["Parents can remotely activate their child’s phone microphone and listen from their phone to ensure safety."]
    },
    {
        id: 8,
        key: "PING your child phone to ensure safety",
        value: ["Parents send a PING message to child phone", "Child phone will display PING message", "Child phone will lock up until the child selects"]
    },
];

class Mobile extends Component {

    componentDidMount() {
        this.props.changePage('mobile');
    }

    render() {

        const mobile_free_items_list = mobile_free_items.map(
            (item) => (
                <div key={item.id} className="item free">
                    <div className="detail-title" data-toggle="collapse"
                         data-target={"#collapse-mobile-free-" + item.id} aria-expanded="true"
                         aria-controls={"collapse" + item.id}>
                        <span className="check-mark-blue"/>
                        {item.key}
                    </div>
                    <div id={"collapse-mobile-free-" + item.id} className="collapse detail-content"
                         aria-labelledby={"heading" + item.id} data-parent="#accordion">
                        {item.value.map((v) => <div> · {v}</div>)}
                    </div>
                </div>
            )
        );

        const mobile_items_list = mobile_items.map(
            (item) => (
                <div key={item.id} className="item">
                    <div className="detail-title" data-toggle="collapse"
                         data-target={"#collapse-mobile-" + item.id} aria-expanded="true"
                         aria-controls={"collapse" + item.id}>
                        <span className="check-mark"/>
                        {item.key}
                    </div>
                    <div id={"collapse-mobile-" + item.id} className="collapse detail-content"
                         aria-labelledby={"heading" + item.id} data-parent="#accordion">
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
                                <div className="main-title">Mobile Tracker</div>
                                <div className="sub-title">Parental Control</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 opposite-margin-20">
                            <div className="heading">
                                Remotely Manage Your Child’s Phone
                            </div>
                            <div className="content" id="accordion">

                                {mobile_free_items_list}

                                <div className="item text-more-dot"> · · ·</div>

                                {mobile_items_list}

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="left-image">
                                <img src={mobile_tracker_img} alt="mobile tracker"/>
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

export default Mobile;
