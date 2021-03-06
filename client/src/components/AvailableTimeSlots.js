import React from 'react';
import 'moment-timezone';
import moment from 'moment';
import "../assets/css/main.css";
import "../assets/css/font-awesome.min.css";
import { Fragment } from 'react';

const AvailableTimeSlots = (props) => {
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th style={tableStyling} >Date</th>
                        <th style={tableStyling} >Time</th>
                    </tr>
                </thead>
                <tbody>
                {props.availableTimeSlots.filter(date => moment(date.startdatestring).isSameOrAfter(moment())).slice( 0, 10).map(item => {
                    return (
                            <tr>
                                <td style={tableStyling} >{moment(`${item.startdatestring}`).format("MM-DD-YYYY")}</td>
                                <td style={tableStyling} >{moment(`${item.startdatestring}`).format("hh:mm A")} - {moment(`${item.enddatestring}`).format("hh:mm A")}</td>
                            </tr>
                    )
                })}
                </tbody>
            </table>
        </Fragment>
    );
}

const tableStyling = {
    letterSpacing: '2px',
    textAlign: 'center',
}

export default AvailableTimeSlots;