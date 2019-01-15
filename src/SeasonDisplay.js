import React from 'react';
import './SeasonDisplay.css'

const getSeason = (lat, month) => {

    if (month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';
    }else{
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const seasonConfig = {
    Summer: {text: 'Let hit the beach', iconName: 'sun'},
    Winter: {text: 'Burr, it is chilly!', iconName: 'snowflake' }
}

const SeasonDisplay = props => {

    const season = getSeason(props.lat, new Date().getMonth());

    const {text,iconName} = seasonConfig[season]

    return (
    <div className={`season-display ${season}`}>
       <i className={`icon-left ${iconName} massive icon`}/>
        <h1> {text}</h1> 
        <i className={`icon-right ${iconName} massive icon`}/>
    </div>
    )
};

export default SeasonDisplay;

// We opt to use seasonConfig instead of the following code
// const icon = season==='Winter' ? 'snowflake' : 'sun';
// const text =  season=== 'Winter' ? 'Burr, it is chilly!' : `Lets hit the beach`