import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const ActiveSignupList = (props) => {
    return (
        <div>
            {props.activeSignUpResults.map(item => {
                return (
                    <div>
                        <Link to={`/volunteer/${item.signupid}`} params={{id: item.signupid}} ><h4>{item.title}</h4></Link>
                        <h5><a href={item.signupurl}>Sign up here!</a></h5>
                        <p>Date :
                            <Moment format="MM / DD / YYYY">{item.startdatestring}</Moment>       -       
                            <Moment format="MM / DD / YYYY">{item.enddatestring}</Moment>
                        </p>
                        < hr/>
                    </div>
                    )
            })}
        </div>
    );
            }

export default ActiveSignupList;