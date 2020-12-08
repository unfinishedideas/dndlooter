import React, { useState } from 'react';

// components
import Display from './Display';
import Controls from './Controls';

// functions
import getLoot from '../functions/getLoot';

const Casing = () =>
{
    const [currentDisplayValue, setCurrentDisplayValue] = useState('waiting');

    const getInput = (data) => {
        const newData = getLoot(data);
        setCurrentDisplayValue(newData);
    }


    return(
        <div style={styles.outerCase}>
            <Display displayValue={currentDisplayValue}/>
            <Controls getInput={getInput}/>
        </div>
    )
}

export default Casing;

const styles = {
    outerCase: {
        backgroundColor: 'rgb(20,20,20)',
        height: 800,
        width: 500,
    }
}