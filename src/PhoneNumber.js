import React from 'react';
import FadeIn from 'react-fade-in';

const PhoneNumber = (props) => {
    return (
        <FadeIn>
            <div className={"phone-number-text"}>
                {props.number}
            </div>
        </FadeIn>
    )
}

export default PhoneNumber;