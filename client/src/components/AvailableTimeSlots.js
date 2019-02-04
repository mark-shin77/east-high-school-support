import React from 'react';
import 'moment-timezone';
import moment from 'moment';
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
                {props.availableTimeSlots.filter(date => moment(date.startdatestring).isSameOrAfter(moment())).slice( 0, 10).map(item => {
                    return (
                            <tr>
                                <td>{moment(`${item.startdatestring}`).format("MM-DD-YYYY")}</td>
                                <td>{moment(`${item.startdatestring}`).format("hh:mm A")} - {moment(`${item.enddatestring}`).format("hh:mm A")}</td>
                            </tr>
                    )
                })}
                </tbody>
            </table>
        </Fragment>
    );
}

export default AvailableTimeSlots;