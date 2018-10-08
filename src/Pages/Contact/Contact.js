import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact-us">

                    <div className="pre-order-content">
                        <form className="order-form" action="/v1/pre_order" method="get">
                            <div className="row">
                                <div className="col-md-6 left-border">
                                    <div className="form-panel">
                                        <div className="form-group required">
                                            <label className="control-label" htmlFor="exampleInputEmail1">Name</label>:
                                            <input type="text" className="form-control" id="exampleInputEmail1"
                                                   name="user_name" aria-describedby="emailHelp" placeholder="Your Name"
                                                   required/>
                                        </div>
                                        <div className="form-group required">
                                            <label className="control-label" htmlFor="exampleInputEmail1">Email</label>:
                                            <input type="email" className="form-control" id="exampleInputEmail1"
                                                   name="user_email" aria-describedby="emailHelp"
                                                   placeholder="example@example.com" required/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="exampleInputEmail1">Phone
                                                #:</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1"
                                                   name="user_phone" aria-describedby="emailHelp"
                                                   placeholder="Enter Phone number" onChange="validatePhoneNumber()"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="exampleTextarea">Comments:</label>
                                            <textarea className="form-control" id="exampleTextarea" name="user_comments"
                                                      rows="5"/>
                                        </div>
                                        <div className="form-group required">
                                            <label className="control-label" htmlFor="exampleInputEmail1">Coupon
                                                Code</label>:
                                            <input type="text" className="form-control" id="exampleInputEmail1"
                                                   name="user_coupon" aria-describedby="emailHelp"
                                                   placeholder="Enter coupon code" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-panel">
                                        <div className="form-group">
                                            <div className="form-group-category">Mobile Tracker</div>
                                            <div className="form-group-content">
                                                <div className="layout-row">
                                                    <div className="flex-50">
                                                        <div>
                                                            <label className="plan-check-box-label">
                                                                <input type="radio"
                                                                       name="mobile_tracker"
                                                                       value="monthly"
                                                                       checked/> Monthly
                                                                Plan</label>
                                                        </div>

                                                        <div>
                                                            <label className="plan-check-box-label">
                                                                <input type="radio"
                                                                       name="mobile_tracker"
                                                                       value="annual"/> Annual
                                                                Plan</label>
                                                        </div>

                                                    </div>
                                                    <div className="flex-50">
                                                        <div className="quantity-input-box">
                                                            <label>Quantity:</label>
                                                            <input type="number" name="mobileTrackerQuantity" min="0"
                                                                   step="1" value="0"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-group-category">GPS Tracker</div>
                                            <div className="form-group-content">
                                                <div className="layout-row">
                                                    <div className="flex-50">
                                                        <div>
                                                            <label className="plan-check-box-label">
                                                                <input type="radio"
                                                                       name="gps_tracker"
                                                                       value="monthly"
                                                                       checked/> Monthly
                                                                Plan</label>
                                                        </div>

                                                        <div>
                                                            <label className="plan-check-box-label">
                                                                <input type="radio"
                                                                       name="gps_tracker"
                                                                       value="annual"/> Annual
                                                                Plan</label>
                                                        </div>

                                                    </div>
                                                    <div className="flex-50">
                                                        <div className="quantity-input-box">
                                                            <label>Quantity:</label>
                                                            <input type="number" name="gpsTrackerQuantity" min="0"
                                                                   step="1"
                                                                   value="0"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-group-category">Baby Monitor</div>
                                            <div className="form-group-content">
                                                <div className="layout-row">
                                                    <div className="flex-50">
                                                        <div>
                                                            <label className="plan-check-box-label">
                                                                <input type="radio"
                                                                       name="baby_monitor"
                                                                       value="monthly"
                                                                       checked/> Monthly
                                                                Plan</label>
                                                        </div>

                                                        <div>
                                                            <label className="plan-check-box-label">
                                                                <input type="radio"
                                                                       name="baby_monitor"
                                                                       value="annual"/> Annual
                                                                Plan</label>
                                                        </div>

                                                    </div>
                                                    <div className="flex-50">
                                                        <div className="quantity-input-box">
                                                            <label>Quantity:</label>
                                                            <input type="number" name="babyMonitorQuantity" min="0"
                                                                   step="1"
                                                                   value="0"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group pull-right">
                                            <button className="btn btn-primary order-submit-btn" type="submit">Pre order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Pre Order</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-4">Name</div>
                                    <div className="col-md-8" id="order_username"/>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">Email</div>
                                    <div className="col-md-8" id="order_email"/>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">Phone</div>
                                    <div className="col-md-8" id="order_phone"/>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">Comments</div>
                                    <div className="col-md-8" id="order_comment"/>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">Coupon Code</div>
                                    <div className="col-md-8" id="order_coupon"/>
                                </div>
                                <div className="row">
                                    <div className="col-md">Mobile Tracker</div>
                                    <div className="col-md" id="order_mobile_plan">Monthly</div>
                                    <div className="col-md" id="order_mobile_quantity">1</div>
                                </div>
                                <div className="row">
                                    <div className="col-md">GPS Tracker</div>
                                    <div className="col-md" id="order_gps_plan">Monthly</div>
                                    <div className="col-md" id="order_gps_quantity">1</div>
                                </div>
                                <div className="row">
                                    <div className="col-md">Baby Monitor</div>
                                    <div className="col-md" id="order_baby_plan">Monthly</div>
                                    <div className="col-md" id="order_baby_quantity">1</div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" id="order-continue">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {};

export default Contact;
