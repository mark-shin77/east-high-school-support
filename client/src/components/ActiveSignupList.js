import React, { Fragment }  from 'react';

const ActiveSignupList = (props) => {
    return (
        <div style={{ textAlign : 'center' }} >
            {props.activeSignUpResults.map(item => {
                return (
                    <Fragment>
                        <div 
                            onClick={() => { 
                                props.getTimeSlots(item.signupid);
                                props.selectedSignup(item.signupid);                               
                            }} 
                            className={'button active-signups'}
                            >
                                {item.title}
                        </div>
                        < hr style={{ margin: '2em 0'}}/>
                    </Fragment>
                )
            })}
        </div>
    );
}

export default ActiveSignupList;