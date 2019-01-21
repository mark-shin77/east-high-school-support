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
                    <th>Test</th>
                    <th>Sign Up Link</th>
                </tr>
            </thead>
            {props.activeSignUpResults.map(item => {
                return (
                    <tbody>
                        <tr>
                            <td><img src={item.thumbnail} alt="Table Image" /></td>
                            <td>{item.title}</td>
                            <td><Moment parse="YYYY-MM-DD HH:mm">{item.startdatestring}</Moment></td>
                            <td><Moment locale="de">{item.enddatestring}</Moment></td>
                            <td><Moment unix>{item.startdate}</Moment></td>
                            <td>{item.signupurl}</td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    );
}

export default ActiveSignupList;