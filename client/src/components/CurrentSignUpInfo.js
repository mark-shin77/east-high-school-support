import React from 'react'
import moment from 'moment'

export default function CurrentSignUpInfo(props) {
    return (
        <div>
            <div className={`selected-signup ${props.selectedSignup.signupid}`}>
                <div className="row">
                    <div className="col-7-xlarge col-12-small" style={{textAlign: 'center', margin: 'auto'}}>
                        <img src={props.selectedSignup.mainimage} alt="Signup MainImage"></img>
                    </div>
                    <div className="col-5-xlarge col-12-small" style={{ textAlign : 'center'}}>
                        <h3>{props.selectedSignup.title}</h3>
                        <h3>Location : East High School</h3>
                        <h4 style= {{letterSpacing : '1px'}}>
                            Start Date: {moment(`${props.selectedSignup.startdatestring}`).format("MM / DD / YYYY")}
                        </h4>
                        <h4 style= {{letterSpacing : '1px'}}>
                            End Date: {moment(`${props.selectedSignup.enddatestring}`).format("MM / DD / YYYY")}
                        </h4>
                        <a href={props.selectedSignup.signupurl} className="button">Sign up here!</a>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}