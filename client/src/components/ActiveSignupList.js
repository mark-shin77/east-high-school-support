import React from 'react';
import moment from 'moment';

const ActiveSignupList = (props) => {
    return (
        <div>
            {props.activeSignUpResults.map(item => {
                return (
                    <div>
                        <h4 onClick={() => props.getTimeSlots(item.signupid)}>{item.title}</h4>
                        <h5><a href={item.signupurl}>Sign up here!</a></h5>
                        <p>Date :
                            {moment(`${item.startdatestring}`).format("MM-DD-YYYY")}   - 
                            {moment(`${item.enddatestring}`).format("MM-DD-YYYY")}
                        </p>
                        < hr />
                    </div>
                )
            })}
        </div>
    );
}

export default ActiveSignupList;