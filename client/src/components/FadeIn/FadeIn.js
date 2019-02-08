import React from 'react'
import AvailableTimeSlots from '../AvailableTimeSlots';
import CurrentSignUpInfo from '../CurrentSignUpInfo';
import { Spring } from 'react-spring';

export default function FadeIn(parentProps) {
    
    return (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1000 }}>
            {props => (
                <div style={props}>
                    <CurrentSignUpInfo selectedSignup={parentProps.selectedSignup} />
                    <AvailableTimeSlots availableTimeSlots={parentProps.availableTimeSlots}/>
                </div>
            )}
        </Spring>
    )
}