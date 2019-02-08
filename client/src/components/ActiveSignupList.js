import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ActiveSignupList = (props) => {
    return (
        <div>
            {props.activeSignUpResults.map(item => {
                return (
                    <div>
                        <Link to={`/volunteer/${item.signupid}`} 
                            onClick={function(){ 
                                props.getTimeSlots(item.signupid);

                                
                            }} 
                            className={`button active-signups ${item.signupid}`}
                            style={signUpListStyling}
                        >
                            {item.title}
                        </Link>
                        <a href={item.signupurl} className="button" style={signUpListStyling} >Sign up here!</a>
                        <p style={signUpListStyling}>Date :
                            {moment(`${item.startdatestring}`).format("MM / DD / YYYY")}   -  
                            {moment(`${item.enddatestring}`).format("MM / DD / YYYY")}
                        </p>
                        < hr style={signUpListStyling}/>
                    </div>
                )
            })}
        </div>
    );
}

const signUpListStyling = {
    marginTop : '4px',
    marginBottom :'4px',
    marginRight : 'auto',
    marginLeft : 'auto',
    textAlign : 'center'
}

export default ActiveSignupList;