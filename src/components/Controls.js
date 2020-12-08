import React, { useState } from 'react';


const Controls = (props) =>
{
    const [lootType, setLootType] = useState('individual');
    const [currentCR, setCurrentCR] = useState('0-4')

    const getLootButtonHandler = () => {
        props.getInput({type: lootType, cr: currentCR});
    }

    return(
        <div style={styles.controlsStyle}>
            <button onClick={() => {setLootType('individual')}}>Individual</button>
            <button onClick={() => {setLootType('hoard')}}>Hoard</button>
            <br/>
            <button onClick={() => {setCurrentCR('0-4')}}>CR: 0-4</button>
            <button onClick={() => {setCurrentCR('5-10')}}>CR: 5-10</button>
            <button onClick={() => {setCurrentCR('11-16')}}>CR: 11-16</button>
            <button onClick={() => {setCurrentCR('17+')}}>CR: 17+</button>
            <br/>
            <button onClick={() => {getLootButtonHandler()}}>What's my loot?</button>
        </div>
    )
}

export default Controls;

const styles = {
    controlsStyle: {
        backgroundColor: 'rgb(80,80,80)',
        height: 200,
        width: 500
    }
}