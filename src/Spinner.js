import React from 'react';

const Spinner = props => {
    return (
        <div class="ui active dimmer">
            <div class="ui text loader">{props.message }</div>
        </div>
    );
}

// This object provides default values if it cannot find it in the props
Spinner.defaultProps = {
    message: 'Loading...'
}


export default Spinner;