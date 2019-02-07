import React from 'react'

export default function CurrentSignUpInfo(props) {
    return (
        <div>
            {props.selectedSignup.map( item =>
                <div className={`selected-signup ${item.signupid}`}>
                    <div className="row">
                        <div className="col-6">
                            <img src={item.mainimage} alt="Signup MainImage"></img>
                        </div>
                        <div className="col-6">
                            <h3>{item.title}</h3>
                            <a href={item.signupurl} className="button">Sign up here!</a>
                        </div>
                    </div>
                    < hr/>
                </div>
            )}
        </div>
    )
}
