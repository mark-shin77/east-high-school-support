import React from 'react';
import Moment from 'react-moment';

const ActiveSignupList = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Start Date</th>
                    <th>End Date </th>
                    <th>Sign Up Link</th>
                </tr>
            </thead>
            {props.activeSignUpResults.map(item => {
                return (
                    <tbody>
                        <tr>
                            <td><img src={item.thumbnail} alt="Table Image" /></td>
                            <td>{item.title}</td>
                            <td><Moment format="MM / DD / YYYY">{item.startdatestring}</Moment></td>
                            <td><Moment format="MM / DD / YYYY">{item.enddatestring}</Moment></td>
                            <td>{item.signupurl}</td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    );
}

export default ActiveSignupList;