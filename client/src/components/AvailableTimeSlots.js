import React from 'react';
import Moment from 'react-moment';

const AvailableTimeSlots = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Available Slot</th>
                </tr>
            </thead>
            <tbody>
            {props.availableTimeSlots.map(item => {
                return (
                        <tr>
                            <td>
                                {item.startdatestring}
                               {item.enddatestring}</td>
                            <td>{item.item}</td>
                            <td>{item.status}</td>
                        </tr>
                )
            })}
            </tbody>
        </table>
    );
}

export default AvailableTimeSlots;