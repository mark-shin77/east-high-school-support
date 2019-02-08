import React from 'react'
import moment from 'moment'

export default function CurrentSignUpInfo(props) {
    return (
        <div>
            <div className={`selected-signup ${props.selectedSignup.signupid}`}>
                <div className="row">
                    <div className="col-7">
                        <img src={props.selectedSignup.mainimage} alt="Signup MainImage"></img>
                    </div>
                    <div className="col-5" style={{ textAlign : 'center'}}>
                        <h3>{props.selectedSignup.title}</h3>
                        <h4>Location : East High School</h4>
                        <h5 style= {{letterSpacing : '1px'}}>
                            Start Date: {moment(`${props.selectedSignup.startdatestring}`).format("MM / DD / YYYY")}
                        </h5>
                        <h5 style= {{letterSpacing : '1px'}}>
                            End Date: {moment(`${props.selectedSignup.enddatestring}`).format("MM / DD / YYYY")}
                        </h5>
                        <a href={props.selectedSignup.signupurl} className="button">Sign up here!</a>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}