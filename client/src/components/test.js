import React from 'react';

const CheckAvailability = props => {
    if (props.status === "") {
        return "Time Available!"
    } else {
        return "Slot Filled!"
    }
}

export default CheckAvailability;