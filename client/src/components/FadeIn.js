import React from 'react'
import AvailableTimeSlots from './AvailableTimeSlots';
import { Spring } from 'react-spring';

export default function FadeIn(parentProps) {
    
    return (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1000 }}>
            {props => (
                <div style={props}>
                    <AvailableTimeSlots availableTimeSlots={parentProps.availableTimeSlots}/>
                </div>
            )}
        </Spring>
    )
}