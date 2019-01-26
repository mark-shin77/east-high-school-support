import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import CheckAvailability from './test';

const AvailableTimeSlots = (props) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Event</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Time</th>   
                    <th>Available Slot</th>
                </tr>
            </thead>
            <tbody>
            {props.availableTimeSlots.map(item => {
                return (
                        <tr>
                            <td>{item.item}</td>
                            <td>{item.location}</td>
                            <td><Moment parse="YYYY-MM-DD HH:mm" format="MM / DD / YYYY">{item.startdatestring}</Moment></td>
                            <td>
                                <Moment format="hh:mm A" unix tz="America/Salt_Lake_City">{item.startdate}</Moment> - 
                                <Moment format="hh:mm A" unix tz="America/Salt_Lake_City">{item.enddate}</Moment>
                            </td>
                            <td><CheckAvailability firstname={item.firstname} /></td>
                        </tr>
                )
            }).sort((a , b) => { return b -a })};
            </tbody>
        </table>
    );
}

export default AvailableTimeSlots;