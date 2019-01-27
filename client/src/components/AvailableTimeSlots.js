import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import CheckAvailability from './test';
import "../assets/css/main.css";
import "../assets/css/font-awesome.min.css";
import { Fragment } from 'react';

const AvailableTimeSlots = (props) => {
    return (
        <Fragment>
            <div className="row eventinfo">
                <h4 className="col-6 col-12-xsmall">Event : {props.availableTimeSlots[0].item}</h4>
                <h4 className="col-6 col-12-xsmall">Event Location : {props.availableTimeSlots[0].location}</h4>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>   
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                {props.availableTimeSlots.map(item => {
                    return (
                            <tr>
                                <td><Moment parse="YYYY-MM-DD HH:mm" format="MM / DD / YYYY">{item.startdatestring}</Moment></td>
                                <td>
                                    <Moment format="hh:mm A" unix tz="America/Denver">{item.startdate}</Moment> - 
                                    <Moment format="hh:mm A" unix tz="America/Denver">{item.enddate}</Moment>
                                </td>
                                <td><CheckAvailability firstname={item.firstname} /></td>
                            </tr>
                    )
                }).sort((a , b) => { return b -a })};
                </tbody>
            </table>
        </Fragment>
    );
}

export default AvailableTimeSlots;