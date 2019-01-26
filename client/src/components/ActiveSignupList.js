import React from 'react';
import Moment from 'react-moment';

const ActiveSignupList = (props) => {
    return (
        <div>
            {props.activeSignUpResults.map(item => {
                return (
                    <div>
                        <h4 onClick={() => props.getTimeSlots(item.signupid)}>{item.title}</h4>
                        <h5><a href={item.signupurl}>Sign up here!</a></h5>
                        <p>Date :
                            <Moment format="MM / DD / YYYY">{item.startdatestring}</Moment>       -
                            <Moment format="MM / DD / YYYY">{item.enddatestring}</Moment>
                        </p>
                        < hr />
                    </div>
                )
            })}
        </div>
    );
}

export default ActiveSignupList;