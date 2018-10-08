import React, {Component} from 'react';
import mobile_tracker_img from '../../assets/img/mobile_tracker.jpg';
import PropTypes from 'prop-types';

const mobile_free_items = [
    {
        key: "Schedule phone use",
        value: ["Remotely schedule when child phone is open", "Remotely view how long child phone will work before it locks."]
    },
    {
        key: "View Apps used",
        value: ["View report of Apps played by child with Time/Date."]
    },
    {
        key: "View websites visited",
        value: ["View report of all websites visited by child with Time/Date."]
    },
    {
        key: "Block child phone",
        value: ["Block child phone immediately."]
    },
];

const mobile_items = [
    {
        key: "Block websites visited",
        value: ["Blocks access to selected websites from child phone."]
    },
    {
        key: "Block Apps used",
        value: ["Blocks access to selected All from child phone."]
    },
    {
        key: "View GPS location",
        value: ["Parents can view live their child's GPS location."]
    },
    {
        key: "Get location tracking history & report",
        value: ["Parents can view reports on their child's location history. Tracking reports are provided in simple text as well as a graphical map display."]
    },
    {
        key: "Set multiple Geo-fence maps",
        value: ["Parents can remotely set multiple Geo-fence maps on their child’s phone and get notified via Text or Email when the child enters or leaves any of the Geo-maps."]
    },
    {
        key: "Text and email notification",
        value: ["Text and email notification"]
    },
    {
        key: "Remotely activate & view child camera",
        value: ["Parents can remotely activate their child’s phone camera and view from their phone to ensure safety"]
    },
    {
        key: "Remotely activate & hear child microphone",
        value: ["Parents can remotely activate their child’s phone microphone and listen from their phone to ensure safety."]
    },
    {
        key: "PING your child phone to ensure safety",
        value: ["Parents send a PING message to child phone", "Child phone will display PING message", "Child phone will lock up until the child selects"]
    },
];

class Mobile extends Component {

    render() {

        const mobile_free_items_list = mobile_free_items.map(
            (item) => (
                <div className="item free">
                    <div className="detail-title" data-toggle="collapse"
                         data-target="#collapse-mobile-free-<?php echo $key; ?>" aria-expanded="true"
                         aria-controls="collapse<?php echo $key;?>">
                        <span className="check-mark-blue"/>
                        {item.key}
                    </div>
                    <div id="collapse-mobile-free-<?php echo $key; ?>" className="collapse detail-content"
                         aria-labelledby="heading<?php echo $key; ?>" data-parent="#accordion">
                        {item.value.forEach((v) => (<div>v</div>))}
                    </div>
                </div>
            )
        );

        const mobile_items_list = mobile_items.map(
            (item) => (
                <div className="item">
                    <div className="detail-title" data-toggle="collapse"
                         data-target="#collapse-mobile-<?php echo $key; ?>" aria-expanded="true"
                         aria-controls="collapse<?php echo $key;?>">
                        <span className="check-mark"/>
                        {item.key}
                    </div>
                    <div id="collapse-mobile-<?php echo $key; ?>" className="collapse detail-content"
                         aria-labelledby="heading<?php echo $key; ?>" data-parent="#accordion">
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
                                        <a href="/" className="btn btn-default orange">
                                            Pre order
                                        </a>
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
                                        <a href="/" className="btn btn-default orange">
                                            Pre order
                                        </a>
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

Mobile.propTypes = {};

export default Mobile;
